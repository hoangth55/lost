var Tab=function(b,d,g,a,i){function h(){selected=true;g.show();b.addClass(a.active).removeClass(a.inactive);for(var e in d)f(d[e]).trigger(Tab.TAB_OPENED,c)}a=a||{active:"active",inactive:"inactive",hover:"hover"};var c=this,f=jQuery;c._data=i;c.jq=b;d=d||[];c.select=h;b.click(function(e){h(e)});b.hover(function(){b.addClass(a.hover)},function(){b.removeClass(a.hover)});f(c).bind(Tab.TAB_OPENED,function(e,j){if(j!=c){selected=false;g.hide();b.addClass(a.inactive).removeClass(a.active)}else f(document).trigger(Tab.TAB_SELECTED,
c)})};Tab.TAB_OPENED="MODO_TAB_OPEN";Tab.TAB_SELECTED="MODO_TAB_SELECT";