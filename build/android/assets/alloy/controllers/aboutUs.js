function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="aboutUs",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,e={},i={};t.__views.mainView=Ti.UI.createView({backgroundColor:"white",width:Ti.UI.FILL,fullscreen:!0,id:"mainView",top:"10",left:"10",right:"10"}),t.__views.mainView&&t.addTopLevelView(t.__views.mainView),t.__views.__alloyId0=Ti.UI.createView({layout:"vertical",top:"0",height:Ti.UI.SIZE,id:"__alloyId0"}),t.__views.mainView.add(t.__views.__alloyId0),t.__views.__alloyId1=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId1"}),t.__views.__alloyId0.add(t.__views.__alloyId1),t.__views.__alloyId2=Alloy.createController("toggle",{id:"__alloyId2",__parentSymbol:t.__views.__alloyId1}),t.__views.__alloyId2.setParent(t.__views.__alloyId1),t.__views.__alloyId3=Ti.UI.createLabel({font:{fontSize:22},text:"About Us",color:"black",width:"75%",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId3"}),t.__views.__alloyId1.add(t.__views.__alloyId3),t.__views.mainScroll=Ti.UI.createScrollView({id:"mainScroll",layout:"vertical",height:Ti.UI.SIZE,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),t.__views.__alloyId0.add(t.__views.mainScroll),t.__views.main=Ti.UI.createScrollView({backgroundColor:"white",id:"main",layout:"vertical",height:Ti.UI.SIZE,top:"20",bottom:"20",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),t.__views.mainScroll.add(t.__views.main),t.__views.__alloyId4=Ti.UI.createLabel({font:{},color:"#6E6E6E",bottom:10,text:"It was in 1959 that SISSONS PAINTS (EAST) SDN BHD first started in Malaysia, although SISSONS' technology in paint making goes back 185 years when Sissons Brothers founded a company in HULL, England in 1803. SISSONS' well-known trademark of 'THE MEN AND PLANK' has been in use since 1910.",width:"75%",id:"__alloyId4"}),t.__views.main.add(t.__views.__alloyId4),t.__views.__alloyId5=Ti.UI.createView({layout:"vertical",backgroundColor:"white",height:Titanium.UI.SIZE,id:"__alloyId5"}),t.__views.mainScroll.add(t.__views.__alloyId5),t.__views.__alloyId6=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"white",width:Titanium.UI.FILL,id:"__alloyId6"}),t.__views.__alloyId5.add(t.__views.__alloyId6),t.__views.__alloyId7=Ti.UI.createLabel({font:{fontSize:22},text:"Email",color:"black",bottom:"20",width:"75%",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId7"}),t.__views.__alloyId5.add(t.__views.__alloyId7),t.__views.__alloyId8=Ti.UI.createView({layout:"horizontal",height:"40",top:"10",bottom:"15",width:"90%",horizontalWrap:"true",id:"__alloyId8"}),t.__views.__alloyId5.add(t.__views.__alloyId8),t.__views.__alloyId9=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",left:"10",textAlign:"left",right:"10",text:"Name",width:"30%",id:"__alloyId9"}),t.__views.__alloyId8.add(t.__views.__alloyId9),t.__views.name=Ti.UI.createTextField({color:"#848484",borderColor:"#BDBDBD",textAlign:"center",height:40,keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_NEXT,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,id:"name",width:"60%"}),t.__views.__alloyId8.add(t.__views.name),t.__views.__alloyId10=Ti.UI.createView({layout:"horizontal",height:"40",top:"10",bottom:"15",width:"90%",horizontalWrap:"true",id:"__alloyId10"}),t.__views.__alloyId5.add(t.__views.__alloyId10),t.__views.__alloyId11=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",left:"10",textAlign:"left",right:"10",text:"Email",width:"30%",id:"__alloyId11"}),t.__views.__alloyId10.add(t.__views.__alloyId11),t.__views.email=Ti.UI.createTextField({color:"#848484",borderColor:"#BDBDBD",textAlign:"center",height:40,keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_NEXT,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,id:"email",width:"60%"}),t.__views.__alloyId10.add(t.__views.email),t.__views.__alloyId12=Ti.UI.createView({layout:"horizontal",height:"100",top:"10",bottom:"0",width:"90%",horizontalWrap:"true",id:"__alloyId12"}),t.__views.__alloyId5.add(t.__views.__alloyId12),t.__views.__alloyId13=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",left:"10",textAlign:"left",right:"10",text:"Message",width:"30%",id:"__alloyId13"}),t.__views.__alloyId12.add(t.__views.__alloyId13),t.__views.message=Ti.UI.createTextField({color:"#848484",borderColor:"#BDBDBD",textAlign:"center",height:40,keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_DONE,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,id:"message",width:"60%"}),t.__views.__alloyId12.add(t.__views.message),t.__views.__alloyId14=Ti.UI.createView({backgroundColor:"green",height:"60",bottom:"0",id:"__alloyId14"}),t.__views.mainView.add(t.__views.__alloyId14),t.__views.__alloyId15=Ti.UI.createImageView({image:"/images/tool_bar.jpg",height:"60",width:Titanium.UI.FILL,id:"__alloyId15"}),t.__views.__alloyId14.add(t.__views.__alloyId15),t.__views.contactButton=Ti.UI.createImageView({id:"contactButton",image:"/images/icon_email.png",height:"40"}),t.__views.__alloyId14.add(t.__views.contactButton),o?t.__views.contactButton.addEventListener("click",o):i["$.__views.contactButton!click!submitContactForm"]=!0,e.destroy=function(){},_.extend(t,t.__views),arguments[0]||{};var r=require("api"),n=require("common"),o=function(){var e=t.name.value,i=t.email.value,o=t.message.value;if(""==e)return void n.createAlert("Request Rejected","Full name cannot be empty.");if(""==i)return void n.createAlert("Request Rejected","Email cannot be empty.");if(""==o)return void n.createAlert("Request Rejected","Message cannot be empty.");var s=r.sendContactMsg+"&name="+e+"&email="+i+"&message="+o,a=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);"success"==e.status&&(n.createAlert("Message Sent","Your messages successfully sent to admin."),t.name.value="",t.email.value="",t.message.value="")},onerror:function(){n.createAlert("Network declined","Failed to contact with server. Please make sure your device are connected to internet.")},timeout:5e3});a.open("GET",s),a.send()};t.message.addEventListener("return",o),i["$.__views.contactButton!click!submitContactForm"]&&t.__views.contactButton.addEventListener("click",o),_.extend(t,e)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;