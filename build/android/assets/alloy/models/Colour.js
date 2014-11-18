var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",name:"TEXT",code:"TEXT",rgb:"TEXT",cmyk:"TEXT",sample:"TEXT",thumb:"TEXT"},adapter:{type:"sql",collection_name:"colour"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getColourList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name+"  order by id DESC";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();){var r=i.fieldByName("rgb").split(/,\s*/);o[a]={id:i.fieldByName("id"),name:i.fieldByName("name"),code:i.fieldByName("code"),rgb:i.fieldByName("rgb"),cmyk:i.fieldByName("cmyk"),sample:i.fieldByName("sample"),thumb:i.fieldByName("thumb"),contrast:parseInt(r[0])+parseInt(r[1])+parseInt(r[2])},i.next(),a++}return i.close(),db.close(),e.trigger("sync"),o},getColourById:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),name:o.fieldByName("name"),code:o.fieldByName("code"),rgb:o.fieldByName("rgb"),cmyk:o.fieldByName("cmyk"),sample:o.fieldByName("sample"),thumb:o.fieldByName("thumb")}),o.close(),db.close(),t.trigger("sync"),a},resetColour:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")},getColourByQuery:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE name LIKE '%"+e+"%' OR code='%"+e+"%'";db=Ti.Database.open(t.config.adapter.db_name);for(var o=db.execute(i),a=[],r=0;o.isValidRow();)a[r]={id:o.fieldByName("id"),name:o.fieldByName("name"),code:o.fieldByName("code"),rgb:o.fieldByName("rgb"),cmyk:o.fieldByName("cmyk"),sample:o.fieldByName("sample"),thumb:o.fieldByName("thumb")},o.next(),r++;return o.close(),db.close(),t.trigger("sync"),a},getClosestColourList:function(e,t,i){var o=this,a="SELECT * FROM "+o.config.adapter.collection_name+"  order by id DESC";db=Ti.Database.open(o.config.adapter.db_name);for(var r=db.execute(a),l=[];r.isValidRow();){var n=r.fieldByName("rgb").split(/,\s*/),s=50,_=-1,d=Math.abs(e-n[0]),c=Math.abs(t-n[1]),w=Math.abs(i-n[2]),h=Math.max(d,c,w);if(s>=h){for(var u=0;u<l.length;u++)if(h<=l[u].diff){_=u;break}0>_&&(_=l.length),l.splice(_,0,{id:r.fieldByName("id"),name:r.fieldByName("name"),code:r.fieldByName("code"),rgb:r.fieldByName("rgb"),cmyk:r.fieldByName("cmyk"),sample:r.fieldByName("sample"),thumb:r.fieldByName("thumb"),diff:h})}r.next()}return r.close(),db.close(),o.trigger("sync"),l}}),e}},model=Alloy.M("colour",exports.definition,[]),collection=Alloy.C("colour",exports.definition,model),exports.Model=model,exports.Collection=collection;