var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            name: "TEXT",
            type: "TEXT",
            position: "INTEGER",
            description: "TEXT",
            image: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "category"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getCategoryList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " order by position , name";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        name: res.fieldByName("name"),
                        type: res.fieldByName("type"),
                        image: res.fieldByName("image"),
                        description: res.fieldByName("description")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getCategoryListByType: function(type, from) {
                "undefined" == typeof from && (from = 0);
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE type='" + type + "' order by position, name LIMIT " + from + ", 999";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    "" != res.fieldByName("id") && (listArr[count] = {
                        id: res.fieldByName("id"),
                        name: res.fieldByName("name"),
                        type: res.fieldByName("type"),
                        image: res.fieldByName("image"),
                        description: res.fieldByName("description")
                    });
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getCategoryByIdOnly: function(id) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='" + id + "' order by position, name";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = [];
                res.isValidRow() && (arr = {
                    id: res.fieldByName("id"),
                    name: res.fieldByName("name"),
                    type: res.fieldByName("type"),
                    image: res.fieldByName("image"),
                    description: res.fieldByName("description")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return arr;
            },
            getCategoryById: function(id, cateType, from) {
                "undefined" == typeof from && (from = 0);
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='" + id + "' AND `type` = '" + cateType + "' order by position, name LIMIT " + from + ", 999";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = [];
                res.isValidRow() && (arr = {
                    id: res.fieldByName("id"),
                    name: res.fieldByName("name"),
                    type: res.fieldByName("type"),
                    image: res.fieldByName("image"),
                    description: res.fieldByName("description")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return arr;
            },
            resetCategory: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            },
            getCategoryByType: function(type) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE type='" + type + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = [];
                res.isValidRow() && (arr = {
                    id: res.fieldByName("id"),
                    name: res.fieldByName("name"),
                    type: res.fieldByName("type"),
                    image: res.fieldByName("image"),
                    description: res.fieldByName("description")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return arr;
            }
        });
        return Collection;
    }
};

model = Alloy.M("category", exports.definition, []);

collection = Alloy.C("category", exports.definition, model);

exports.Model = model;

exports.Collection = collection;