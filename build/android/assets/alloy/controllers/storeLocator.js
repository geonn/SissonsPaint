function __processArg(e,i){var t=null;return e&&(t=e[i]||null,delete e[i]),t}function Controller(){function e(e){var i=Alloy.createController("storeLocatorByState",{state:e.source.title}).getView();Alloy.Globals.Drawer.setCenterWindow(i)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocator",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,t={},o={};i.__views.mainWindow=Ti.UI.createView({id:"mainWindow",layout:"vertical",backgroundColor:"white",width:"100%"}),i.__views.mainWindow&&i.addTopLevelView(i.__views.mainWindow),i.__views.__alloyId150=Ti.UI.createView({layout:"horizontal",height:"80",backgroundImage:"/images/banner_store_locator.jpg",id:"__alloyId150"}),i.__views.mainWindow.add(i.__views.__alloyId150),i.__views.__alloyId151=Alloy.createController("toggle",{id:"__alloyId151",__parentSymbol:i.__views.__alloyId150}),i.__views.__alloyId151.setParent(i.__views.__alloyId150),i.__views.subWindow=Ti.UI.createScrollView({id:"subWindow",layout:"vertical",width:"100%",backgroundColor:"white",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.mainWindow.add(i.__views.subWindow),i.__views.row1=Ti.UI.createView({id:"row1",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row1),i.__views.zoneA=Ti.UI.createButton({color:"white",title:"Johor",backgroundColor:"black",id:"zoneA",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row1.add(i.__views.zoneA),e?i.__views.zoneA.addEventListener("click",e):o["$.__views.zoneA!click!listState"]=!0,i.__views.zoneB=Ti.UI.createButton({color:"white",title:"Kedah",backgroundColor:"black",id:"zoneB",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row1.add(i.__views.zoneB),e?i.__views.zoneB.addEventListener("click",e):o["$.__views.zoneB!click!listState"]=!0,i.__views.row2=Ti.UI.createView({id:"row2",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row2),i.__views.zoneC=Ti.UI.createButton({color:"white",title:"Kelantan",backgroundColor:"black",id:"zoneC",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row2.add(i.__views.zoneC),e?i.__views.zoneC.addEventListener("click",e):o["$.__views.zoneC!click!listState"]=!0,i.__views.zoneD=Ti.UI.createButton({color:"white",title:"Melaka",backgroundColor:"black",id:"zoneD",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row2.add(i.__views.zoneD),e?i.__views.zoneD.addEventListener("click",e):o["$.__views.zoneD!click!listState"]=!0,i.__views.row3=Ti.UI.createView({id:"row3",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row3),i.__views.zoneE=Ti.UI.createButton({color:"white",title:"Negeri Sembilan",backgroundColor:"black",id:"zoneE",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row3.add(i.__views.zoneE),e?i.__views.zoneE.addEventListener("click",e):o["$.__views.zoneE!click!listState"]=!0,i.__views.zoneF=Ti.UI.createButton({color:"white",title:"Pahang",backgroundColor:"black",id:"zoneF",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row3.add(i.__views.zoneF),e?i.__views.zoneF.addEventListener("click",e):o["$.__views.zoneF!click!listState"]=!0,i.__views.row4=Ti.UI.createView({id:"row4",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row4),i.__views.zoneG=Ti.UI.createButton({color:"white",title:"Penang",backgroundColor:"black",id:"zoneG",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row4.add(i.__views.zoneG),e?i.__views.zoneG.addEventListener("click",e):o["$.__views.zoneG!click!listState"]=!0,i.__views.zoneH=Ti.UI.createButton({color:"white",title:"Perak",backgroundColor:"black",id:"zoneH",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row4.add(i.__views.zoneH),e?i.__views.zoneH.addEventListener("click",e):o["$.__views.zoneH!click!listState"]=!0,i.__views.row5=Ti.UI.createView({id:"row5",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row5),i.__views.zoneI=Ti.UI.createButton({color:"white",title:"Perlis",backgroundColor:"black",id:"zoneI",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row5.add(i.__views.zoneI),e?i.__views.zoneI.addEventListener("click",e):o["$.__views.zoneI!click!listState"]=!0,i.__views.zoneJ=Ti.UI.createButton({color:"white",title:"Sabah",backgroundColor:"black",id:"zoneJ",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row5.add(i.__views.zoneJ),e?i.__views.zoneJ.addEventListener("click",e):o["$.__views.zoneJ!click!listState"]=!0,i.__views.row6=Ti.UI.createView({id:"row6",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row6),i.__views.zoneK=Ti.UI.createButton({color:"white",title:"Sarawak",backgroundColor:"black",id:"zoneK",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row6.add(i.__views.zoneK),e?i.__views.zoneK.addEventListener("click",e):o["$.__views.zoneK!click!listState"]=!0,i.__views.zoneL=Ti.UI.createButton({color:"white",title:"Selangor",backgroundColor:"black",id:"zoneL",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row6.add(i.__views.zoneL),e?i.__views.zoneL.addEventListener("click",e):o["$.__views.zoneL!click!listState"]=!0,i.__views.row7=Ti.UI.createView({id:"row7",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),i.__views.subWindow.add(i.__views.row7),i.__views.zoneM=Ti.UI.createButton({color:"white",title:"Terengganu",backgroundColor:"black",id:"zoneM",width:"40%",height:"65",left:"8%",right:"2%",top:"5%"}),i.__views.row7.add(i.__views.zoneM),e?i.__views.zoneM.addEventListener("click",e):o["$.__views.zoneM!click!listState"]=!0,i.__views.zoneN=Ti.UI.createButton({color:"white",title:"Wilayah Persekutuan",backgroundColor:"black",id:"zoneN",width:"40%",height:"65",left:"2%",right:"8%",top:"5%"}),i.__views.row7.add(i.__views.zoneN),e?i.__views.zoneN.addEventListener("click",e):o["$.__views.zoneN!click!listState"]=!0,t.destroy=function(){},_.extend(i,i.__views),arguments[0]||{};var a=Alloy.createCollection("storeLocator");a.getStoreStateList(),o["$.__views.zoneA!click!listState"]&&i.__views.zoneA.addEventListener("click",e),o["$.__views.zoneB!click!listState"]&&i.__views.zoneB.addEventListener("click",e),o["$.__views.zoneC!click!listState"]&&i.__views.zoneC.addEventListener("click",e),o["$.__views.zoneD!click!listState"]&&i.__views.zoneD.addEventListener("click",e),o["$.__views.zoneE!click!listState"]&&i.__views.zoneE.addEventListener("click",e),o["$.__views.zoneF!click!listState"]&&i.__views.zoneF.addEventListener("click",e),o["$.__views.zoneG!click!listState"]&&i.__views.zoneG.addEventListener("click",e),o["$.__views.zoneH!click!listState"]&&i.__views.zoneH.addEventListener("click",e),o["$.__views.zoneI!click!listState"]&&i.__views.zoneI.addEventListener("click",e),o["$.__views.zoneJ!click!listState"]&&i.__views.zoneJ.addEventListener("click",e),o["$.__views.zoneK!click!listState"]&&i.__views.zoneK.addEventListener("click",e),o["$.__views.zoneL!click!listState"]&&i.__views.zoneL.addEventListener("click",e),o["$.__views.zoneM!click!listState"]&&i.__views.zoneM.addEventListener("click",e),o["$.__views.zoneN!click!listState"]&&i.__views.zoneN.addEventListener("click",e),_.extend(i,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;