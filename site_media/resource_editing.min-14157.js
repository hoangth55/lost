var modo=modo||{};modo.elements=modo.elements||{};modo.controls=modo.controls||{};modo.resources=modo.resources||{};modo.resource_editing=modo.resource_editing||{};modo.resources=modo.resources||{};modo.resource_editing=modo.resource_editing||{};modo.resources=modo.resources||{};modo.resource_editing=modo.resource_editing||{};var AddFileDialog,AddResourceDialog,EditResourceBox,resources=resources||{};modo=modo||{};modo.data=modo.data||{};resources=resources||{};
(function(b){b(function(){var F=modo,ca=F.elements,Ca=F.resources,M=F.resource_editing,S=setUpInheritance,Y=GlobalDispatcher,A=GlobalDispatcher_j,i=modo.EL,D=AbstElement,La=countProperties,Ma=ListBox,ra=FolderProperties;F=modo;ca=F.elements;Ca=F.resources;M=F.resource_editing;var da=F.killEventBubbling,u=ca.createElement,T=ca.A,Na=ca.BUTTON,Oa=Ca.TinyResource,sa=F.controls.Add2FoldersBox||sa,Da=_ResourcesView.buildResKey,Pa=SelectableFolder,Qa=ResourceInfo,Ra=b(document),Sa=b(window),ta=folders,a=
translated_text,G=ca.DIV,ua=LimitedSelectList,ea=ConfirmBox,N=b.getJSON,y=b.facebox,ma=JSON.stringify,Ta=groups,Ea=Uploader,H=AddFileDialog,O=AddLinkDialog,Fa=ResourceInfoForm,Ga=SendButton,Ua=SelectableItem,B=user_type,Va=ResourceEvents,Wa=ca.INPUT,va=resources.FilteringUI,ha=b("body");F=DEPENDENCY_LOADED;var Xa=resources.ItemBox,Ya=resources.ItemBoxTmp,Ha=Selectable,wa=SelectList,Za=ThumbsSelection,xa=AddResourceDialog,na=AuthorshipPanel,Ia=FolderPanel,ya=M.ResourcesInfoPanel,za=M.FolderInfo,Aa=
M.FolderInfoBar,oa=modo.data.gCollections,$a=list_view,U,Ja=resources.FilterController,P=resources.EditUI;modo.resource_editing=modo.resource_editing||{};ya=M=modo.resource_editing.ResourcesInfoPanel=function(s,v,n,r){function m(){var l=La(o);if(l){p();if(l>1){var q,I;e.addClass(d);K.removeAll();for(I in o){q=o[I];q=new Oa(q.name,q);q.remove_j.click(t);K.addExisting(q)}Z.text(a.selected_items.replace("%1$s",l));K.jq.css({"max-height":Sa.height()-parseInt(e.css("top"))-70,"overflow-y":"auto"})}else{for(q in o)break;
q=o[q];e.removeClass(d+" file link embed").addClass(q.type+q.partner_embed_css);(l=q.thumb_url||q.thumb)?V.attr("src",l):V.attr("src","");Z.html(q.name);$.text("").text(q.url);fa.setData(q,{profile:1,add_box:1})}W=0;C.jq.hide();e.show()}else e.hide()}function t(l){l=b(l.target).parent();res_data=l.data("data");E(res_data);s.deselectItem(res_data);l.remove()}function h(l){da(l);if(W){W=0;g()}else{W=1;C.load(z,j(),Pa)}}function g(){W=0;C.jq.hide()}function j(){var l,q=[];for(l in o)Q?q.push({url:o[l].url,
name:o[l].name,thumb:o[l].thumb}):q.push(o[l].id);return q}function p(){if(!aa){fa=new Qa(0,a);V=b(i.IMG).addClass("thumb");Z=b(i.D);b(i.D).addClass("link").append(b(i.SP).text(a.website),$=b(i.A));b(i.D).addClass("desc").append(b(i.SP).text(a.description),b(i.D));var l,q=ta.users;K=new Ma(0,0,0,1);ga=b(u(Na)).text(a.folder).click(h);q=ta.users;var I;for(l in q){I=q[l];z.push({id:I.folder_id,name:I.label})}C=new sa;C.scale_items=0;C.allow_multiple=1;C.disp.bind(sa.ADDED,function(){c.onAdded2Folder&&
c.onAdded2Folder();g()});Ra.click(function(){g()});e.click(da).append(b(i.D).addClass("header-wrap").append(Z,w),b(i.D).addClass(x+" b1").append(V,fa.jq),K.jq.addClass(x+" b2"),b(i.D).addClass("foot").append(C.jq.hide().keydown(function(ia){switch(ia.which){case 13:g();return false}}),ga,n,r));aa=1}}var c=this,e,d="multi",x="body",o={},E,aa,fa,Z,w,V,$,ga,K,W=0,C,Q;A.bind(ra.CREATED,function(l,q){z.push({id:q.folder_id,name:q.label})});D.apply(c,[i.D]);e=c.jq.addClass("clearfix cf-all resources ResourcesInfoPanel");
c.close_j=w=b(i.A).addClass("x").text("X");c.addResource=function(l){o[Da(l)]=l;m()};E=c.removeResource=function(l){delete o[Da(l)];m()};c.clearResources=function(){for(var l in o)delete o[l];K.removeAll()};c.setGdocsBool=function(l){C.setGdocsBool(l);Q=l};var z=[];switch(user_type){case "TEACHER":case "PUBLISHER":z.push({id:"fav",name:a.favorites,css:"fav"})}};S(ya,D);modo.resource_editing=modo.resource_editing||{};za=M=modo.resource_editing.FolderInfo=function(){function s(){if(!r){r=1;g=new ua;
g.allow_multiple=1;g.scale_items=g.scale_box=0;g.load(Ta,GroupLbl);b(g).bind(ua.SELECTION,function(){v()}).bind(ua.DESELECTION,function(){v()});n.jq.addClass("clearfix cf-all resources FolderInfo").append(b(u(G)).addClass("hint").text(a.dnd_hint),b(u(G)).addClass("share-head").text(a.folder_sharing),b(u(G)).addClass("share-inst").text(a.share_folder_w),g.jq)}}function v(){if(!m){var c=[],e,d=g.getSelectedData();for(e in d)c.push(d[e].group_id);t.groups=c;N("/library/ajax-update-folder",{folder_id:h,
name:t.name,groups:ma(c)})}}var n=this,r,m,t,h,g,j,p;b(i.BTN).addClass("delete").click(function(){p=new ea(a["delete-folder-prompt"],a,{});p.disp.bind(ea.CONFIRMED,function(){N("/library/ajax-delete-folder",{folder_id:j.data.folder_id});n.onDelConfirm&&j&&n.onDelConfirm(j);y.close()});y(p.jq);y.setTitle(a["delete-folder"])}).val(a["delete-folder"]);D.apply(n,[i.D]);n.setFolder=function(c){s();j=c;c=c.data;m=1;c["public"]=parseInt(c["public"]);t=c;h=c.folder_id;g.deselectAll();var e,d,x=g.items;for(e in x){d=
x[e];d.selected_bgc=0;c.groups.toString().indexOf(d.data.group_id)!=-1&&d.select()}m=0}};S(za,D);modo.resource_editing=modo.resource_editing||{};Aa=modo.resource_editing.FolderInfoBar=function(s){function v(){var o=t["public"]=t["public"]?0:1;o?j.addClass(r):j.removeClass(r);N("/library/ajax-set-folder-public",{folder_id:h,"public":o})}var n=this,r="on",m,t,h,g,j,p,c,e,d,x=b(u(T)).addClass("delete").click(function(){d=new ea(a["delete-folder-prompt"],a,{});d.disp.bind(ea.CONFIRMED,function(){N("/library/ajax-delete-folder",
{folder_id:e.data.folder_id});n.onDelConfirm&&e&&n.onDelConfirm(e);y.close()});y(d.jq);y.setTitle(a["delete-folder"])}).html(a["delete"]);D.apply(n,[i.D]);n.setFolder=function(o){var E=o.data;if(!m){m=1;n.jq.addClass("clearfix cf-all resource_editing FolderInfoBar FolderInfo").append(b(u(G)).addClass("container").append(g=b(u(T)).addClass("play btn").text(a.play_view),s,x,j=b(u(T)).addClass("public").click(v).text(a["public"]),p=b(u(G)).addClass("url"),c=b(u(G)).addClass("owner eIcon eIconMe")))}e=
o;E["public"]=parseInt(E["public"]);t=E;h=E.folder_id;o="/folder/"+h;user_type=="PUBLISHER"?g.attr("href",o+"?from_collection=1"):g.attr("href",o+"?from_library=1");p.text("http://edmodo.com"+o);E["public"]?j.addClass(r):j.removeClass(r);c.html("<span>"+a.sharedBy+":&nbsp;</span><strong>"+E.creator_formal_name+"</strong>")}};S(Aa,D);H=AddFileDialog=function(s){var v,n,r,m,t=0,h=this.uploader=new Ea(s,0,""),g=b(i.D).addClass("err").hide().append(a["must-select-upload"]);h.disp.bind(Ea.FILE_SELECTED,
function(){v.hide();g.hide();n.show();m&&m.remove()});Y.file_added_listener||b(Y).bind(H.IFRAME_RETURNED,function(){Y.sendEvent(H.ADDED)});Y.file_added_listener=1;D.apply(this,[i.D]);this.jq.addClass("AddFileDialog").append(v=b(i.D).addClass("ui1").append(this.newDiv("add-file",[a.add_file]),h.jq),n=b(i.D).addClass("ui2").append(r=b(i.D).append(a.file),h.list_j,b(i.D).addClass("reset").append(b(i.A).click(function(){n.hide();v.show();h.reset();h.list_j.insertAfter(r)}).append(a.upload),"&nbsp;",a.replacement_file)).hide(),
g);this.displayFile=function(j){v.hide();m=b(i.D).addClass("file "+j.file_type).append(j.name).insertAfter(r);n.show();t=1};this.submit=function(j){if(!h.list_j.children().length&&!t){g.show();return 0}else g.hide();h.data_hdn_j.val(ma(j));h.form_j.submit();return 1}};S(H,D);H.IFRAME_RETURNED="edmodo-AddFileDialog-iframe-returned";H.ADDED="AddFileDialog.ADDED";xa=AddResourceDialog=function(s){function v(){_send_btn.reset();y.close()}function n(e){r(e);_add_file_dialog.submit(e)}function r(e){if(B==
"PUBLISHER"){var d=_resource_info_form.getEntry();e.desc=d.desc;e.thumb=d.thumb}}function m(e){r(e);_add_link_dialog.submit(e)}function t(e,d){_add_file_dialog.jq.hide();_add_link_dialog.jq.hide();j.removeClass(h);p.removeClass(h);d.addClass(h);e.jq.show()}var h="on",g=n,j=b(i.D).addClass("file "+h).append(s.files).click(function(){t(_add_file_dialog,j);g=n}),p=b(i.D).addClass("link").append(s.link).click(function(){t(_add_link_dialog,p);g=m}),c=1;add2folder_j=b(i.A).addClass("add2folder sel").click(function(){if(c){c=
0;add2folder_j.removeClass("sel")}else{c=1;add2folder_j.addClass("sel")}}).text(s["add-to-folder"]);_add_file_dialog=new H("/library/ajax-add-files");_add_link_dialog=new O("/library/ajax-add-link");_resource_info_form=new Fa;_send_btn=new Ga(B=="PUBLISHER"?s["add-to-collection"]:s["add-to-library"]);_send_btn.onClick=function(){_send_btn.spin();var e={folder_id:""};if(LibraryGlobal.folder_view&&c)e.folder_id=LibraryGlobal.folder_view;g(e)};A.bind(H.ADDED,v);A.bind(O.ADDED,v);_add_link_dialog.disp.bind(O.REQUESTED_TITLE,
function(){_send_btn.spin()});_add_link_dialog.disp.bind(O.RECEIVED_TITLE,function(){_send_btn.reset()});_add_link_dialog.jq.hide();t(_add_file_dialog,j);D.apply(this,[i.D]);this.jq.addClass("AddResourceDialog").append(add2folder_j,b(i.D).addClass("col-1").append(b(i.D).addClass("tabs").append(j,p),_add_file_dialog.jq,_add_link_dialog.jq),_resource_info_form.jq);this.jq.append(_send_btn.jq);b(document).bind("reveal.facebox",function(){_send_btn.init();_send_btn.pin_wheel_j.attr("style","").hide();
_resource_info_form.init()})};S(xa,D);M=EditResourceBox=function(s){function v(c){n(c);h.submit(c)}function n(c){if(B=="PUBLISHER"){var e=j.getEntry();c.desc=e.desc;c.thumb=e.thumb}}function r(c){n(c);g.submit(c)}function m(c){g.jq.show();submitHandler=r;g.title_tf.setValue(s.name);g.url_tf.setValue(c)}function t(){p.reset();y.close()}function n(c){if(B=="PUBLISHER"){var e=j.getEntry();c.desc=e.desc;c.thumb=e.thumb||e.thumb_url}}function v(c){n(c);h.submit(c)}function r(c){n(c);g.submit(c)}var h=
new H("/library/ajax-edit-file"),g=new O("/library/ajax-edit-link"),j=new Fa(s),p=new Ga(a.save);p.onClick=function(){submitHandler({id:s.id})};h.jq.hide();g.jq.hide();switch(s.type){case "file":h.jq.show();submitHandler=v;h.displayFile(s);break;case "link":m(s.url);break;case "embed":m(s.embed)}A.bind(H.ADDED,t);A.bind(O.ADDED,t);g.disp.bind(O.REQUESTED_TITLE,function(){p.spin()});g.disp.bind(O.RECEIVED_TITLE,function(){p.reset()});D.apply(this,[i.D]);this.jq.addClass("AddResourceDialog EditResourceBox").append(b(i.D).addClass("col-1").append(h.jq,
g.jq),j.jq,p.jq);b(document).bind("reveal.facebox",function(){p.init();p.pin_wheel_j.attr("style","").hide();j.init()});A.bind(Va.FILE_UPDATED,function(){y.close()})};S(M,D);M.FILE_UPDATED="FILE_UPDATED.EditResourceBox";P=resources.EditUI=function(s,v){function n(){Ba.removeClass(Z);ba.css("display","")}function r(f){f?V.sortable("enable"):V.sortable("disable")}function m(f){N("/library/ajax-set-list-view",{list_view:f})}function t(){LibraryGlobal.list_view=1;o.removeClass(aa).addClass(E);m(1)}function h(f){da(f);
if(!b(f.target).hasClass(w)){f=new xa(a,ta,B);y(f.jq);y.setTitle(B=="PUBLISHER"?a["add-to-collection"]:a["add-to-library"])}}function g(){d.res_list.removeSelected();z.clearResources();z.jq.hide();p()}function j(f){var k=d.add_folders_obj;k&&k.new_folder&&delete k.new_folder;k=d.add_folders_obj=k||{};if((B=="PUBLISHER"||B=="TEACHER")&&!k.fav)k.fav=l;for(var L in f){f[L].label=f[L].name;k[f[L].folder_id]=f[L]}k.new_folder=q}function p(){R.addClass(w);ja.addClass(w);ha.removeClass(fa)}function c(){X.show()}
ha.addClass("lib");b("#facebox").click(function(f){da(f)});for(var e in oa)oa[e].label=oa[e].collection_name;var d=this,x,o,E="list",aa="thumbs",fa="res-selected",Z="e-fold-name",w="disabled",V,$=function(f){if(LibraryGlobal.folder_view&&LibraryGlobal.folder_view!="fav"&&!LibraryGlobal.shared_folder){pa.val(ba.text());Ba.addClass(Z);pa[0].focus();da(f)}},ga,K=b(u(T)).addClass("view-tggl").click(function(){if(o.hasClass(aa))t();else{LibraryGlobal.list_view=0;o.removeClass(E).addClass(aa);m(0)}});e=
new DropDown("gCollectionsDd",a.docsCollections,oa,Ua);var W=new za,C=new Aa(b(u(T)).addClass("edit").click($).html(a.editName)),Q=new Za,z,l={folder_id:"fav",label:a.favorites,css:"fav"},q={folder_id:0,onSelect:function(){ia=1;d.folders_panel.addFolder()},label:a["new-folder"],css:"new-folder"},I,ia=0,Ba=b(u(G)),ka=new _ResourcesView(Ba,Q,Xa,Ya),Ka,pa=b(u(Wa)).addClass("title").click(function(f){da(f)}),ab=b(u(T)).addClass("submit eIcon eIconCheck").click(function(){var f=pa.val();n();if(f!=""){ba.text(f);
Ka.setName(f);ka.folder_obj.name=f;N("/library/ajax-set-folder-name",{folder_id:LibraryGlobal.folder_view,name:f})}}),bb=b(u(T)).addClass("cancel eIcon eIconCancel"),ba=ka.title_j.click($);$=a.emp_added2lib;var cb=a.emp_backpack,db=a["no-resources"],eb='<a class="lib">'+a.library+'</a><a class="bp">'+a.backpack+"</a>",fb='<a class="coll">'+a.collection+"</a>",gb='<a class="attachments">'+a.postAttachments+"</a>";switch(B){case "STUDENT":a["add-to-library"]=a.add2bp;case "TEACHER":x=a.empFolderMsg.replace("%1$s",
eb).replace("%2$s",gb);break;case "PUBLISHER":a["add-to-library"]=a["add-to-collection"];x=a.empFolderMsgPub.replace("%1$s",fb)}a.emp_added2lib='<a class="addToLib eBtn Lg">'+a["add-to-library"]+'</a><div class="msg">'+$+"</div>";a.emp_backpack='<a class="addToLib eBtn Lg">'+a.add2bp+'</a><div class="msg">'+cb+"</div>";a["no-resources"]='<div class="resTypes"><div class="embed"></div><div class="pdf"></div><div class="img"></div></div><div class="msg">'+db+"</div>";a.emp_folder='<div class="folderIco"></div><div class="folderMsg"><span>'+
x+'</span></div><div class="sharedFdrMsg">'+a.emp_folder+"</div>";a.authGdocs=modo.config.gdocs.ENABLED?a.noGdocs:'<div class="authGdocs"><div class="logo"></div><a href="'+modo.classes.lib.gdAuthURI+'" class="eBtn">'+a.authGdocs+"</a></div>";b(e.select_list).bind(wa.SELECTION,function(f,k){d.res_view.filterByGcollection(k.data.content_url)});C.onDelConfirm=function(f){f.data.folder_id==LibraryGlobal.folder_view&&J.selectType(na.EVERYTHING);d.folders_panel.removeFolder(f)};va.apply(d,[v,ka,1]);b("#nav>#navWrap>div.navLt").addClass("lib");
b("#nav>#navWrap>div.navLt").prepend(d.search_j);var qa=d.search_tf_j,la;qa.bind("click keyup focus",function(){if(!la){var f=B=="PUBLISHER"?a["search-collection"]:a["search-library"];la=modo.controls.searchBox(qa);la.conf.defaults=[b(u(T)).click(function(){d.submitSearch()}).html(f+"...")];qa.unbind("click keyup");la.init();la.jq.insertAfter(qa.parent().css("position","relative"))}});d.favs_j&&d.favs_j.click(function(){X.hide();r(1)});ha.click(function(){ka.list_box.deselectAll();n()});Q.jq.addClass("small");
LibraryGlobal.sortable=V=Q.list_j.sortable({start:function(){LibraryGlobal.dragging=1;LibraryGlobal.prev_dragging=1;I=0},stop:function(){if(I){I=0;var f=[];Q.list_j.children().each(function(){f.push(b(this).data("data").id)});N("/library/ajax-set-folder-item-order",{folder_id:LibraryGlobal.folder_view,item_ids:f})}},change:function(){I=1}});r(0);Q.empty_j.append(a["no-resources"]);b(u(G)).addClass("favInfo").insertAfter(ka.header_j).text(a.favs_info);A.bind(Ia.FOLDERS_LOADED,function(f,k){j(k)});
x=d.res_view;o=x.jq.addClass(aa);K.insertAfter(ba);x.header_j.addClass("bgGrad");C.jq.insertAfter(x.header_j);$a&&t();d.setFilterState=function(f){ha.removeClass(P.AUTHOR_FILTER+" "+P.FOLDER_FILTER).addClass(f)};var J=d.authorship_panel;J.disp.bind(na.SELECTED,function(){d.type_dd.jq.show();r(0)}).bind(na.DESELECTED,function(){B!="PUBLISHER"&&X.addClass(w);B!="TEACHER"&&B!="PUBLISHER"&&R.hide()});J.added_j.click(function(){X.removeClass(w);R.show()});J.posts_j.click(c);J.added_j.click(c);J.me_j.click(function(){c();
R.show()});J.turnin_j.click(function(){c();R.show()});J.direct_j.click(c);folders&&folders.users&&j(folders.users);A.bind(ra.CREATED,function(f,k){j([k]);if(ia){ia=0;d.disp.trigger(va.ADD_TO_NEW_FOLDER,k.folder_id)}});A.bind(ra.EDITTED,function(f,k){var L=k.folder.data;L.name=L.label=k.name;L.groups=k.groups;d.add_folders_obj[L.folder_id]=L;j()});d.folders_panel.jq.bind(Ia.DELETE_FOLDER,function(f,k){delete d.folders_obj[k];delete d.add_folders_obj[k];j()});var X=d.add_res_j=b(i.BTN).addClass("add-library-btn").click(h).val(a["add-to-library"]),
R=d.delete_btn_j=b(i.BTN).addClass("delete-btn "+w).click(function(){if(R.hasClass(w))return 0;var f=d.res_list.getSelectedData();ga=new ConfirmBox(a["delete-resources-prompt"],a,{});ga.disp.bind(ea.CONFIRMED,function(){Y.sendEvent(U.DELETE_RESOURCES,[f]);g()});y(ga.jq);y.setTitle(a["delete-resource"])}).val(a["delete"]),ja=d.remove_from_folder_j=b(i.BTN).addClass("rem-folder-btn "+w).click(function(){if(ja.hasClass(w))return 0;var f=d.res_list.getSelectedData(),k=new ConfirmBox(a.remove_f_folder_conf,
a,{});k.disp.bind(ea.CONFIRMED,function(){Y.sendEvent(U.REMOVE_FROM_FOLDER,[f]);g()});y(k.jq);y.setTitle(a["remove-from-folder"])}).val(a["remove-from-folder"]);K=b(i.BTN).addClass("add2folder").click(h).val(a["add-to-library"]);z=new ya(x,0,R,ja);d.resPanel=z;z.onAdded2Folder=function(){d.confirmAction(a.folderUpdated)};z.close_j.click(function(){Q.deselectAll()});v.append(b(u(G)).addClass("no-sel-box").text(a["lib-selection-instructions"]),W.jq,b(u(G)).addClass("col3-wrap").append(b(u(G)).append(z.jq)));
d.authorship_panel.jq.prepend(X,K);switch(B){case "STUDENT":X.val(a.add2bp)}b(d.res_list).bind(wa.SELECTION,function(f,k){R.removeClass(w);ja.removeClass(w);z.addResource(k.data);z.setGdocsBool(d.gDocsBool);ha.addClass(fa)}).bind(wa.DESELECTION,function(f,k){if(d.res_list.getSelected().length){R.removeClass(w);ja.removeClass(w)}else p();z.removeResource(k.data)});b(d.folders_panel).bind(Ha.SELECTED,function(f,k){X.hide();if(k.data.groups){W.setFolder(k);C.setFolder(k);Ka=k;r(1);d.type_dd.jq.hide()}else{r(0);
C.setFolder(k);d.type_dd.jq.show();X.show().addClass(w)}});e.jq.insertBefore(d.type_dd.jq);ab.insertAfter(ba);bb.insertAfter(ba);pa.insertAfter(ba);o.delegate(".ResourcesView .folderMsg .lib,.ResourcesView .folderMsg .bp","click",function(){J.added_j.click()}).delegate(".ResourcesView .folderMsg .coll","click",function(){J.posts_j.click()}).delegate(".ResourcesView .folderMsg .attachments","click",function(){J.posts_j.click()}).delegate(".addToLib","click",h)};S(P,va);P.AUTHOR_FILTER="us-auth";P.FOLDER_FILTER=
"us-fol";U=resources.EditController=function(s,v,n){function r(p){var c,e=[];for(c in p)e.push(p[c].id);return e}var m=this,t,h;Ja.apply(m,[s,v,n]);h=m.ui;A.bind(H.ADDED,function(){m.onFileAdded()});A.bind(O.ADDED,function(){m.onLinkAdded()});m.onFileAdded=function(){m.refreshResources();m.ui.confirmAction(a["file-added"])};m.onLinkAdded=function(){m.refreshResources();m.ui.confirmAction(a["link-added"])};s=h.favs_j;var g=h.remove_from_folder_j;s&&s.click(function(){h.setFilterState(P.FOLDER_FILTER);
t="fav";g.val(a.remove_from_favorites)});b(h.folders_panel).bind(Ha.SELECTED,function(p,c){var e=c.data.folder_id;h.setFilterState(P.FOLDER_FILTER);t=e;g.val(a["remove-from-folder"])});A.bind(na.FILTER_BY_AUTHOR,function(){h.setFilterState(P.AUTHOR_FILTER)});A.bind(U.DELETE_RESOURCES,function(p,c){var e=r(c);N("/library/ajax-delete-resources",{ids:ma(e)},j)});A.bind(U.REMOVE_FROM_FOLDER,function(p,c){var e=r(c);N("/library/ajax-remove-resources-from-folder",{folder_id:t,ids:ma(e)},j)});var j=m.onResourcesRemoved=
function(){};h.init()};S(U,Ja);U.DELETE_RESOURCES="edmodo_library_delete_resources";U.REMOVE_FROM_FOLDER="REMOVE_FROM_FOLDER.EditController";Y.sendEvent(F)})})(jQuery);