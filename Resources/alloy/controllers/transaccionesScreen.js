function Controller() {
    function createRow(sucursal, fecha, puntosG, puntosR, saldo) {
        var tableRow = Ti.UI.createTableViewRow({
            height: 50
        });
        var sucursalView = Ti.UI.createView({
            left: 0,
            width: "20%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        var fechaView = Ti.UI.createView({
            left: "20%",
            width: "24%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        var puntosGView = Ti.UI.createView({
            left: "44%",
            width: "18%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        var puntosRView = Ti.UI.createView({
            left: "64%",
            width: "18%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        var saldoView = Ti.UI.createView({
            left: "83%",
            width: "18%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        sucursalView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: sucursal,
            color: "4d4d4d",
            font: {
                font: "Helvetica",
                fontSize: "12pt"
            }
        }));
        fechaView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: fecha,
            color: "4d4d4d",
            font: {
                font: "Helvetica",
                fontSize: "12pt"
            }
        }));
        puntosGView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: puntosG,
            color: "4d4d4d",
            font: {
                font: "Helvetica",
                fontSize: "12pt"
            }
        }));
        puntosRView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: puntosR,
            color: "4d4d4d",
            font: {
                font: "Helvetica",
                fontSize: "12pt"
            }
        }));
        saldoView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: saldo,
            color: "4d4d4d",
            font: {
                font: "Helvetica",
                fontSize: "12pt"
            }
        }));
        tableRow.add(sucursalView);
        tableRow.add(fechaView);
        tableRow.add(puntosGView);
        tableRow.add(puntosRView);
        tableRow.add(saldoView);
        sucursalView = fechaView = puntosGView = puntosRView = saldoView = null;
        return tableRow;
    }
    function datePicker() {
        $.inicioScreen.add(picker);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "transaccionesScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#9C213F",
        height: "100%",
        width: "100%",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.main = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#9C213F",
        height: "130px",
        top: "0",
        id: "main"
    });
    $.__views.inicioScreen.add($.__views.main);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 7,
        top: 25,
        width: "65px",
        height: "65px",
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.main.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: 17,
        right: 130,
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.main.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: 25,
        right: 7,
        width: "65px",
        height: "65px",
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.main.add($.__views.carritoBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    var __alloyId69 = [];
    __alloyId69.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "43",
        top: "0",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId69.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        text: "Mis Transacciones",
        id: "label",
        left: "20px"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.label = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        text: "Mes",
        id: "label",
        right: "170"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.mesImg = Ti.UI.createImageView({
        image: "/mesBtn.png",
        id: "mesImg",
        right: "150"
    });
    $.__views.categoria.add($.__views.mesImg);
    $.__views.label = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        text: "Desde",
        id: "label",
        right: "110"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.calendarImg = Ti.UI.createImageView({
        image: "/calendarBtn.png",
        id: "calendarImg",
        right: "75"
    });
    $.__views.categoria.add($.__views.calendarImg);
    datePicker ? $.__views.calendarImg.addEventListener("click", datePicker) : __defers["$.__views.calendarImg!click!datePicker"] = true;
    $.__views.label = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        text: "Hasta",
        id: "label",
        right: "35"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.calendarImg = Ti.UI.createImageView({
        image: "/calendarBtn.png",
        id: "calendarImg",
        right: "5"
    });
    $.__views.categoria.add($.__views.calendarImg);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId69.push($.__views.list);
    $.__views.columnas = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#a5a5a5",
        id: "columnas"
    });
    $.__views.list.add($.__views.columnas);
    $.__views.sucursal = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        left: "1%",
        text: "Sucursal",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "sucursal"
    });
    $.__views.columnas.add($.__views.sucursal);
    $.__views.fecha = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        left: "25%",
        text: "Fecha",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "fecha"
    });
    $.__views.columnas.add($.__views.fecha);
    $.__views.puntosG = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        left: "41%",
        text: "Puntos \nGanados",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "puntosG"
    });
    $.__views.columnas.add($.__views.puntosG);
    $.__views.puntosR = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        left: "60%",
        text: "Puntos \nRedimidos",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "puntosR"
    });
    $.__views.columnas.add($.__views.puntosR);
    $.__views.saldo = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "white",
        left: "83%",
        text: "Saldo \nFinal",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "saldo"
    });
    $.__views.columnas.add($.__views.saldo);
    $.__views.__alloyId68 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId69,
        id: "__alloyId68"
    });
    $.__views.inicioScreen.add($.__views.__alloyId68);
    $.__views.__alloyId70 = Ti.UI.createView({
        top: "210",
        id: "__alloyId70"
    });
    $.__views.inicioScreen.add($.__views.__alloyId70);
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable"
    });
    $.__views.__alloyId70.add($.__views.myTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    var tableData = [];
    tableData.push(createRow("Lomas", "dd/mm/aa", 650, 220, 5e3));
    tableData.push(createRow("Lomas", "dd/mm/aa", 650, 220, 5e3));
    tableData.push(createRow("Lomas", "dd/mm/aa", 650, 220, 5e3));
    tableData.push(createRow("Lomas", "dd/mm/aa", 650, 220, 5e3));
    $.myTable.setData(tableData);
    tableData = null;
    var picker = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        minDate: new Date(2009, 0, 1),
        maxDate: new Date(2014, 11, 31),
        value: new Date(2014, 3, 12),
        top: 200
    });
    picker.addEventListener("change", function(e) {
        Ti.API.info("User selected date: " + e.value.toLocaleString());
        var win = Alloy.createController("transaccionesScreen").getView();
        $.inicioScreen.add(win);
    });
    __defers["$.__views.calendarImg!click!datePicker"] && $.__views.calendarImg.addEventListener("click", datePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;