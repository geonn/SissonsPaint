function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
<<<<<<< HEAD
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId98"
    });
    $.__views.home.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Alloy.createController("toggle", {
        id: "__alloyId100",
        __parentSymbol: $.__views.__alloyId99
    });
    $.__views.__alloyId100.setParent($.__views.__alloyId99);
    $.__views.__alloyId101 = Ti.UI.createLabel({
=======
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId29"
    });
    $.__views.home.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Alloy.createController("toggle", {
        id: "__alloyId31",
        __parentSymbol: $.__views.__alloyId30
    });
    $.__views.__alloyId31.setParent($.__views.__alloyId30);
    $.__views.__alloyId32 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
=======
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;