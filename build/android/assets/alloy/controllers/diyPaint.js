function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){var t=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});d.sizeBar.animate(t)}function t(t){"color"==t.source.mod?(C?(i(-330),C=0):(i(60),C=1),1==x&&o(),L=0,e(-250)):(L?(e(-250),L=0):(e(40),L=1),1==x&&o(),C=0,i(-330))}function i(e){var t=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});d.colorSwatches.animate(t)}function o(){Z(),1==x?(x=0,d.diyPaint.remove(W)):(x=1,i(-330),e(-250),C=0,L=0,d.diyPaint.add(W),W.addEventListener("click",$))}function a(e){"bucket"==E?(m=parseInt(e.value),Ti.App.fireEvent("web:setSensetive",{value:m})):"brush"==E?(T=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:T})):"erase"==E&&(f=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:f}))}function r(){var e=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});e.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){if(e.media,e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO){I=d.toolbar.rect.height,y=g-I-p,d.canvas.setBottom(I),d.canvas.setHeight(y);var t=e.media.nativePath;console.log(v),w.rotateResizeImage(t,v,100),Ti.App.Properties.setString("image",t),Ti.App.fireEvent("web:loadImage",{image:t,height:y}),d.shareButton.touchEnabled="true"}},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){I=d.toolbar.rect.height,y=g-I-p,d.canvas.setBottom(I),d.canvas.setHeight(y);var t=e.media.nativePath;Ti.App.Properties.setString("image",t),Ti.App.fireEvent("web:loadImage",{image:t,height:y}),d.shareButton.touchEnabled="true"},cancel:function(){}})}),e.show()}function l(){for(var e=50*Math.ceil(U.length)+10,t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),i=0;i<U.length;i++){var o=b.getColourById(U[i].colour_id),a=d.UI.create("View",{backgroundColor:"rgb("+o.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});n(a,o),t.add(a)}d.recommendView.add(t)}function n(e,t){e.addEventListener("click",function(){var e=t.rgb.split(","),o=rgbToHex(e[0],e[1],e[2]);d.color.setBackgroundColor(o),Ti.App.fireEvent("web:setColour",{r:e[0],g:e[1],b:e[2],hex:o}),C?(i(-330),C=0):(i(60),C=1)})}function s(){for(var e=50*Math.ceil(S.length/3)+10,t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),i=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),o=Titanium.UI.createView({layout:"horizontal",height:40,width:e}),a=-1,r=[],l=0;l<S.length;l++){a=r.length;for(var s=0;s<r.length;s++)if(S[l].contrast>=r[s].contrast){a=s;break}r.splice(a,0,S[l])}for(var l=0;l<r.length;l++){var _=d.UI.create("View",{backgroundColor:"rgb("+r[l].rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});(l+1)%3==1?t.add(_):(l+1)%3==2?i.add(_):(l+1)%3==0&&o.add(_),n(_,r[l])}d.scrollView.add(t),d.scrollView.add(i),d.scrollView.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var d=this,c={},h={};d.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),d.__views.diyPaint&&d.addTopLevelView(d.__views.diyPaint),d.__views.__alloyId56=Ti.UI.createView({backgroundColor:"white",id:"__alloyId56"}),d.__views.diyPaint.add(d.__views.__alloyId56),d.__views.toggle=Ti.UI.createView({id:"toggle",layout:"horizontal",height:"80",top:"0"}),d.__views.__alloyId56.add(d.__views.toggle),d.__views.__alloyId57=Alloy.createController("toggle",{id:"__alloyId57",__parentSymbol:d.__views.toggle}),d.__views.__alloyId57.setParent(d.__views.toggle),d.__views.__alloyId58=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},text:"DIY Paint",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId58"}),d.__views.toggle.add(d.__views.__alloyId58),d.__views.canvas=Ti.UI.createWebView({top:"80",id:"canvas",url:"/html/canvas-paint-bucket.html",height:"80%",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,disableBounce:"true"}),d.__views.__alloyId56.add(d.__views.canvas),d.__views.colorSwatches=Ti.UI.createView({layout:"vertical",height:"330",bottom:"-330",id:"colorSwatches"}),d.__views.__alloyId56.add(d.__views.colorSwatches),d.__views.__alloyId59=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId59"}),d.__views.colorSwatches.add(d.__views.__alloyId59),d.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical",backgroundColor:"white"}),d.__views.colorSwatches.add(d.__views.bottomColorBar),d.__views.__alloyId60=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"FAVOURITE COLOURS",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId60"}),d.__views.bottomColorBar.add(d.__views.__alloyId60),d.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.bottomColorBar.add(d.__views.recommendView),d.__views.__alloyId61=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId61"}),d.__views.bottomColorBar.add(d.__views.__alloyId61),d.__views.__alloyId62=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"COLOUR LIBRARY",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId62"}),d.__views.bottomColorBar.add(d.__views.__alloyId62),d.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"150",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.bottomColorBar.add(d.__views.scrollView),d.__views.sizeBar=Ti.UI.createView({height:"250",bottom:"-250",width:"100",id:"sizeBar"}),d.__views.__alloyId56.add(d.__views.sizeBar),d.__views.__alloyId63=Ti.UI.createImageView({image:"/images/pop_window2.png",height:"250",width:"100",id:"__alloyId63"}),d.__views.sizeBar.add(d.__views.__alloyId63),d.__views.slider=Ti.UI.createSlider({id:"slider",min:"0",max:"100",value:"20",thumbImage:"/images/size_toggle.png",width:"180"}),d.__views.sizeBar.add(d.__views.slider),a?d.__views.slider.addEventListener("stop",a):h["$.__views.slider!stop!updateAdjustment"]=!0,d.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),d.__views.__alloyId56.add(d.__views.toolbar),d.__views.__alloyId64=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId64"}),d.__views.toolbar.add(d.__views.__alloyId64),d.__views.__alloyId65=Ti.UI.createView({width:"20%",id:"__alloyId65"}),d.__views.__alloyId64.add(d.__views.__alloyId65),d.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_photo.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId65.add(d.__views.photoButton),r?d.__views.photoButton.addEventListener("click",r):h["$.__views.photoButton!click!takePhoto"]=!0,d.__views.__alloyId66=Ti.UI.createView({width:"20%",id:"__alloyId66"}),d.__views.__alloyId64.add(d.__views.__alloyId66),d.__views.tools=Ti.UI.createImageView({id:"tools",image:"/images/icon_bucket.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId66.add(d.__views.tools),o?d.__views.tools.addEventListener("click",o):h["$.__views.tools!click!toolspop"]=!0,d.__views.__alloyId67=Ti.UI.createView({width:"20%",id:"__alloyId67"}),d.__views.__alloyId64.add(d.__views.__alloyId67),d.__views.size=Ti.UI.createImageView({id:"size",image:"/images/icon_size.png",mod:"size",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId67.add(d.__views.size),t?d.__views.size.addEventListener("click",t):h["$.__views.size!click!slideUp"]=!0,d.__views.__alloyId68=Ti.UI.createView({width:"20%",id:"__alloyId68"}),d.__views.__alloyId64.add(d.__views.__alloyId68),d.__views.color=Ti.UI.createView({id:"color",backgroundColor:"#ffffff",height:"40",width:"50",mod:"color",borderColor:"#000000",borderWidth:"3",borderRadius:"10",top:"10",bottom:"10"}),d.__views.__alloyId68.add(d.__views.color),t?d.__views.color.addEventListener("click",t):h["$.__views.color!click!slideUp"]=!0,d.__views.__alloyId69=Ti.UI.createView({width:"20%",id:"__alloyId69"}),d.__views.__alloyId64.add(d.__views.__alloyId69),d.__views.shareButton=Ti.UI.createImageView({touchEnabled:!1,id:"shareButton",image:"/images/icon_share.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId69.add(d.__views.shareButton),D?d.__views.shareButton.addEventListener("click",D):h["$.__views.shareButton!click!share"]=!0,c.destroy=function(){},_.extend(d,d.__views),arguments[0]||{};var u=require("facebook"),w=require("fh.imagefactory"),v=Ti.Platform.displayCaps.platformWidth,g=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight),I=d.toolbar.rect.height,p=d.toggle.getHeight(),y=0,m=d.slider.value,T=10,f=10,E="bucket";Alloy.createCollection("category_colour");var b=Alloy.createCollection("colour");Alloy.createCollection("category");var A=Alloy.createCollection("favourite"),U=A.getFavouriteList(),S=b.getColourList(),L=0,C=0,x=0,V=0,N="";u.appid=752094718209236;var k=Titanium.UI.create2DMatrix();k=k.rotate(-90),d.slider.transform=k,r(),d.toolbar.addEventListener("postlayout",function(){I=d.toolbar.rect.height,y=g-I-p,d.canvas.setBottom(I),d.canvas.setHeight(y)}),d.canvas.addEventListener("load",function(){Ti.App.fireEvent("web:initCanvasSize",{height:y,width:v})});var P=[],B=Ti.UI.createTableViewRow({title:"Save",width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60}),O=Ti.UI.createTableViewRow({title:"Share",width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60});Ti.UI.createLabel({text:"Save",width:150,textAlign:"center",height:60}),Ti.UI.createLabel({text:"Share",width:150,textAlign:"center",height:60}),P.push(B),P.push(O);var R=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_up.png",height:Ti.UI.SIZE,width:150,bottom:60,right:"9%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:P}),D=function(){F(),1==V?(V=0,d.diyPaint.remove(R)):(V=1,d.diyPaint.add(R),R.addEventListener("click",M))},M=function(e){console.log(e.index),V=0,d.diyPaint.remove(R),Ti.App.addEventListener("app:saveToGallery",q),0==e.index?Ti.App.fireEvent("web:saveAndShare",{share:0}):Ti.App.fireEvent("web:saveAndShare",{share:1})},F=function(){R.removeEventListener("click",M)},z=[],H=Ti.UI.createTableViewRow({title:"Bucket",width:150,left:10,touchEnabled:!0,height:60}),G=Ti.UI.createTableViewRow({title:"Brush",width:150,left:10,touchEnabled:!0,height:60}),Y=Ti.UI.createTableViewRow({title:"Eraser",width:150,left:10,touchEnabled:!0,height:60});z.push(H),z.push(G),z.push(Y);var W=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,left:"8%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:z}),$=function(e){x=0,d.diyPaint.remove(W),0==e.index&&(E="bucket",d.slider.setValue(m),Ti.App.fireEvent("web:setSensetive",{value:m}),Ti.App.fireEvent("web:changeTools",{tools:"bucket"}),d.tools.image="/images/icon_bucket.png"),1==e.index&&(E="brush",d.slider.setValue(T),Ti.App.fireEvent("web:setStroke",{value:T}),Ti.App.fireEvent("web:changeTools",{tools:"brush"}),d.tools.image="/images/icon_brush.png"),2==e.index&&(E="erase",d.slider.setValue(f),Ti.App.fireEvent("web:setStroke",{value:f}),Ti.App.fireEvent("web:changeTools",{tools:"erase"}),d.tools.image="/images/icon_erase.png")},Z=function(){W.removeEventListener("click",$)};setTimeout(function(){l(),s()},0);var q=function(e){var t=e.blob,i=t.indexOf("base64,");t=t.substring(i+"base64,".length);var o=Ti.Utils.base64decode(t),a="sissons_diy"+printDate()+".png",r=Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);r.exists()||r.createDirectory();var l=Titanium.Filesystem.getFile(r.resolve(),a);if(!1===l.write(o)){var n=Ti.UI.createNotification({message:"Saved FAILED",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});n.show()}else{N=l.nativePath;var n=Ti.UI.createNotification({message:"Saved Done",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});n.show()}if(1==e.share){console.log("share");var s=Alloy.createController("share",{imgPath:N}).getView();s.open()}l=null,r=null,Ti.App.removeEventListener("app:saveToGallery",q)};h["$.__views.slider!stop!updateAdjustment"]&&d.__views.slider.addEventListener("stop",a),h["$.__views.photoButton!click!takePhoto"]&&d.__views.photoButton.addEventListener("click",r),h["$.__views.tools!click!toolspop"]&&d.__views.tools.addEventListener("click",o),h["$.__views.size!click!slideUp"]&&d.__views.size.addEventListener("click",t),h["$.__views.color!click!slideUp"]&&d.__views.color.addEventListener("click",t),h["$.__views.shareButton!click!share"]&&d.__views.shareButton.addEventListener("click",D),_.extend(d,c)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;