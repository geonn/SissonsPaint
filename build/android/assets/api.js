function onErrorCallback(e){var t=require("common");t.createAlert("Error",e)}var API_DOMAIN="sissons.playlab.com.my/",XHR=require("xhr"),xhr=new XHR,USER="mobile",KEY="06b53047cf294f7207789ff5293ad2dc",getStoreLocatorList="http://"+API_DOMAIN+"/api/getStore?user="+USER+"&key="+KEY,getBrochureList="http://"+API_DOMAIN+"/api/getBrochure?user="+USER+"&key="+KEY,getCategoryList="http://"+API_DOMAIN+"/api/getCategoryList?user="+USER+"&key="+KEY,getColourList="http://"+API_DOMAIN+"/api/getColourList?user="+USER+"&key="+KEY;exports.sendContactMsg="http://"+API_DOMAIN+"/api/sendMessage?user="+USER+"&key="+KEY,exports.forgotPassword="http://"+API_DOMAIN+"/api/doForgotPassword?user="+USER+"&key="+KEY,exports.loadColour=function(){var e=getColourList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("updateChecker"),i=t.getCheckerById("4");if(""==i||e.last_updated!=i.updated){t.updateModule("4","colour",e.last_updated);var o=Alloy.createCollection("colour");o.resetColour();var a=e.data;o.addColours(a)}Ti.App.Properties.setString("loadColour","1")}},onerror:function(){Ti.App.Properties.setString("loadColour","1")},timeout:1e4});t.open("GET",e),t.send()},exports.loadCategory=function(){var e=getCategoryList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("updateChecker"),i=t.getCheckerById("3"),o=Alloy.createCollection("type");o.resetType();var a=e.type,r=1;if(a.forEach(function(e){var t=Alloy.createModel("type",{id:r,ctype:e.type});t.save(),r++}),""==i||e.last_updated!=i.updated){t.updateModule("3","category",e.last_updated);var l=Alloy.createCollection("category"),o=Alloy.createCollection("category_type"),n=Alloy.createCollection("category_colour");l.resetCategory(),o.resetCategoryType(),n.resetCategoryColour();var s=e.data;s.forEach(function(e){var t=Alloy.createModel("category",{id:e.id,name:e.name,type:e.type,position:e.position,image:e.image,description:e.description});t.save();var i=e.arr_category;i.forEach(function(t){var i=Alloy.createModel("category_type",{cate_id:e.id,tag:t});i.save()});var o=e.arr_colour;o.forEach(function(t){var i=Alloy.createModel("category_colour",{cate_id:e.id,colour_id:t});i.save()})})}Ti.App.Properties.setString("loadCategory","1")}},onerror:function(){Ti.App.Properties.setString("loadCategory","1")},timeout:1e4});t.open("GET",e),t.send()},exports.loadBrochure=function(){var e=getBrochureList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("updateChecker"),i=t.getCheckerById("2");if(""==i||e.last_updated!=i.updated){t.updateModule("2","brochure",e.last_updated);var o=Alloy.createCollection("brochure");o.resetBrochure();var a=e.data;a.forEach(function(e){o.addBrochure(e.b_position,e.b_title,e.cover,e.attachment,e.b_url,e.b_status,e.b_format)})}Ti.App.Properties.setString("loadBrochure","1")}},onerror:function(){Ti.App.Properties.setString("loadBrochure","1")},timeout:1e4});t.open("GET",e),t.send()},exports.loadStoreLocator=function(){var e=getStoreLocatorList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("updateChecker"),i=t.getCheckerById("1");if(""==i||e.last_updated!=i.updated){t.updateModule("1","storeLocator",e.last_updated);var o=Alloy.createCollection("storeLocator");o.resetStore();var a=e.data;o.addStores(a)}Ti.App.Properties.setString("loadStoreLocator","1")}},onerror:function(){Ti.App.Properties.setString("loadStoreLocator","1")},timeout:1e4});t.open("GET",e),t.send()};