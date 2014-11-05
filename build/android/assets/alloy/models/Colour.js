var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",name:"TEXT",code:"TEXT",rgb:"TEXT",cmyk:"TEXT",sample:"TEXT"},adapter:{type:"sql",collection_name:"colour"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getColourList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name+"  order by id DESC";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={id:i.fieldByName("id"),name:i.fieldByName("name"),code:i.fieldByName("code"),rgb:i.fieldByName("rgb"),cmyk:i.fieldByName("cmyk"),sample:i.fieldByName("sample")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getColourById:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),name:o.fieldByName("name"),code:o.fieldByName("code"),rgb:o.fieldByName("rgb"),cmyk:o.fieldByName("cmyk"),sample:o.fieldByName("sample")}),o.close(),db.close(),t.trigger("sync"),a},resetColour:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")},getColourByQuery:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE name LIKE '%"+e+"%' OR code='%"+e+"%'";db=Ti.Database.open(t.config.adapter.db_name);for(var o=db.execute(i),a=[],l=0;o.isValidRow();)a[l]={id:o.fieldByName("id"),name:o.fieldByName("name"),code:o.fieldByName("code"),rgb:o.fieldByName("rgb"),cmyk:o.fieldByName("cmyk"),sample:o.fieldByName("sample")},o.next(),l++;return o.close(),db.close(),t.trigger("sync"),a},getClosestColourList:function(e,t,i){var o=this,a="SELECT * FROM "+o.config.adapter.collection_name+"  order by id DESC";db=Ti.Database.open(o.config.adapter.db_name);for(var l=db.execute(a),r=[];l.isValidRow();){var n=l.fieldByName("rgb").split(/,\s*/),_=50,s=-1,d=Math.abs(e-n[0]),c=Math.abs(t-n[1]),u=Math.abs(i-n[2]),h=Math.max(d,c,u);if(_>=h){for(var g=0;g<r.length;g++)if(h<=r[g].diff){s=g;break}0>s&&(s=r.length),r.splice(s,0,{id:l.fieldByName("id"),name:l.fieldByName("name"),code:l.fieldByName("code"),rgb:l.fieldByName("rgb"),cmyk:l.fieldByName("cmyk"),sample:l.fieldByName("sample"),diff:h})}l.next()}return l.close(),db.close(),o.trigger("sync"),r}}),e}},model=Alloy.M("colour",exports.definition,[]),collection=Alloy.C("colour",exports.definition,model),exports.Model=model,exports.Collection=collection;