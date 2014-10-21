function onErrorCallback(e){var t=require("common");t.createAlert("Error",e)}var API_DOMAIN="sissons.playlab.com.my/",XHR=require("xhr"),xhr=new XHR,USER="mobile",KEY="06b53047cf294f7207789ff5293ad2dc",getStoreLocatorList="http://"+API_DOMAIN+"/api/getStore?user="+USER+"&key="+KEY,getBrochureList="http://"+API_DOMAIN+"/api/getBrochure?user="+USER+"&key="+KEY,getCategoryList="http://"+API_DOMAIN+"/api/getCategoryList?user="+USER+"&key="+KEY,getColourList="http://"+API_DOMAIN+"/api/getColourList?user="+USER+"&key="+KEY;exports.sendContactMsg="http://"+API_DOMAIN+"/api/sendMessage?user="+USER+"&key="+KEY,exports.forgotPassword="http://"+API_DOMAIN+"/api/doForgotPassword?user="+USER+"&key="+KEY,exports.loadColour=function(){var e=getColourList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("colour");t.resetColour();var i=e.data;i.forEach(function(e){var t=Alloy.createModel("colour",{id:e.id,name:e.name,code:e.code,rgb:e.RGB,cmyk:e.CMYK,sample:e.sample});t.save()}),Ti.App.Properties.setString("loadColour","1")}},onerror:function(){Ti.App.Properties.setString("loadColour","1")},timeout:1e4});t.open("GET",e),t.send()},exports.loadCategory=function(){var e=getCategoryList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("category"),i=Alloy.createCollection("category_type"),o=Alloy.createCollection("category_colour");t.resetCategory(),i.resetCategoryType(),o.resetCategoryColour();var r=e.data;r.forEach(function(e){var t=Alloy.createModel("category",{id:e.id,name:e.name,type:e.type,image:e.image,description:e.description});t.save();var i=e.arr_category;i.forEach(function(t){var i=Alloy.createModel("category_type",{cate_id:e.id,tag:t});i.save()});var o=e.arr_colour;o.forEach(function(t){var i=Alloy.createModel("category_colour",{cate_id:e.id,colour_id:t});i.save()})}),Ti.App.Properties.setString("loadCategory","1")}},onerror:function(){Ti.App.Properties.setString("loadCategory","1")},timeout:1e4});t.open("GET",e),t.send()},exports.loadBrochure=function(){var e=getBrochureList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("brochure"),i=e.data;i.forEach(function(e){t.addBrochure(e.b_id,e.b_title,e.cover,e.attachment,e.b_url,e.b_status,e.b_format)}),Ti.App.Properties.setString("loadBrochure","1")}},onerror:function(){Ti.App.Properties.setString("loadBrochure","1")},timeout:1e4});t.open("GET",e),t.send()},exports.loadStoreLocator=function(){var e=getStoreLocatorList,t=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if("success"==e.status){var t=Alloy.createCollection("storeLocator");t.resetStore();var i=e.data;i.forEach(function(e){var t=Alloy.createModel("storeLocator",{id:e.f_id,outlet:e.f_outlet,area:e.f_area,state:e.f_state,address:e.f_address,mobile:e.f_mobile,fax:e.f_fax,email:e.f_email,latitude:e.f_lat,longitude:e.f_lng,category:e.f_category});t.save()}),Ti.App.Properties.setString("loadStoreLocator","1")}},onerror:function(){Ti.App.Properties.setString("loadStoreLocator","1")},timeout:1e4});t.open("GET",e),t.send()};