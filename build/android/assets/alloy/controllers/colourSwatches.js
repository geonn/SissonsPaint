function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){for(var e=c.length,o=0;e>o;o++)if(""!=c[o]){var r=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});"1"==d?d="0":i.TheScrollView.add(r);var a=l.getCategoryColourByCategory(c[o].id),s=Titanium.UI.createImageView({width:"95%",height:Ti.UI.SIZE,touchEnabled:!1,top:15,image:c[o].image}),_=i.UI.create("Label",{width:"95%",text:c[o].description,width:"95%",classes:["aboutContent"],bottom:30});i.TheScrollView.add(s),i.TheScrollView.add(_);var h=i.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,layout:"horizontal",width:"95%",bottom:10,height:Ti.UI.SIZE}),u=0;a.forEach(function(e){var r=i.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,layout:"vertical",width:"25%",top:3,height:Ti.UI.SIZE}),a=n.getColourById(e.colour_id);if(""!=a.sample)var l=i.UI.create("ImageView",{image:a.sample,borderColor:"#A5A5A5",borderWidth:1,width:"97%",height:"80"});else var l=i.UI.create("View",{backgroundColor:"rgb("+a.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"97%",height:"80"});var s=i.UI.create("Label",{text:a.name,classes:["colorDesc"]}),_=i.UI.create("Label",{text:a.code,classes:["colorDesc"],bottom:10});t(r,a,c[o]),r.add(l),r.add(s),r.add(_),h.add(r),u++}),i.TheScrollView.add(h)}else e--}function t(e,t,i){e.addEventListener("click",function(){var e=Alloy.createController("colourDetails",{colour_details:t,details:i}).getView();e.open()})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourSwatches",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,o={},r={};i.__views.mainViewContainer=Ti.UI.createView({backgroundColor:"white",id:"mainViewContainer"}),i.__views.mainViewContainer&&i.addTopLevelView(i.__views.mainViewContainer),i.__views.__alloyId48=Ti.UI.createView({layout:"vertical",id:"__alloyId48"}),i.__views.mainViewContainer.add(i.__views.__alloyId48),i.__views.__alloyId49=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId49"}),i.__views.__alloyId48.add(i.__views.__alloyId49),i.__views.__alloyId50=Alloy.createController("toggle",{id:"__alloyId50",__parentSymbol:i.__views.__alloyId49}),i.__views.__alloyId50.setParent(i.__views.__alloyId49),i.__views.titleLabel=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:"22"},text:"Colour Swatches",id:"titleLabel",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),i.__views.__alloyId49.add(i.__views.titleLabel),i.__views.TheScrollView=Ti.UI.createScrollView({id:"TheScrollView",backgroundColor:"white",width:"100%",layout:"vertical",contentHeight:Ti.UI.SIZE,height:"80%",top:"0",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.__alloyId48.add(i.__views.TheScrollView),i.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),i.__views.__alloyId48.add(i.__views.toolbar),i.__views.__alloyId51=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId51"}),i.__views.toolbar.add(i.__views.__alloyId51),i.__views.__alloyId52=Ti.UI.createView({width:"30%",id:"__alloyId52"}),i.__views.__alloyId51.add(i.__views.__alloyId52),i.__views.__alloyId53=Ti.UI.createView({width:"20%",id:"__alloyId53"}),i.__views.__alloyId51.add(i.__views.__alloyId53),i.__views.filterButton=Ti.UI.createImageView({id:"filterButton",image:"/images/icon_filter.png",height:"40",width:"50",top:"10",bottom:"10"}),i.__views.__alloyId53.add(i.__views.filterButton),T?i.__views.filterButton.addEventListener("click",T):r["$.__views.filterButton!click!filter"]=!0,i.__views.__alloyId54=Ti.UI.createView({width:"20%",id:"__alloyId54"}),i.__views.__alloyId51.add(i.__views.__alloyId54),i.__views.searchButton=Ti.UI.createImageView({id:"searchButton",image:"/images/icon_search.png",height:"40",width:"50",top:"10",bottom:"10"}),i.__views.__alloyId54.add(i.__views.searchButton),E?i.__views.searchButton.addEventListener("click",E):r["$.__views.searchButton!click!search"]=!0,i.__views.__alloyId55=Ti.UI.createView({width:"30%",id:"__alloyId55"}),i.__views.__alloyId51.add(i.__views.__alloyId55),o.destroy=function(){},_.extend(i,i.__views),arguments[0]||{};var a=Alloy.createCollection("category"),l=Alloy.createCollection("category_colour"),n=Alloy.createCollection("colour"),s=0,d="1",c=a.getCategoryListByType("2",s);Ti.Platform.displayCaps.platformHeight;var h=Alloy.createCollection("category_type"),u=h.selectTypeByDistinct(),g=0,w=0,I=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:60,backgroundColor:"#A5A5A5"}),v=[],y=Ti.UI.createTableViewRow({title:"All",width:150,left:10,touchEnabled:!0,height:60});v.push(y),u.forEach(function(e){var t=Ti.UI.createTableViewRow({title:e.tag,width:150,left:10,touchEnabled:!0,height:60});v.push(t)});var p=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,zIndex:999,left:"20%",data:v});e(),i.TheScrollView.height=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-140;var m=function(t){if(w=0,i.mainViewContainer.remove(p),removeAllChildren(i.TheScrollView),0==t.index)c=a.getCategoryListByType("2",3),e();else{var o=h.getCategoryTypeByTag(t.rowData.title),r=[];c=[],o.forEach(function(e){r=a.getCategoryById(e.cate_id,"2"),""!=r&&c.push(r)}),e()}},T=function(){f(),i.mainViewContainer.remove(I),g=0,1==w?(w=0,i.mainViewContainer.remove(p)):(w=1,i.mainViewContainer.add(p),p.addEventListener("click",m))},f=function(){p.removeEventListener("click",m)},E=function(){if(i.mainViewContainer.remove(p),w=0,1==g)g=0,i.mainViewContainer.remove(I);else{g=1;var e=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),t=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Colour, Name or Colour Code",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:e.font,left:10,top:10,width:"70%",height:60}),o=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),r=Titanium.UI.createView({layout:"horizontal"});r.add(t),r.add(o),I.add(r),i.mainViewContainer.add(I),o.addEventListener("click",function(){if(g=0,Ti.UI.Android.hideSoftKeyboard(),0!=t.value.length){Ti.App.Properties.setString("query",t.value);var e=Alloy.createController("search").getView();Alloy.Globals.Drawer.setCenterWindow(e)}i.mainViewContainer.remove(I)})}},A=2997;Ti.App.Properties.setString("swatchMinHeight",A),i.TheScrollView.addEventListener("scroll",function(t){var i=Ti.App.Properties.getString("swatchMinHeight");t.y>=i&&(i=parseInt(i)+parseInt(A),console.log(t.y+"= "+i),Ti.App.Properties.setString("swatchMinHeight",i),s+=3,c=a.getCategoryListByType("2",s),e())}),r["$.__views.filterButton!click!filter"]&&i.__views.filterButton.addEventListener("click",T),r["$.__views.searchButton!click!search"]&&i.__views.searchButton.addEventListener("click",E),_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;