var NavigationWindow=function(e){this.args=e};NavigationWindow.prototype.open=function(e){return e=e||{},e.displayHomeAsUp=!1,this.openWindow(this.args.window,e)},NavigationWindow.prototype.close=function(e){return this.closeWindow(this.args.window,e)},NavigationWindow.prototype.openWindow=function(e,t){var i=this;return t=t||{},t.swipeBack="boolean"==typeof t.swipeBack?t.swipeBack:i.args.swipeBack,t.displayHomeAsUp="boolean"==typeof t.displayHomeAsUp?t.displayHomeAsUp:i.args.displayHomeAsUp,!1!==t.animated&&(t.activityEnterAnimation=Ti.Android.R.anim.slide_in_left,t.activityExitAnimation=Ti.Android.R.anim.slide_out_right),!1!==t.swipeBack&&e.addEventListener("swipe",function(o){"right"===o.direction&&i.closeWindow(e,t)}),!0&&!1!==t.displayHomeAsUp&&!e.navBarHidden&&e.addEventListener("open",function(){var o=e.getActivity();if(o){var r=o.actionBar;r&&(r.displayHomeAsUp=!0,r.onHomeIconItemSelected=function(){i.closeWindow(e,t)})}}),e.open(t)},NavigationWindow.prototype.closeWindow=function(e,t){return t=t||{},!1!==t.animated&&(t.activityEnterAnimation=Ti.Android.R.anim.slide_in_left,t.activityExitAnimation=Ti.Android.R.anim.slide_out_right),e.close(t)},exports.createNavigationWindow=function(e){var t=new NavigationWindow(e);return e&&e.id&&(Alloy.Globals[e.id]=t),t},exports.createWindow=function(e){return Ti.UI.createView(e)},exports.createTextArea=function(e){var t=Ti.UI.createTextArea(e);return e.hintText&&(t.originalColor=t.color||"#000",t.value||t.applyProperties({value:t.hintText,color:"#ccc"}),t.addEventListener("focus",function(e){e.source.value==e.source.hintText&&e.source.applyProperties({value:"",color:e.source.originalColor})}),t.addEventListener("blur",function(e){e.source.value||e.source.applyProperties({value:e.source.hintText,color:"#ccc"})})),t};