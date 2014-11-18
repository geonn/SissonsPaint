var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER PRIMARY KEY AUTOINCREMENT",cate_id:"TEXT",colour_id:"TEXT"},adapter:{type:"sql",collection_name:"category_colour"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getCategoryColourByCategory:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE cate_id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);for(var o=db.execute(i),a=[],r=0;o.isValidRow();)a[r]={id:o.fieldByName("id"),colour_id:o.fieldByName("colour_id")},o.next(),r++;return o.close(),db.close(),t.trigger("sync"),a},getCateByColourId:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE colour_id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),cate_id:o.fieldByName("cate_id")}),o.close(),db.close(),t.trigger("sync"),a},resetCategoryColour:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("category_colour",exports.definition,[]),collection=Alloy.C("category_colour",exports.definition,model),exports.Model=model,exports.Collection=collection;