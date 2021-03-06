﻿/* ----------------------------------------------------------------------------
Ready IoT Solution - OWLOS
Copyright 2019, 2020 by:
- Konstantin Brul (konstabrul@gmail.com)
- Vitalii Glushchenko (cehoweek@gmail.com)
- Denys Melnychuk (meldenvar@gmail.com)
- Denis Kirin (deniskirinacs@gmail.com)

This file is part of Ready IoT Solution - OWLOS

OWLOS is free software : you can redistribute it and/or modify it under the
terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

OWLOS is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.
See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with OWLOS. If not, see < https://www.gnu.org/licenses/>.

GitHub: https://github.com/KirinDenis/owlos

(Этот файл — часть Ready IoT Solution - OWLOS.

OWLOS - свободная программа: вы можете перераспространять ее и/или изменять
ее на условиях Стандартной общественной лицензии GNU в том виде, в каком она
была опубликована Фондом свободного программного обеспечения; версии 3
лицензии, любой более поздней версии.

OWLOS распространяется в надежде, что она будет полезной, но БЕЗО ВСЯКИХ
ГАРАНТИЙ; даже без неявной гарантии ТОВАРНОГО ВИДА или ПРИГОДНОСТИ ДЛЯ
ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ.
Подробнее см.в Стандартной общественной лицензии GNU.

Вы должны были получить копию Стандартной общественной лицензии GNU вместе с
этой программой. Если это не так, см. <https://www.gnu.org/licenses/>.)
--------------------------------------------------------------------------------------*/

