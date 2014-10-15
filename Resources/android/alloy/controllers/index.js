function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doMenuClick(e) {
        switch (e.index) {
          case 0:
            navigation("home");
            break;

          case 1:
            navigation("diyPaint");
            break;

          case 2:
            navigation("colourPicker");
            break;

          case 3:
            navigation("colourSwatches");
            break;

          case 4:
            navigation("brochure");
            break;

          case 5:
            navigation("storeLocator");
            break;

          case 6:
            navigation("aboutUs");
        }
    }
    function navigation(target) {
        var win = Alloy.createController(target).getView();
        Alloy.Globals.Drawer.setCenterWindow(win);
        Alloy.Globals.Drawer.closeLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __defers = {};
    $.__views.mainWindow = require("xp.ui").createWindow({
        backgroundColor: "black",
        fullscreen: "true",
        title: "test",
        role: "leftWindow",
        id: "mainWindow"
    });
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "/images/menu_logo.png",
        width: "150",
        top: "30"
    });
    $.__views.mainWindow.add($.__views.logo);
<<<<<<< HEAD
    var __alloyId102 = [];
    $.__views.__alloyId103 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId103"
    });
    __alloyId102.push($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
=======
    var __alloyId33 = [];
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId34"
    });
    __alloyId33.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Home",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId105"
    });
    __alloyId102.push($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
=======
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId36"
    });
    __alloyId33.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId107"
    });
    __alloyId102.push($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
=======
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId38"
    });
    __alloyId33.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId109"
    });
    __alloyId102.push($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
=======
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId40"
    });
    __alloyId33.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId111"
    });
    __alloyId102.push($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
=======
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId42"
    });
    __alloyId33.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId113"
    });
    __alloyId102.push($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
=======
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId44"
    });
    __alloyId33.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId115"
    });
    __alloyId102.push($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
=======
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId46"
    });
    __alloyId33.push($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
<<<<<<< HEAD
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId102,
=======
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId33,
>>>>>>> FETCH_HEAD
        id: "menuTable",
        top: "100",
        separatorColor: "black"
    });
    $.__views.mainWindow.add($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    $.__views.tnc = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: 8
        },
        text: "TERM & CONDITIONS | 2014 COPYRIGHT",
        id: "tnc",
        bottom: "20"
    });
    $.__views.mainWindow.add($.__views.tnc);
    $.__views.centerWindow = require("xp.ui").createWindow({
        backgroundColor: "white",
        fullscreen: true,
        id: "centerWindow",
        role: "centerWindow"
    });
    $.__views.menu = Ti.UI.createView({
        layout: "vertical",
        id: "menu"
    });
    $.__views.centerWindow.add($.__views.menu);
<<<<<<< HEAD
    $.__views.__alloyId117 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId117"
    });
    $.__views.menu.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Alloy.createController("toggle", {
        id: "__alloyId118",
        __parentSymbol: $.__views.__alloyId117
    });
    $.__views.__alloyId118.setParent($.__views.__alloyId117);
    $.__views.__alloyId119 = Ti.UI.createLabel({
=======
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId48"
    });
    $.__views.menu.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Alloy.createController("toggle", {
        id: "__alloyId49",
        __parentSymbol: $.__views.__alloyId48
    });
    $.__views.__alloyId49.setParent($.__views.__alloyId48);
    $.__views.__alloyId50 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Index",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId119"
    });
    $.__views.__alloyId117.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
=======
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am center",
<<<<<<< HEAD
        id: "__alloyId120"
    });
    $.__views.centerWindow.add($.__views.__alloyId120);
=======
        id: "__alloyId51"
    });
    $.__views.centerWindow.add($.__views.__alloyId51);
>>>>>>> FETCH_HEAD
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 200,
        id: "drawer",
        children: [ $.__views.mainWindow, $.__views.centerWindow ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.drawer.open({
        navBarHidden: true,
        fullscreen: true
    });
    Ti.App.Properties.setString("module", "index");
    var API = require("api");
    API.loadColour();
    API.loadStoreLocator();
    API.loadBrochure();
    API.loadCategory();
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        mod = Ti.App.Properties.getString("module");
        if ("storeLocator" == mod) {
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else {
            var nav = Alloy.createController("home").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        }
    });
    require("dk.napp.drawer");
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;