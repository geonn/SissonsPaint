function __processArg(e,i){var t=null;return e&&(t=e[i]||null,delete e[i]),t}function Controller(){function e(t){for(var o=[],l=Titanium.UI.createTableView({width:"100%",height:PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-160,separatorColor:"#ffffff",backgroundColor:"#FFFFFF",top:0,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),_=0;_<t.length;_++){var n=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!1,backgroundSelectedColor:"transparent",id:t[_].id,backgroundColor:"#FFFFFF"}),s=i.UI.create("Label",{text:t[_].outlet,id:t[_].id,color:"black",font:{fontSize:22},width:"auto",textAlign:"left",left:20,bottom:10});if(""!=t[_].address)var d=Titanium.UI.createLabel({text:t[_].address,id:t[_].id,width:"auto",color:"#848484",textAlign:"left",left:20,bottom:10});var c=Titanium.UI.createView({layout:"horizontal",width:"100%"}),w=Titanium.UI.createView({layout:"vertical",width:"80%"});""==t[_].mobile&&(t[_].mobile="-");var h=Titanium.UI.createLabel({text:"TEL: "+t[_].mobile,id:t[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==t[_].fax||null==t[_].fax);else var u=Titanium.UI.createLabel({text:"FAX: "+t[_].fax,id:t[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});(""==t[_].email||null===t[_].email||"null"==t[_].email)&&(t[_].email="-");var v=Titanium.UI.createLabel({text:"E-mail: "+t[_].email,id:t[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});switch(t[_].category){case 1:var g="Branches";break;case 2:var g="Stockists";break;case 3:var g="Dealers"}Titanium.UI.createLabel({text:g,id:t[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});var I=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20,zIndex:_});I.addEventListener("click",function(e){""==t[e.source.zIndex].latitude||""==t[e.source.zIndex].longitude?NavigateTo(0,0,t[e.source.zIndex].outlet,t[e.source.zIndex].address):NavigateTo(t[e.source.zIndex].latitude,t[e.source.zIndex].longitude,t[e.source.zIndex].outlet,t[e.source.zIndex].address)});var y=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});_>0&&n.add(y),n.add(s),""!=t[_].address&&w.add(d),w.add(h),""==t[_].fax||null==t[_].fax||w.add(u),""==t[_].email||null==t[_].email||w.add(v),c.add(w),c.add(I),n.add(c),o.push(n)}var p=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:0,backgroundImage:"/images/tool_bar.jpg"}),m=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),T=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Search Query",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:m.font,left:10,top:10,width:"70%",height:60}),b=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),f=Titanium.UI.createView({layout:"horizontal"});l.setData(o),i.tableContainer.add(l),f.add(T),f.add(b),p.add(f),i.tableContainer.add(p),b.addEventListener("click",function(){Ti.UI.Android.hideSoftKeyboard(),0==T.value.length?(t=r.getStoreByState(a),e(t)):(t=r.getStoreByName(a,T.value),e(t))})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,t={};i.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),i.__views.storeLocatorByState&&i.addTopLevelView(i.__views.storeLocatorByState),i.__views.__alloyId152=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId152"}),i.__views.storeLocatorByState.add(i.__views.__alloyId152),i.__views.__alloyId153=Alloy.createController("toggle",{id:"__alloyId153",__parentSymbol:i.__views.__alloyId152}),i.__views.__alloyId153.setParent(i.__views.__alloyId152),i.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),i.__views.__alloyId152.add(i.__views.stateName),i.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),i.__views.storeLocatorByState.add(i.__views.tableContainer),t.destroy=function(){},_.extend(i,i.__views);var o=arguments[0]||{},a=o.state;Ti.App.Properties.setString("module","storeLocator");var r=Alloy.createCollection("storeLocator"),l=r.getStoreByState(a);e(l),i.stateName.text=a,NavigateTo=function(e,i,o,a){var r="geo:"+e+","+i+"?q="+o+" ("+a+")";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var l=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:r});Ti.Android.currentActivity.startActivity(l)}catch(_){Ti.API.info("Caught Error launching intent: "+_),t.Install()}else Ti.Platform.canOpenURL(r)?Ti.Platform.openURL(r):t.Install()},_.extend(i,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;