var driversUI = {


    appendDriverPins: function (valueSelect) {
        var valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("notused");
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D0";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D1";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D2";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D3";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D4";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D5";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D6";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D7";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D8";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D9";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "A0";

    },

    appendDriverDigitalOnlyPins: function (valueSelect) {
        var valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D0";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D1";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D2";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D3";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D4";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D5";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D6";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D7";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D8";
        valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "D9";
    },

    appendDriverAnalogOnlyPins: function (valueSelect) {
        var valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = "A0";
    },


    appendDriverNotUsedPins: function (valueSelect) {
        var valueSelectOption = valueSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("notused");
    },

    addDriverClick: function (event) {
        event.stopPropagation();
        settingsUI.driverAnchorClick(event);

        var addDriverAhref = event.currentTarget;
        var node = addDriverAhref.node;

        makeModalDialog("resetPanel", "addDriver", getLang("adddriverdigalog") + " " + node.nodenickname, "");
        var modalFooter = document.getElementById("addDriverModalFooter");
        var modalBody = document.getElementById("addDriverModalBody");

        var titleDriverText = modalBody.appendChild(document.createElement("p"));
        titleDriverText.innerHTML = getLang("driver");
        titleDriverText.className = "text-center";

        var formGroup = modalBody.appendChild(document.createElement("div"));
        formGroup.className = "form-group";

        var label = formGroup.appendChild(document.createElement("label"));
        label.setAttribute("for", "typeSelect");
        label.innerText = getLang("drivertype");
        var inputDiv = formGroup.appendChild(document.createElement("div"));

        var typeSelect = formGroup.appendChild(document.createElement('select'));
        typeSelect.className = "form-control form-control-sm";
        typeSelect.id = "typeSelect";
        typeSelect.onchange = driversUI.pinsAndWidget;


        var valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("dht");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("light");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("smoke");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("motion");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("sensor");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("stepper");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("lcd");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("actuator");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("opto");
        valueSelectOption = typeSelect.appendChild(document.createElement('option'));
        valueSelectOption.innerText = getLang("valve");


        formGroup = modalBody.appendChild(document.createElement("div"));
        formGroup.className = "form-group";
        label = formGroup.appendChild(document.createElement("label"));
        label.setAttribute("for", "idEdit");
        label.innerText = getLang("driverid");
        var idEdit = formGroup.appendChild(document.createElement('input'));
        idEdit.className = "form-control form-control-sm";
        idEdit.id = "idInput";
        idEdit.placeholder = getLang("driveridplaceholder");


        formGroup = modalBody.appendChild(document.createElement("div"));
        formGroup.className = "form-group";
        formGroup.id = "pin1Div";
        formGroup.style.display = "none";
        label = formGroup.appendChild(document.createElement("label"));
        label.setAttribute("for", "pin1Select");
        label.innerText = getLang("pin") + " 1";
        var pin1Select = formGroup.appendChild(document.createElement('select'));
        pin1Select.className = "form-control form-control-sm";
        pin1Select.id = "pin1Select";
        driversUI.appendDriverNotUsedPins(pin1Select);

        formGroup = modalBody.appendChild(document.createElement("div"));
        formGroup.className = "form-group";
        formGroup.id = "pin2Div";
        formGroup.style.display = 'none';
        label = formGroup.appendChild(document.createElement("label"));
        label.setAttribute("for", "pin2Select");
        label.innerText = getLang("pin") + " 2";
        var pin2Select = formGroup.appendChild(document.createElement('select'));
        pin2Select.className = "form-control form-control-sm";
        pin2Select.id = "pin2Select";
        driversUI.appendDriverNotUsedPins(pin2Select);

        formGroup = modalBody.appendChild(document.createElement("div"));
        formGroup.className = "form-group";
        formGroup.id = "pin3Div";
        formGroup.style.display = 'none';
        label = formGroup.appendChild(document.createElement("label"));
        label.setAttribute("for", "pin3Select"); 
        label.innerText = getLang("pin") + " 3";
        var pin3Select = formGroup.appendChild(document.createElement('select'));
        pin3Select.className = "form-control form-control-sm";
        pin3Select.id = "pin3Select";
        driversUI.appendDriverNotUsedPins(pin3Select);

        formGroup = modalBody.appendChild(document.createElement("div"));
        formGroup.className = "form-group";
        formGroup.id = "pin4Div";
        formGroup.style.display = 'none';
        label = formGroup.appendChild(document.createElement("label"));
        label.setAttribute("for", "pin4Select");
        label.innerText = getLang("pin") + " 4";
        var pin4Select = formGroup.appendChild(document.createElement('select'));
        pin4Select.className = "form-control form-control-sm";
        pin4Select.id = "pin4Select";
        driversUI.appendDriverNotUsedPins(pin4Select);

        //Checkbox for auto widget adding
        var checkBoxDiv = modalBody.appendChild(document.createElement("div"));
        checkBoxDiv.className = "custom-control custom-checkbox";


        var checkBoxInput = checkBoxDiv.appendChild(document.createElement("input"));
        checkBoxInput.type = "checkbox";
        checkBoxInput.className = "custom-control-input";
        checkBoxInput.id = "autoAddWidget";
        checkBoxInput.checked = true;
        checkBoxInput.onchange = driversUI.checkBoxClick;

        var checkBoxLabel = checkBoxDiv.appendChild(document.createElement("label"));
        checkBoxLabel.className = "custom-control-label";
        checkBoxLabel.setAttribute("for", "autoAddWidget");
        checkBoxLabel.innerHTML = getLang("autoaddwidget");

        var addWidgetGroup = modalBody.appendChild(document.createElement("div"));
        addWidgetGroup.style.display = "none"; //"block"
        addWidgetGroup.id = "addWidgetGroup";

        var titleWidgetText = addWidgetGroup.appendChild(document.createElement("p"));
        titleWidgetText.innerHTML = getLang("widget");
        titleWidgetText.className = "text-center";
        
        //driver properties select
        var formGroupDriverProperties = addWidgetGroup.appendChild(document.createElement("div"));
        var driverPropLabel = formGroupDriverProperties.appendChild(document.createElement("label"));
        driverPropLabel.setAttribute("for", "driverPropSelect");
        driverPropLabel.innerText = getLang("driversporplist");
        var driverPropSelect = formGroupDriverProperties.appendChild(document.createElement('select'));
        driverPropSelect.className = "form-control form-control-sm";
        driverPropSelect.id = "driverPropertySelected";

        //widgets select 
        var formGroupWidgetSelect = addWidgetGroup.appendChild(document.createElement("div"));
        var widgetLabel = formGroupWidgetSelect.appendChild(document.createElement("label"));
        widgetLabel.setAttribute("for", "widgetSelect");
        widgetLabel.innerText = getLang("widgetslist");
        var widgetSelect = formGroupWidgetSelect.appendChild(document.createElement('select'));
        widgetSelect.className = "form-control form-control-sm";
        widgetSelect.id = "widgetTypeSelected";



        var alertDiv = modalBody.appendChild(document.createElement('div'));

       // var modalFooter = modalContent.appendChild(document.createElement("div"));
       // modalFooter.className = "modal-footer";

        event = { currentTarget: typeSelect };
        driversUI.pinsAndWidget(event);

        var addButton = modalFooter.appendChild(document.createElement("button"));
        addButton.type = "button";
        addButton.className = "btn btn-success btn-sm";
        addButton.id = "addDriverModalButton";
        addButton.node = node;
        //   addButton.setAttribute("data-dismiss", "modal");
        addButton.typeSelect = typeSelect;
        addButton.idEdit = idEdit;
        addButton.pin1Select = pin1Select;
        addButton.pin2Select = pin2Select;
        addButton.pin3Select = pin3Select;
        addButton.pin4Select = pin4Select;
        addButton.alertDiv = alertDiv;
        addButton.onclick =  driversUI.doAddDriverClick;
        addButton.innerText = getLang("adddriverbutton");


        $("#addDriverModal").modal('show');

        return false;
    },

    pinsAndWidget: function (event) {
        var driverSelected = event.currentTarget;
        var maxPinsAmount = 4;
        var currentDiv = "";
        var currentOptions = "";
        var pinsInfo = [];
        
        switch (driverSelected.selectedIndex+1) {
            case 1:
                pinsInfo.push("digital");
                console.log("dht");
                break; 
            case 2: 
                pinsInfo.push("analog");
                console.log("light sensor");
                break;
            case 3:
                pinsInfo.push("analog");
                console.log("smoke detector");
                break;
            case 4:
                pinsInfo.push("digital");
                console.log("motion detector");
                break;
            case 5:
                pinsInfo.push("digital");
                console.log("sensor driver");
                break;
            case 6:
                pinsInfo.push("digital", "digital", "digital", "digital");
                console.log("stepper driver");
                break;
            case 7:
                pinsInfo.push("digital", "digital");
                console.log("LCD");
                break;
            case 8:
                pinsInfo.push("digital");
                console.log("Actuator");
                break;
            case 9:
                pinsInfo.push("digital", "digital");
                console.log("Opto driver");
                break;
            case 10:
                pinsInfo.push("digital", "digital", "analog");
                console.log("valve driver");
                break;


            default:
                pinsInfo.push("notused");
                console.log('default');
        }

        for (var pinsIndex = 0; pinsIndex < maxPinsAmount; pinsIndex++){

            var divId = pinsIndex + 1;

            currentDiv = document.getElementById("pin" + divId + "Div");

            if (currentDiv !== null) {

                if (pinsIndex < pinsInfo.length) {
                    currentDiv.style.display = 'block';
                }
                else {
                    currentDiv.style.display = 'none';
                }
            }

            currentOptions = document.getElementById("pin" + divId + "Select");

            if (currentOptions !== null) {

                currentOptions.options.length = 0;

                if (pinsIndex < pinsInfo.length) {
                    switch (pinsInfo[pinsIndex]) {
                        case "digital":
                            driversUI.appendDriverDigitalOnlyPins(currentOptions);
                            console.log("digital");
                            break;
                        case "analog":
                            driversUI.appendDriverAnalogOnlyPins(currentOptions);
                            console.log("analog");
                            break;
                        case "universal":
                            driversUI.appendDriverPins(currentOptions);
                            console.log("universal");
                            break;
                        default:
                            driversUI.appendDriverNotUsedPins(currentOptions);
                            console.log('notused');
                    }
                }
                else {
                    driversUI.appendDriverNotUsedPins(currentOptions);
                }
            }



        }

        pinsInfo.length = 0;
    },

    doAddDriverClick: function (event) {
        event.stopPropagation();
        var addButton = event.currentTarget;
        var node = addButton.node;

        addButton.className = "btn btn-warning btn-sm";
        addButton.value = 'do...';
        addButton.disable = true;

        //TODO: decode Type from name 
        var httpResult = addDriver(node.host, addButton.typeSelect.selectedIndex + 1, addButton.idEdit.value, addButton.pin1Select.value, addButton.pin2Select.value, addButton.pin3Select.value, addButton.pin4Select.value);

        if (httpResult == 1) {

            var autoAddWidgetCheckBox = document.getElementById("autoAddWidget");
            if (autoAddWidgetCheckBox !== null) {

                if (autoAddWidgetCheckBox.checked == true) {

                    var driversWidgetsPanel = document.getElementById("driversWidgetsPanel");

                    var defaultWidgets = [];
                    var widgetLayer = "";
                    var widgetWrapper = "";

                    switch (addButton.typeSelect.selectedIndex + 1) {

                        case 1:

                            defaultWidgets.push({
                                widgetType: "temperature",
                                driverPropertyName: "temperature"
                            }, {
                                widgetType: "humidity",
                                driverPropertyName: "humidity"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "humidityhistorydata"
                            },{
                                    widgetType: "historydatagraph",
                                    driverPropertyName: "temperaturehistorydata"
                            });


                            console.log("dht widgets");
                            break;
                        case 2:

                            defaultWidgets.push({
                                widgetType: "light",
                                driverPropertyName: "light"
                            });


                            console.log("light sensor widgets");
                            break;
                        case 3:

                            defaultWidgets.push({
                                widgetType: "smoke",
                                driverPropertyName: "smoke"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });


                            console.log("smoke detector widgets");
                            break;
                        case 4:

                            defaultWidgets.push({
                                widgetType: "motion",
                                driverPropertyName: "motion"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });

                            console.log("motion detector");
                            break;
                        case 5:

                            defaultWidgets.push({
                                widgetType: "sensor",
                                driverPropertyName: "sensor"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });

                            console.log("sensor driver");
                            break;
                        case 6:

                            defaultWidgets.push({
                                widgetType: "value",
                                driverPropertyName: "position"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });

                            console.log("stepper driver");
                            break;
                        case 7:
                            defaultWidgets.push({
                                widgetType: "lcd",
                                driverPropertyName: "text"
                            });
                            
                            console.log("LCD");
                            break;
                        case 8:

                            defaultWidgets.push({
                                widgetType: "actuator",
                                driverPropertyName: "data"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });

                            console.log("Actuator");
                            break;
                        case 9:

                            defaultWidgets.push({
                                widgetType: "value",
                                driverPropertyName: "data"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });


                            console.log("Opto driver");
                            break;
                        case 10:

                            defaultWidgets.push({
                                widgetType: "value",
                                driverPropertyName: "position"
                            }, {
                                widgetType: "historydatagraph",
                                driverPropertyName: "historydata"
                            });

                            console.log("valve driver");
                            break;

                        default:
                            alert("Íåò òàêèõ çíà÷åíèé");
                    }

                    if (defaultWidgets.length !== 0) {
                        for (var defaultWidgetIndex = 0; defaultWidgetIndex < defaultWidgets.length; defaultWidgetIndex++) {
                            widgetLayer = WidgetsLayer.getWidgetById(defaultWidgets[defaultWidgetIndex].widgetType); ///òèï âèäæåòà (widget id)
                            if (widgetLayer !== undefined) {

                                widgetWrapper = new widgetLayer.widget(driversWidgetsPanel, undefined, undefined, configProperties.dashboards[0].widgets[0], undefined);
                                widgetWrapper.offlineStarter(driversWidgetsPanel, addButton.idEdit.value, defaultWidgets[defaultWidgetIndex].driverPropertyName);
                                widgetWrapper.widget.onchange = config.onWidgetChange;
                                widgetWrapper.widget.ondelete = config.onWidgetDelete;
                                config.addWidget("main", addButton.idEdit.value, defaultWidgets[defaultWidgetIndex].driverPropertyName, defaultWidgets[defaultWidgetIndex].widgetType, widgetWrapper.widget.id, widgetWrapper.widget.properties);

                            }
                        }
                    }

                    defaultWidgets.length = 0;
  
                }
            }


            $("#addDriverModal").modal('hide');
            // renderDriversProperties(); TODO model refresh
        }
        else {
            addButton.alertDiv.innerHTML = "";
            var addDriverAlert = addButton.alertDiv.appendChild(document.createElement('div'));
            addDriverAlert.className = "alert alert-danger";
            addDriverAlert.role = "alert";
            addDriverAlert.innerText = httpResult;

            addButton.className = "btn btn-success btn-sm";
            addButton.value = 'add';
        }
        addButton.disable = false;
        return false;

    },


    driverClick: function (event) {
        var button = event.currentTarget;
        document.location = button.href;
        return false;
    },

    checkBoxClick: function (event) {
        var checkBox = event.currentTarget;
        var divGroup = document.getElementById("addWidgetGroup");

        if (checkBox.checked == true) {
 //TODO ñìåíèòü íà "block" äàâàÿ âîçìîæíîñòü âûáðàòü ñâîéñòâî è âèäæåò 
            divGroup.style.display = "none";
        }
        else {

            divGroup.style.display = "none";
        }

        return true;
    }
}
