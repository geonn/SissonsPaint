function WPATH(e){var t=e.lastIndexOf("/"),i=-1===t?"nl.fokkezb.drawer/"+e:e.substring(0,t)+"/nl.fokkezb.drawer/"+e.substring(t+1);return 0!==i.indexOf("/")?"/"+i:i}function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){new(require("alloy/widget"))("nl.fokkezb.drawer"),this.__widgetId="nl.fokkezb.drawer",require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="widget",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};e.module=require("dk.napp.drawer"),i.children&&_.each(i.children,function(e){if(e){var t=e.role;t&&(i[t]=e)}}),_.each(["closeDrawerGestureMode","openDrawerGestureMode","centerHiddenInteractionMode","animationMode","statusBarStyle"],function(t){i[t]&&"string"==typeof i[t]&&(i[t]=e.module[i[t]])}),delete i.id,delete i.__parentSymbol,delete i.children,e.instance=e.module.createDrawer(i),e.addTopLevelView(e.instance),_.each(["centerWindow","leftWindow","rightWindow","closeDrawerGestureMode","openDrawerGestureMode","leftDrawerWidth","rightDrawerWidth","orientationModes","centerHiddenInteractionMode","animationMode","animationVelocity","showShadow","shadowWidth","shouldStretchDrawer","fading","parallaxAmount","statusBarStyle"],function(i){var o=i[0].toUpperCase()+i.substring(1),r=t["get"+o]||(e["get"+o]=function(){return e.instance[i]}),n=t["set"+o]||(e["set"+o]=function(t){e.instance[i]=t});Object.defineProperty(e,i,{get:r,set:n})}),_.each(["toggleLeftWindow","toggleRightWindow","bounceLeftWindow","bounceRightWindow","isAnyWindowOpen","isLeftWindowOpen","isRightWindowOpen","open","close"],function(i){t[i]||(t[i]=function(){return e.instance[i]()})}),t.on=function(t,i){return e.instance.addEventListener(t,i)},t.off=function(t,i){return e.instance.removeEventListener(t,i)},t.trigger=function(t,i){return e.instance.fireEvent(t,i)},t.addEventListener=t.on,t.removeEventListener=t.off,t.fireEvent=t.trigger,t.closeLeftWindow=function(){return e.instance.isLeftWindowOpen()?e.instance.toggleLeftWindow():void 0},t.closeRightWindow=function(){return e.instance.isRightWindowOpen()?e.instance.toggleRightWindow():void 0},t.openLeftWindow=function(){return e.instance.isLeftWindowOpen()?void 0:e.instance.toggleLeftWindow()},t.openRightWindow=function(){return e.instance.isRightWindowOpen()?void 0:e.instance.toggleRightWindow()},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;