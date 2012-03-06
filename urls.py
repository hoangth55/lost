# Uncomment the next two lines to enable the admin:
from django.conf.urls.defaults import *
from bookmarks.views import *
from django.contrib import admin
from django.views.generic.simple import direct_to_template
import os
admin.autodiscover()

site_media = os.path.join(
	os.path.dirname(__file__), 'site_media'
)
urlpatterns = patterns('',
# Uncomment the next line to enable the admin:
    (r'^polls/$', index),
    #(r'^polls/(?P<poll_id>\d+)/$', 'detail'),
    #(r'^polls/(?P<poll_id>\d+)/results/$', 'results'),
    #(r'^polls/(?P<poll_id>\d+)/vote/$', 'vote'),
    #(r'^polls/', include('polls.urls')),
    #(r'^', include('polls.urls')),
    (r'^admin/', include (admin.site.urls)),

	#Browsing
	(r'^$', main_page),
	(r'^user/(\w+)/$', user_page),
	
	#Session management
	(r'^login/$','django.contrib.auth.views.login'),
	(r'^logout/$',logout_page),
	(r'^register/$', register_page),
	(r'^register/success/$', direct_to_template,
		{'template': 'registration/register_success.html'}),

	#Site media
	(r'^site_media/(?P<path>.*)$', 'django.views.static.serve',
		{'document_root': site_media}),
		
	#Account management	
	(r'^save/$', bookmark_save_page),
)
#urlpatterns = patterns('polls.views',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^mysite/', include('mysite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    #(r'^polls/$', 'index'),
    #(r'^polls/(?P<poll_id>\d+)/$', 'detail'),
    #(r'^polls/(?P<poll_id>\d+)/results/$', 'results'),
    #(r'^polls/(?P<poll_id>\d+)/vote/$', 'vote'),
#)
#urlpatterns += patterns('',
#    (r'^admin/', include(admin.site.urls)),
#)

