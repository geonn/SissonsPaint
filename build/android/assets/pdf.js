function exists(e){try{if(e.exists())return!0}catch(t){}return!1}function isPdf(e){try{var t=e.read();if(!t)return!1;if(t.slice||(t=t.text),!t)return!1;if(0===t.indexOf("%PDF"))return!0}catch(i){}return!1}function download(e,t,i){var o=Ti.Utils.md5HexDigest(e)+".pdf",r=Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,o);if(exists(r))return i(null,r,o,e);var a=Ti.Network.createHTTPClient();return a.onload=function(t){try{var o=Ti.Utils.md5HexDigest(e)+".pdf",r=Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,o);if(200!=t.source.status)throw new Error("http status "+t.source.status);return r.write(t.source.responseData),i(null,r,o,e)}catch(t){return i(t)}},a.onerror=function(e){return i(e)},a.ondatastream=function(e){ind.value=e.progress,label.text=(100*ind.value).toFixed(0)+"% Downloading"},a.setRequestHeader("Cookie",t),a.open("GET",e),a.send(),a}function copyToTemp(e,t,i){var o=Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,t);o.createDirectory();var r=i.split("/");r=r[r.length-1];var a=Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,t,r);return a.write(e.read()),a}function launch(e){var t=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:e.getNativePath(),type:"application/pdf"});Ti.Android.currentActivity.startActivity(t)}function pdf(e,t,i,o,r){return ind=i,label=o,Ti.Filesystem.isExternalStoragePresent()?void download(e,t,function(e,t,i,o){if(e)return r(e);var a=copyToTemp(t,i,o);launch(a),r()}):r(new Error("external"))}var ind="",label="";module.exports=pdf;