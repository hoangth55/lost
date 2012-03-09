# Create your views here.
from django.http import HttpResponse
from django.template import Context
from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse, Http404
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.contrib.auth import logout
from bookmarks.forms import *
from django.shortcuts import render_to_response
from bookmarks.models import *
from bookmarks.views import *
from polls.models import Poll
from django.contrib.auth.decorators import login_required
@login_required

def index(request):
    latest_poll_list = Poll.objects.all().order_by('-pub_date')[:5]
    return render_to_response('index.html', {'latest_poll_list': latest_poll_list})
    #output = ', '.join([p.question for p in latest_poll_list])
    #return HttpResponse(output)


def logout_page(request):
	logout(request)
	return HttpResponseRedirect('/')
	
def main_page(request):
    """

    """
    global state
    state = '..........'

    if request.method == 'POST':
        form = loginPage(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username = username, password = password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect('/')
            else:
                state ='Username and passowrd didn\'t match. Please try again.!'
                return render_to_response('main_page.html', RequestContext(request,{'state':state}))
    else:
        form = loginPage()

    variables = RequestContext(request, {
        'Main_form': form,
    })

    return render_to_response(
	    'main_page.html', variables)


def user_page(request, username):
	try:
		user = User.objects.get(username=username)
	except User.DoesNotExist:
		raise Http404(u'Requested user not found.')
	bookmarks = user.bookmark_set.all()
	variables = RequestContext(request, {
		'username': username,
		'bookmarks': bookmarks
	})
	return render_to_response('user_page.html', variables)
	
def register_page(request):
	if request.method == 'POST':
		form = RegistrationForm(request.POST)
		if form.is_valid():
			user = User.objects.create_user(
				username=form.cleaned_data['username'],
				password=form.cleaned_data['password1'],
				email=form.cleaned_data['email']
			)
			return HttpResponseRedirect('/register/success/')
	else:
		form = RegistrationForm()
	variables = RequestContext(request, {
        'Res_form': form
    })
	return render_to_response(
		'registration/register.html', 
		variables
	)
def bookmark_save_page(request):
    if request.method == 'POST':
		form = BookmarkSaveForm(request.POST)
		if form.is_valid():
			# Create or get link.
			link, dummy = Link.objects.get_or_create(
				url=form.cleaned_data['url']
			)
			# Create or get bookmark.
			bookmark, created = Bookmark.objects.get_or_create(
				user=request.user,
				link=link
			)
			# Update bookmark title.
			bookmark.title = form.cleaned_data['title']
			# If the bookmark is being updated, clear old tag list.
			if not created:
				bookmark.tag_set.clear()
			# Create new tag list.
			tag_names = form.cleaned_data['tags'].split()
			for tag_name in tag_names:
				tag, dummy = Tag.objects.get_or_create(name=tag_name)
				bookmark.tag_set.add(tag)
			# Save bookmark to database.
			bookmark.save()
			return HttpResponseRedirect(
				'/user/%s/' % request.user.username
			)
    else:
        form = BookmarkSaveForm()
    variables = RequestContext(request, {
	    'Save_form': form
    })
    return render_to_response('bookmark_save.html', variables)

	
	
	
	
	
	
	#output = u'''
	#	<html>
	#		<head><title>%s </title></head>
	#		<body>
	#			<h1>%s</h1><p>%s</p>
	#		</body>
	#	</html>
	#''' % (
	#	u'Django Bookmarks',
	#	u'Welcome to Django Bookmarks',
	#	u'Where you can store and share bookmarks!'
	#)
	#return HttpResponse (output)
