function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId17 = Ti.UI.createView({
        left: 3,
        top: 48,
        width: "20%",
        height: 50,
        borderWidth: 1,
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId17"
    });
    $.__views.home.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Menu",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    toggle ? $.__views.__alloyId18.addEventListener("click", toggle) : __defers["$.__views.__alloyId18!click!toggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId18!click!toggle"] && $.__views.__alloyId18.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;