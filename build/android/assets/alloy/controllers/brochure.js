function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e,t,i,r,o,a){e.addEventListener("click",function(){var l=Titanium.UI.createProgressBar({width:"90%",height:Ti.UI.FILL,min:0,max:1,value:0,message:"",font:{fontSize:12},color:"red"}),_=e.size.height,d=e.size.width,c=Titanium.UI.createView({height:_,width:d,backgroundColor:"#A5A5A5",opacity:.5,bottom:0}),h=Ti.UI.createLabel({color:"black",font:{fontSize:8,fontWeight:"bold"},text:"",top:2,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,width:d,height:_});"0"==o?(r.add(c),r.add(l),r.add(h)):(r.remove(c),r.remove(l),r.remove(h)),n(i,!0,l,h,function(e){e?alert(e):(s.updateDownloadedBrochure(t),""!=a&&r.remove(a),r.remove(c),r.remove(l),r.remove(h))})})}function t(e,t,i){e.addEventListener("click",function(){a.playVideo(i)})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="brochure",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,r={},o={};i.__views.brochureView=Ti.UI.createView({backgroundColor:"white",id:"brochureView",backgroundImage:"/images/wood_background.jpg"}),i.__views.brochureView&&i.addTopLevelView(i.__views.brochureView),i.__views.__alloyId17=Ti.UI.createView({layout:"vertical",id:"__alloyId17"}),i.__views.brochureView.add(i.__views.__alloyId17),i.__views.__alloyId18=Ti.UI.createView({layout:"horizontal",height:"80",backgroundImage:"/images/banner_brochure.jpg",id:"__alloyId18"}),i.__views.__alloyId17.add(i.__views.__alloyId18),i.__views.__alloyId19=Alloy.createController("toggle",{id:"__alloyId19",__parentSymbol:i.__views.__alloyId18}),i.__views.__alloyId19.setParent(i.__views.__alloyId18),i.__views.scrollview=Ti.UI.createScrollView({id:"scrollview",layout:"vertical",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.__alloyId17.add(i.__views.scrollview),i.__views.mainView=Ti.UI.createView({id:"mainView",layout:"vertical",height:Ti.UI.SIZE,width:"80%"}),i.__views.scrollview.add(i.__views.mainView),i.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),i.__views.brochureView.add(i.__views.toolbar),i.__views.__alloyId20=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId20"}),i.__views.toolbar.add(i.__views.__alloyId20),i.__views.__alloyId21=Ti.UI.createView({width:"40%",id:"__alloyId21"}),i.__views.__alloyId20.add(i.__views.__alloyId21),i.__views.__alloyId22=Ti.UI.createView({width:"20%",id:"__alloyId22"}),i.__views.__alloyId20.add(i.__views.__alloyId22),i.__views.filterButton=Ti.UI.createImageView({id:"filterButton",image:"/images/icon_filter.png",height:"40",width:"50",top:"10",bottom:"10"}),i.__views.__alloyId22.add(i.__views.filterButton),m?i.__views.filterButton.addEventListener("click",m):o["$.__views.filterButton!click!popWindow"]=!0,i.__views.__alloyId23=Ti.UI.createView({width:"40%",id:"__alloyId23"}),i.__views.__alloyId20.add(i.__views.__alloyId23),r.destroy=function(){},_.extend(i,i.__views),arguments[0]||{};var n=require("pdf"),a=require("titutorial.youtubeplayer"),s=Alloy.createCollection("brochure"),l=s.getBrochureList(),d=0,c=[];setTimeout(function(){h()},300);var h=function(){for(var r,o,n,a,s,_=0,d="",c=l.length-1,h=0;h<l.length;h++){var u=l[h].id;if(r=l[h].cover,o=Ti.UI.createImageView({image:r,bottom:0,width:90,height:"auto"}),_%3==0&&(n=i.UI.create("View",{textAlign:"center",bottom:0,layout:"vertical",height:Ti.UI.SIZE,width:"100%"}),a=Ti.UI.createImageView({image:"/images/wood_rack.png",top:0,width:"100%",right:5,left:5}),s=Titanium.UI.createView({layout:"horizontal",height:Ti.UI.SIZE,width:"100%",bottom:0,left:"5%",right:"5%"})),d=i.UI.create("View",{bottom:"0",height:Ti.UI.SIZE,width:"30%",right:5}),d.add(o),s.add(d),n.add(s),n.add(a),"pdf"==l[h].format){var p="";"0"==l[h].isDownloaded&&(p=Ti.UI.createImageView({image:"/images/icon_download.png",width:30,height:30,top:0,right:0}),d.add(p)),e(o,u,l[h].content,d,l[h].isDownloaded,p)}else playIcon=Ti.UI.createImageView({image:"/images/icon_play.png",width:40,height:40}),t(o,u,l[h].url),t(playIcon,u,l[h].url),d.add(playIcon);(_%3==2||c==_)&&i.scrollview.add(n),_++}},u=Ti.UI.createTableViewRow({title:"LATEST",width:150,left:10,touchEnabled:!0,height:60}),p=Ti.UI.createTableViewRow({title:"DOWNLOADED",width:150,left:10,touchEnabled:!0,height:60}),v=Ti.UI.createTableViewRow({title:"VIDEO",width:150,left:10,touchEnabled:!0,height:60});c.push(u),c.push(p),c.push(v);var g=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:c}),w=function(e){d=0,i.brochureView.remove(g),removeAllChildren(i.scrollview),0==e.index?(l=s.getBrochureList(),h()):1==e.index?(l=s.getDownloadedList(),h()):(l=s.getVideoList(),h())},m=function(){I(),1==d?(d=0,i.brochureView.remove(g)):(d=1,i.brochureView.add(g),g.addEventListener("click",w))},I=function(){g.removeEventListener("click",w)};o["$.__views.filterButton!click!popWindow"]&&i.__views.filterButton.addEventListener("click",m),_.extend(i,r)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;