function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){console.log(a.length);for(var e=50*Math.ceil((a.length+1)/2)+10,i=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),o=Titanium.UI.createView({layout:"horizontal",height:40,width:e}),r=0;r<a.length;r++){var l=t.UI.create("View",{backgroundColor:"rgb("+a[r].rgb+")",width:"40",height:"40",left:"5",right:"5"});r%2==1?i.add(l):o.add(l)}t.scrollView.add(i),t.scrollView.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourPicker",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.mainView=Ti.UI.createView({backgroundColor:"white",id:"mainView"}),t.__views.mainView&&t.addTopLevelView(t.__views.mainView),t.__views.__alloyId41=Ti.UI.createView({layout:"horizontal",height:"80",top:"0",id:"__alloyId41"}),t.__views.mainView.add(t.__views.__alloyId41),t.__views.__alloyId42=Alloy.createController("toggle",{id:"__alloyId42",__parentSymbol:t.__views.__alloyId41}),t.__views.__alloyId42.setParent(t.__views.__alloyId41),t.__views.__alloyId43=Ti.UI.createLabel({font:{fontSize:22},text:"Colour Picker",color:"black",width:"75%",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId43"}),t.__views.__alloyId41.add(t.__views.__alloyId43),t.__views.__alloyId44=Ti.UI.createView({height:"50%",bottom:"0",id:"__alloyId44"}),t.__views.mainView.add(t.__views.__alloyId44),t.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical"}),t.__views.__alloyId44.add(t.__views.bottomColorBar),t.__views.__alloyId45=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,bottom:"10",id:"__alloyId45"}),t.__views.bottomColorBar.add(t.__views.__alloyId45),t.__views.__alloyId46=Ti.UI.createLabel({font:{fontSize:18},text:"RECOMMEND COLOURS",color:"black",width:"90%",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId46"}),t.__views.bottomColorBar.add(t.__views.__alloyId46),t.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"50"}),t.__views.bottomColorBar.add(t.__views.recommendView),t.__views.__alloyId47=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,bottom:"10",id:"__alloyId47"}),t.__views.bottomColorBar.add(t.__views.__alloyId47),t.__views.__alloyId48=Ti.UI.createLabel({font:{fontSize:18},text:"COLOUR LIBRARY",color:"black",width:"90%",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId48"}),t.__views.bottomColorBar.add(t.__views.__alloyId48),t.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"100"}),t.__views.bottomColorBar.add(t.__views.scrollView),i.destroy=function(){},_.extend(t,t.__views),arguments[0]||{};var o=Ti.Platform.displayCaps.platformHeight;t.mainView.setHeight(o),console.log(t.mainView.getHeight()),t.bottomColorBar.setBottom(0);var r=Alloy.createCollection("colour"),a=r.getColourList();e(),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;