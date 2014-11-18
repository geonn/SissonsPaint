function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){r.activityIndicator.hide(),r.loadingBar.opacity="0",r.loadingBar.height="0";var e=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});e.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&(Ti.App.Properties.setString("colour_picker_image",t.nativePath),Ti.App.fireEvent("web:loadImage",{image:t.nativePath}))},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){var t=e.media;e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO&&(Ti.App.Properties.setString("colour_picker_image",t.nativePath),Ti.App.fireEvent("web:loadImage",{image:t.nativePath}))},cancel:function(){}})}),e.show()}function t(){r.colorSelection.visible?r.colorSelection.hide():r.colorSelection.show()}function i(){for(var e=Math.floor(Math.random()*p.length),t=v.getCategoryColourByCategory(p[e].id),i=50*Math.ceil(t.length)+10,o=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:i}),l=0;l<t.length;l++){var n=I.getColourById(t[l].colour_id);if(""!=n.thumb)var s=r.UI.create("ImageView",{image:n.thumb,borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});else var s=r.UI.create("View",{backgroundColor:"rgb("+n.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});var _=v.getCateByColourId(n.id),d=y.getCategoryById(_.cate_id,"2");a(s,n,d),o.add(s)}r.recommendView.add(o)}function o(){removeAllChildren(r.scrollView);for(var e=50*g.length+20,t=Titanium.UI.createView({layout:"horizontal",height:40,width:e}),i=0;i<g.length;i++){if(""!=g[i].thumb)var o=r.UI.create("ImageView",{image:g[i].thumb,borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});else var o=r.UI.create("View",{backgroundColor:"rgb("+g[i].rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});var l=v.getCateByColourId(g[i].id),n=y.getCategoryById(l.cate_id,"2");a(o,g[i],n),t.add(o)}r.loadingBar.opacity="0",r.loadingBar.height="0",r.loadingBar.top="0",r.scrollView.add(t),r.colorSelection.show()}function a(e,t,i){e.addEventListener("click",function(){Ti.App.Properties.setString("from","colourPicker");var e=Alloy.createController("colourDetails",{colour_details:t,details:i}).getView();e.open()})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourPicker",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var r=this,l={},n={};r.__views.colourPicker=Ti.UI.createView({backgroundColor:"white",id:"colourPicker"}),r.__views.colourPicker&&r.addTopLevelView(r.__views.colourPicker),r.__views.toggle=Ti.UI.createView({layout:"horizontal",id:"toggle",top:"0",height:"80",backgroundImage:"/images/banner_colour_picker.jpg"}),r.__views.colourPicker.add(r.__views.toggle),r.__views.__alloyId44=Alloy.createController("toggle",{id:"__alloyId44",__parentSymbol:r.__views.toggle}),r.__views.__alloyId44.setParent(r.__views.toggle),r.__views.canvas=Ti.UI.createWebView({id:"canvas",url:"/html/colour_picker.html",top:"80",height:"80%",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,disableBounce:"true"}),r.__views.colourPicker.add(r.__views.canvas),r.__views.loadingBar=Ti.UI.createView({layout:"vertical",id:"loadingBar",height:"0",width:"120",borderRadius:"15",top:"0",opacity:"1",backgroundColor:"#2E2E2E"}),r.__views.colourPicker.add(r.__views.loadingBar),r.__views.activityIndicator=Ti.UI.createActivityIndicator({style:Ti.UI.ActivityIndicatorStyle.BIG,top:15,left:30,width:60,id:"activityIndicator"}),r.__views.loadingBar.add(r.__views.activityIndicator),r.__views.__alloyId45=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#ffffff",text:"Loading",id:"__alloyId45"}),r.__views.loadingBar.add(r.__views.__alloyId45),r.__views.colorSelection=Ti.UI.createView({layout:"vertical",height:"40%",bottom:"60",id:"colorSelection",visible:"false"}),r.__views.colourPicker.add(r.__views.colorSelection),r.__views.__alloyId46=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,top:"0",id:"__alloyId46"}),r.__views.colorSelection.add(r.__views.__alloyId46),r.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical",backgroundColor:"white"}),r.__views.colorSelection.add(r.__views.bottomColorBar),r.__views.__alloyId47=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"COLOURS INSPIRATION",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",backgroundColor:"white",id:"__alloyId47"}),r.__views.bottomColorBar.add(r.__views.__alloyId47),r.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),r.__views.bottomColorBar.add(r.__views.recommendView),r.__views.__alloyId48=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"white",width:Titanium.UI.FILL,id:"__alloyId48"}),r.__views.bottomColorBar.add(r.__views.__alloyId48),r.__views.__alloyId49=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"CLOSEST COLOUR",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",backgroundColor:"white",id:"__alloyId49"}),r.__views.bottomColorBar.add(r.__views.__alloyId49),r.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),r.__views.bottomColorBar.add(r.__views.scrollView),r.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),r.__views.colourPicker.add(r.__views.toolbar),r.__views.__alloyId50=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId50"}),r.__views.toolbar.add(r.__views.__alloyId50),r.__views.__alloyId51=Ti.UI.createView({width:"30%",id:"__alloyId51"}),r.__views.__alloyId50.add(r.__views.__alloyId51),r.__views.__alloyId52=Ti.UI.createView({width:"20%",id:"__alloyId52"}),r.__views.__alloyId50.add(r.__views.__alloyId52),r.__views.takePhoto=Ti.UI.createImageView({id:"takePhoto",image:"/images/icon_photo.png",height:"40",width:"50",top:"10",bottom:"10"}),r.__views.__alloyId52.add(r.__views.takePhoto),e?r.__views.takePhoto.addEventListener("click",e):n["$.__views.takePhoto!click!takePhoto"]=!0,r.__views.__alloyId53=Ti.UI.createView({width:"20%",id:"__alloyId53"}),r.__views.__alloyId50.add(r.__views.__alloyId53),r.__views.toggleActivation=Ti.UI.createImageView({id:"toggleActivation",image:"/images/btn_eyedrop.png",height:"40",width:"50",top:"10",bottom:"10"}),r.__views.__alloyId53.add(r.__views.toggleActivation),t?r.__views.toggleActivation.addEventListener("click",t):n["$.__views.toggleActivation!click!toggleActivation"]=!0,r.__views.__alloyId54=Ti.UI.createView({width:"30%",id:"__alloyId54"}),r.__views.__alloyId50.add(r.__views.__alloyId54),r.__views.win=Ti.UI.createView({id:"win",height:"80%",width:"80%",backgroundColor:"transparent",theme:"Theme.NoActionBar",navBarHidden:"true",fullscreen:"true",borderColor:"#A5A5A5",borderWidth:"2",visible:"false"}),r.__views.colourPicker.add(r.__views.win);var s=[];r.__views.view1=Ti.UI.createView({id:"view1",backgroundColor:"white"}),s.push(r.__views.view1),r.__views.__alloyId56=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"View 1",id:"__alloyId56"}),r.__views.view1.add(r.__views.__alloyId56),r.__views.view2=Ti.UI.createView({id:"view2",backgroundColor:"white"}),s.push(r.__views.view2),r.__views.__alloyId57=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"View 2",id:"__alloyId57"}),r.__views.view2.add(r.__views.__alloyId57),r.__views.view3=Ti.UI.createView({id:"view3",backgroundColor:"white"}),s.push(r.__views.view3),r.__views.__alloyId58=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"View 3",id:"__alloyId58"}),r.__views.view3.add(r.__views.__alloyId58),r.__views.__alloyId59=Ti.UI.createView({layout:"horizontal",bottom:"10",height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:"__alloyId59"}),r.__views.view3.add(r.__views.__alloyId59),r.__views.checkBox=Ti.UI.createSwitch({value:!1,id:"checkBox",style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX}),r.__views.__alloyId59.add(r.__views.checkBox),r.__views.showWindow=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"Don't show next time",id:"showWindow"}),r.__views.__alloyId59.add(r.__views.showWindow),r.__views.scrollableView=Ti.UI.createScrollableView({views:s,id:"scrollableView",showPagingControl:"true",pagingControlTimeout:"0"}),r.__views.win.add(r.__views.scrollableView),l.destroy=function(){},_.extend(r,r.__views),arguments[0]||{};var d=require("facebook");d.appid=752094718209236,Ti.Platform.displayCaps.platformHeight;var c=Ti.Platform.displayCaps.platformWidth,h=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight),u=r.toggle.getHeight(),w=h-u,v=Alloy.createCollection("category_colour"),I=Alloy.createCollection("colour"),g="",y=Alloy.createCollection("category"),p=y.getCategoryListByType(1);r.activityIndicator.show(),r.loadingBar.opacity="1",r.loadingBar.height="120",r.loadingBar.top=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2,r.colorSelection.hide(),setTimeout(function(){e(),i()},800),r.canvas.addEventListener("load",function(){r.colorSelection.hide(),Ti.App.fireEvent("web:initCanvasSize",{height:w,width:c})}),1==Ti.App.Properties.getString("back")&&Ti.App.Properties.setString("back",0);var m=function(e){r.activityIndicator.show(),r.loadingBar.opacity="1",r.loadingBar.height="120",r.loadingBar.top=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2-r.loadingBar.getHeight()/2,r.colorSelection.hide(),g=I.getClosestColourList(e.r,e.g,e.b),o()};Ti.App.addEventListener("app:getColour",m),r.win.hide();var T=Ti.UI.createImageView({image:"/images/icon_remove.png",width:30,height:30,top:0,right:0});r.view3.add(T),T.addEventListener("click",function(){r.win.hide()}),n["$.__views.takePhoto!click!takePhoto"]&&r.__views.takePhoto.addEventListener("click",e),n["$.__views.toggleActivation!click!toggleActivation"]&&r.__views.toggleActivation.addEventListener("click",t),_.extend(r,l)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;