var cacheManager=Titanium.App.Properties.getObject("cachedXHRDocuments",{});XHR=function(){},XHR.prototype.get=function(e,t,i,o){Titanium.API.info(e);var t=t||function(){},i=i||function(){},o=o||{};o.async=o.hasOwnProperty("async")?o.async:!0,o.ttl=o.ttl||!1,o.shouldAuthenticate=o.shouldAuthenticate||!1,o.contentType=o.contentType||"application/json";var a=readCache(e);if(o.ttl&&0!=a){var r={};r.status="cache",r.data=a,t(r)}else{var l=Titanium.Network.createHTTPClient({enableKeepAlive:!1}),r={};if(l.setRequestHeader("Content-Type",o.contentType),l.open("GET",e,o.async),o.shouldAuthenticate){var n="Basic "+Titanium.Utils.base64encode(o.username+":"+o.password);l.setRequestHeader("Authorization",n)}l.onload=function(){r.status=200==l.status?"ok":l.status,r.data=-1!=o.contentType.indexOf("application/json")?l.responseText:-1!=o.contentType.indexOf("text/xml")?l.responseXML:l.responseData,t(r),writeCache(r.data,e,o.ttl)},l.onerror=function(e){r.status="error",r.data=e,r.code=l.status,i(r)},l.send()}},XHR.prototype.post=function(e,t,i,o,a){Titanium.API.info(e+" "+JSON.stringify(t));var i=i||function(){},o=o||function(){},a=a||{};a.async=a.hasOwnProperty("async")?a.async:!0,a.shouldAuthenticate=a.shouldAuthenticate||!1,a.contentType=a.contentType||"application/json";var r=Titanium.Network.createHTTPClient({enableKeepAlive:!1}),l={};if(r.open("POST",e,a.async),r.setRequestHeader("Content-Type",a.contentType),a.shouldAuthenticate){var n="Basic "+Titanium.Utils.base64encode(a.username+":"+a.password);r.setRequestHeader("Authorization",n)}r.onload=function(){l.status=200==r.status?"ok":r.status,l.data=r.responseText,i(l)},r.onerror=function(e){l.status="error",l.data=e.error,l.code=r.status,o(l)},r.send(t)},XHR.prototype.put=function(e,t,i,o,a){var i=i||function(){},o=o||function(){},a=a||{};a.async=a.hasOwnProperty("async")?a.async:!0,a.shouldAuthenticate=a.shouldAuthenticate||!1,a.contentType=a.contentType||"application/json";var r=Titanium.Network.createHTTPClient({enableKeepAlive:!1}),l={};if(r.open("PUT",e,a.async),r.setRequestHeader("Content-Type",a.contentType),a.shouldAuthenticate){var n="Basic "+Titanium.Utils.base64encode(a.username+":"+a.password);r.setRequestHeader("Authorization",n)}r.onload=function(){l.status=200==r.status?"ok":r.status,l.data=r.responseText,i(l)},r.onerror=function(e){l.status="error",l.data=e.error,l.code=r.status,o(l)},r.send(t)},XHR.prototype.destroy=function(e,t,i,o){Titanium.API.info(e);var t=t||function(){},i=i||function(){},o=o||{};o.async=o.hasOwnProperty("async")?o.async:!0,o.shouldAuthenticate=o.shouldAuthenticate||!1,o.contentType=o.contentType||"application/json";var a=Titanium.Network.createHTTPClient({enableKeepAlive:!1}),r={};if(a.open("DELETE",e,o.async),a.setRequestHeader("Content-Type",o.contentType),o.shouldAuthenticate){var l="Basic "+Titanium.Utils.base64encode(o.username+":"+o.password);a.setRequestHeader("Authorization",l)}a.onload=function(){r.status=200==a.status?"ok":a.status,r.data=a.responseText,t(r)},a.onerror=function(e){r.status="error",r.data=e.error,r.code=a.status,i(r)},a.send()},XHR.prototype.clear=function(e){if(e){var t=Titanium.Utils.md5HexDigest(e),i=cacheManager[t];if(i){var o=Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,t);delete cacheManager[t],o.deleteFile(),updateCacheManager()}}},XHR.prototype.clean=function(){var e=(new Date).getTime(),t=0;for(var i in cacheManager){var o=cacheManager[i];if(o.timestamp<=e){var a=Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,i);delete cacheManager[i],a.deleteFile(),updateCacheManager(),t+=1}}return t},XHR.prototype.purge=function(){var e=0;for(var t in cacheManager){cacheManager[t];var i=Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,t);delete cacheManager[t],i.deleteFile(),updateCacheManager(),e+=1}return e},readCache=function(e){var t=Titanium.Utils.md5HexDigest(e),i=cacheManager[t],o=!1;if(i){var a=Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,t);i.timestamp>=(new Date).getTime()?o=a.read():(delete cacheManager[t],a.deleteFile(),updateCacheManager())}return o},updateCacheManager=function(){Titanium.App.Properties.setObject("cachedXHRDocuments",cacheManager)},writeCache=function(e,t,i){var o=Titanium.Utils.md5HexDigest(t),a=Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,o);a.write(e),cacheManager[o]={timestamp:(new Date).getTime()+60*i*1e3},updateCacheManager()},module.exports=XHR;