function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){return e/(Titanium.Platform.displayCaps.dpi/160)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),t.__views.diyPaint&&t.addTopLevelView(t.__views.diyPaint),t.__views.__alloyId95=Ti.UI.createView({backgroundColor:"white",id:"__alloyId95"}),t.__views.diyPaint.add(t.__views.__alloyId95),t.__views.toggle=Ti.UI.createView({id:"toggle",layout:"horizontal",height:"80",top:"0"}),t.__views.__alloyId95.add(t.__views.toggle),t.__views.__alloyId96=Alloy.createController("toggle",{id:"__alloyId96",__parentSymbol:t.__views.toggle}),t.__views.__alloyId96.setParent(t.__views.toggle),t.__views.__alloyId97=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"DIY Paint",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId97"}),t.__views.toggle.add(t.__views.__alloyId97),t.__views.canvas=Ti.UI.createWebView({id:"canvas",url:"/html/canvas-paint-bucket.html",disableBounce:"true"}),t.__views.__alloyId95.add(t.__views.canvas),t.__views.toolbar=Ti.UI.createView({height:Ti.UI.SIZE,bottom:"0",id:"toolbar"}),t.__views.__alloyId95.add(t.__views.toolbar),t.__views.settings1=Ti.UI.createImageView({width:"16.6%",id:"settings1",mod:"settings",left:"0",image:"/images/power-icons.png"}),t.__views.toolbar.add(t.__views.settings1),t.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"16.6%",image:"/images/power-icons.png"}),t.__views.toolbar.add(t.__views.settings),t.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"33.2%",image:"/images/power-icons.png"}),t.__views.toolbar.add(t.__views.settings),t.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"49.8%",image:"/images/power-icons.png"}),t.__views.toolbar.add(t.__views.settings),t.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"66.4%",image:"/images/power-icons.png"}),t.__views.toolbar.add(t.__views.settings),t.__views.settings=Ti.UI.createImageView({width:"16.6%",id:"settings",mod:"settings",left:"83%",image:"/images/power-icons.png"}),t.__views.toolbar.add(t.__views.settings),i.destroy=function(){},_.extend(t,t.__views),arguments[0]||{};var o=Ti.Platform.displayCaps.platformWidth,l=e(Ti.Platform.displayCaps.platformHeight),a=t.toolbar.rect.height,r=t.toggle.getHeight();t.toolbar.addEventListener("postlayout",function(){console.log(o),console.log(e(o)),a=t.toolbar.rect.height;var i=l-a-48-r;t.canvas.setBottom(a),t.canvas.setHeight(i)}),Ti.API.info("Ti.Platform.displayCaps.density: "+Ti.Platform.displayCaps.density),Ti.API.info("Ti.Platform.displayCaps.dpi: "+Ti.Platform.displayCaps.dpi),Ti.API.info("Ti.Platform.displayCaps.platformHeight: "+Ti.Platform.displayCaps.platformHeight),Ti.API.info("Ti.Platform.displayCaps.platformWidth: "+Ti.Platform.displayCaps.platformWidth),Ti.API.info("Ti.Platform.displayCaps.xdpi: "+Ti.Platform.displayCaps.xdpi),Ti.API.info("Ti.Platform.displayCaps.ydpi: "+Ti.Platform.displayCaps.ydpi),Ti.API.info("Ti.Platform.displayCaps.logicalDensityFactor: "+Ti.Platform.displayCaps.logicalDensityFactor),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;