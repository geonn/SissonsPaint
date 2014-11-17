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
    $.__views.__alloyId97 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId97"
    });
    $.__views.home.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Alloy.createController("toggle", {
        id: "__alloyId99",
        __parentSymbol: $.__views.__alloyId98
    });
    $.__views.__alloyId99.setParent($.__views.__alloyId98);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId100"
    });
    $.__views.__alloyId98.add($.__views.__alloyId100);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;