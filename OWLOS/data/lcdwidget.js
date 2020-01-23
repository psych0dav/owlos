function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var LCDWidget =
    
    function (_BaseWidget) {
        "use strict";

        _inheritsLoose(LCDWidget, _BaseWidget);

        function LCDWidget(parentPanel, id, size) {
            
            var baseWidget = _BaseWidget.call(this, parentPanel, id, size) || this;
            baseWidget.topMargin = baseWidget.size / 20; //this.panding = 5;

            baseWidget.width = baseWidget.size * 2;
            baseWidget.height = baseWidget.size - baseWidget.panding;
            baseWidget.centreX = baseWidget.width / 2; //  this.centreY = this.height / 2;

            baseWidget.widgetTextSize = baseWidget.size / 110;

            baseWidget.svgElement.setAttributeNS(null, "viewBox", baseWidget.halfPanding + " " + baseWidget.halfPanding + " " + baseWidget.width + " " + baseWidget.height);

            baseWidget.svgElement.setAttributeNS(null, "width", baseWidget.width);

            baseWidget.SVGBackpanel.drawRoundedRect(baseWidget.width, baseWidget.height, 5, 10, true, true, true, true);
            baseWidget.SVGBoxBackpanel.drawRoundedRect(baseWidget.width, 26, 5, 0, true, true, false, false);
            baseWidget.SVGBackdownpanel.y += 3;
            baseWidget.SVGBackdownpanel.drawRoundedRect(baseWidget.width, 10, 5, 0, false, false, true, true);
            baseWidget.SVGWidgetText1 = new SVGText(baseWidget.svgElement, baseWidget.id + "widgettext1", baseWidget.widgetTextSize);
            baseWidget.SVGWidgetText1.fontFamily = "monospace";
            baseWidget.SVGWidgetText2 = new SVGText(baseWidget.svgElement, baseWidget.id + "widgettext2", baseWidget.widgetTextSize);
            baseWidget.SVGWidgetText2.fontFamily = "monospace";
            baseWidget.SVGWidgetText3 = new SVGText(baseWidget.svgElement, baseWidget.id + "widgettext3", baseWidget.widgetTextSize);
            baseWidget.SVGWidgetText3.fontFamily = "monospace";
            baseWidget.SVGWidgetText4 = new SVGText(baseWidget.svgElement, baseWidget.id + "widgettext4", baseWidget.widgetTextSize);
            baseWidget.SVGWidgetText4.fontFamily = "monospace";
            baseWidget.SVGWidgetText1.text = "1234567890ABCSDEFGHL"; //20 chars 

            baseWidget.SVGLabel.text = "LCD";
            baseWidget.textWidth = baseWidget.SVGWidgetText1.width;
            baseWidget.textHeight = baseWidget.SVGWidgetText1.height;
            baseWidget.widgetLeft = baseWidget.centreX - baseWidget.textWidth / 2;
            baseWidget.widgetTop = baseWidget.centreY + baseWidget.SVGLabel.height - baseWidget.textHeight * 4 / 2;
            baseWidget.SVGWidgetBack = new SVGRect(baseWidget.svgElement, baseWidget.id + "widgetback", baseWidget.widgetLeft - baseWidget.panding, baseWidget.widgetTop - parseFloat(baseWidget.textHeight - baseWidget.panding), baseWidget.textWidth + baseWidget.panding * 2, baseWidget.textHeight * 4 + baseWidget.panding);
            baseWidget.SVGWidgetBack.opacity = 0.2;
            baseWidget.SVGWidgetBack.color = theme.secondary;
            baseWidget.SVGWidgetText1.text = "";
            baseWidget.SVGLabel.text = "";

            baseWidget.SVGWidgetText.hide();

            baseWidget.SVGArcSpinner.x = baseWidget.centreX;
            baseWidget.rPanel.onclick = baseWidget.showEditor; //Popup editor 

            baseWidget.pre = baseWidget.rPanel.appendChild(document.createElement('pre'));
            baseWidget.pre.className = "LCDTextArea";
            baseWidget.pre.style.display = 'none';
            baseWidget.textarea = baseWidget.pre.appendChild(document.createElement('textarea'));
            baseWidget.textarea.className = "form-control text-white bg-primary";
            baseWidget.textarea.id = "textarea" + baseWidget.id;
            baseWidget.textarea.rows = "4";
            baseWidget.textarea.cols = "25";

            var elementHeight = baseWidget.pre.getBoundingClientRect().height;

            baseWidget.pre.style.marginTop = -(elementHeight / 2.0 + baseWidget.size / 1.8) + "px";
            baseWidget.btnGroup = baseWidget.rPanel.appendChild(document.createElement("p"));
            baseWidget.btnGroup.style.display = 'none';
            baseWidget.btnGroup.className = "LCDButtons";
            baseWidget.btnGroup.role = "group";
            baseWidget.textElement = baseWidget.btnGroup.appendChild(document.createElement('div'));
            baseWidget.textElement.className = "text-white";
            baseWidget.lcdButton = baseWidget.btnGroup.appendChild(document.createElement('input'));
            baseWidget.lcdButton.className = "btn btn-success text-white LCDButton";
            baseWidget.lcdButton.id = baseWidget.id + "lcdbutton";
            baseWidget.lcdButton.type = "button";
            baseWidget.lcdButton.edit = baseWidget.textarea;
            baseWidget.lcdButton.lcdid = baseWidget.id;
            baseWidget.lcdButton.widget = _assertThisInitialized(baseWidget); // this.lcdButton.onclick = lcdButtonClick;

            baseWidget.lcdButton.value = getLang("send");
            baseWidget.lightButton = baseWidget.btnGroup.appendChild(document.createElement('input'));
            baseWidget.lightButton.className = "btn btn-info text-white LCDButton";
            baseWidget.lightButton.id = baseWidget.id + "clearbutton";
            baseWidget.lightButton.type = "button";
            baseWidget.lightButton.edit = baseWidget.textarea;
            baseWidget.lightButton.lcdid = baseWidget.id;
            baseWidget.lightButton.widget = _assertThisInitialized(baseWidget); //  this.lightButton.onclick = lightButtonClick;

            baseWidget.lightButton.value = getLang("shortlight");
            baseWidget.ShowEqualizer = false;

            baseWidget.proprties = baseWidget._properties;
            return baseWidget;
        }

        var _proto = LCDWidget.prototype;

        _proto.refresh = function refresh(widgetText, label, light) {
            label = getLang(label);
            this.widgetText = widgetText;
            this.label = label;
            this.spinnerAngle = 0;

            if (light != undefined) {
                this.light = light;
            } else {
                this.light = 0;
            }

            this.redrawAll();
        };

        _proto.showEditor = function showEditor(event) {
            event.stopPropagation();
            var rPanel = event.currentTarget;
            var lcdWidget = rPanel.widget;

            if (!lcdWidget.pre.style.display.indexOf("block")!=-1) {
                lcdWidget.textarea.value = lcdWidget.widgetText;
                lcdWidget.pre.style.display = 'block';
                lcdWidget.btnGroup.style.display = 'block';
            } else {//TODO: direct click     
                //  lcdWidget.hideEditor(); 
            }

            return true;
        };

        _proto.hideEditor = function hideEditor() {
            this.pre.style.display = 'none';
            this.btnGroup.style.display = 'none';
        }
            /*
                get _newtorkStatus() {
                    return this.networkStatus;
                }
            
                set _networkStatus(networkStatus) {
                    if ((networkStatus >= NET_OFFLINE) && (networkStatus <= NET_RECONNECT)) {
                        this.networkStatus = networkStatus;
                        this.redrawAll();
                    }
                }
            
                get _percent() {
                    return this.percent;
                }
            
                set _percent(percent) {
                    if ((percent >= 0) && (percent <= 100)) {
                        this.percent = percent;
                        this.redrawAll();
                    }
                }
            
                //---------------------------------------------------------------------------------------
                redrawAll() {
                    this.drawText();
                    this.starttime = 0;
                    requestAnimationFrame(() => this.drawWidget());
            
            
                }
                */
            //---------------------------------------------------------------------------------------
            //draw element text labels - percent value and text 
            ;

        _proto.drawText = function drawText() {
            _BaseWidget.prototype.drawText.call(this);

            if (this.SVGWidgetText1 == undefined) return;

            switch (this._networkStatus) {
                case NET_ONLINE:
                    this.SVGWidgetText1.color = theme.light;
                    this.SVGWidgetText2.color = theme.light;
                    this.SVGWidgetText3.color = theme.light;
                    this.SVGWidgetText4.color = theme.light;
                    break;

                case NET_RECONNECT:
                    this.SVGWidgetText1.color = theme.info;
                    this.SVGWidgetText2.color = theme.info;
                    this.SVGWidgetText3.color = theme.info;
                    this.SVGWidgetText4.color = theme.info;
                    break;

                default:
                    //offline
                    this.SVGWidgetText1.color = theme.secondary;
                    this.SVGWidgetText2.color = theme.secondary;
                    this.SVGWidgetText3.color = theme.secondary;
                    this.SVGWidgetText4.color = theme.secondary;
                    break;
            }

            if (this.widgetText == undefined) {
                this.widgetText = "";
            }

            this.SVGWidgetText1.text = this.widgetText.substring(0, 20);
            this.SVGWidgetText2.text = this.widgetText.substring(20, 40);
            this.SVGWidgetText3.text = this.widgetText.substring(40, 60);
            this.SVGWidgetText4.text = this.widgetText.substring(60);
            this.SVGWidgetText1.x = this.widgetLeft;
            this.SVGWidgetText1.y = this.widgetTop;
            this.SVGWidgetText2.x = this.widgetLeft;
            this.SVGWidgetText2.y = this.SVGWidgetText1.y + this.SVGWidgetText1.height;
            this.SVGWidgetText3.x = this.widgetLeft;
            this.SVGWidgetText3.y = this.SVGWidgetText2.y + this.SVGWidgetText2.height;
            this.SVGWidgetText4.x = this.widgetLeft;
            this.SVGWidgetText4.y = this.SVGWidgetText3.y + this.SVGWidgetText4.height;
            /*
            this.SVGLabel.text = this.label;
            this.SVGLabel.x = this.width / 2 - this.SVGLabel.width / 2;
            this.SVGLabel.y = this.SVGLabel.height - this.panding;
             switch (this.networkStatus) {
                case NET_ONLINE: this.SVGLabel.color = theme.light; break;
                case NET_ERROR: this.SVGLabel.color = theme.danger; break;
                case NET_RECONNECT: this.SVGLabel.color = theme.info; break;
                default: //offline
                    this.SVGLabel.color = theme.secondary; break;
            }
               this.SVGWidgetText1.color = theme.light;
            this.SVGWidgetText2.color = theme.light;
            this.SVGWidgetText3.color = theme.light;
            this.SVGWidgetText4.color = theme.light;
             this.SVGWidgetText1.text = this.widgetText.substring(0, 20);
            this.SVGWidgetText2.text = this.widgetText.substring(20, 40);
            this.SVGWidgetText3.text = this.widgetText.substring(40, 60);
            this.SVGWidgetText4.text = this.widgetText.substring(60);
             this.SVGWidgetText1.x = this.widgetLeft;
            this.SVGWidgetText1.y = this.widgetTop;
             this.SVGWidgetText2.x = this.widgetLeft;
            this.SVGWidgetText2.y = this.SVGWidgetText1.y + this.SVGWidgetText1.height;
             this.SVGWidgetText3.x = this.widgetLeft;
            this.SVGWidgetText3.y = this.SVGWidgetText2.y + this.SVGWidgetText2.height;
             this.SVGWidgetText4.x = this.widgetLeft;
            this.SVGWidgetText4.y = this.SVGWidgetText3.y + this.SVGWidgetText4.height;
              */

            /*        
            //var newValue = getParsedDeviceProperty(this.id, "text");
            if (this.percent !== this.textarea.storedValue) {
                this.textarea.value = this.percent;
                this.textarea.storedValue = this.percent;
            }
             this.textElement.innerHTML = this.text;
            
            switch (this.networkStatus) {
                case NET_ONLINE:
                     this.textElement.className = "text-white text-center";
                    this.hintElement.innerHTML = getLang("rid_online");
                    this.hintElement.className = "LCDWidgetHint text-secondary text-center";
                    break;
                case NET_ERROR:
                    this.textElement.className = "text-danger text-center";
                    this.hintElement.innerHTML = getLang("rid_error");
                    this.hintElement.className = "LCDWidgetHint text-danger text-center";
                    break;
                case NET_RECONNECT:
                    this.textElement.className = "text-info text-center";
                    this.hintElement.innerHTML = getLang("rid_connect");
                    this.hintElement.className = "LCDWidgetHint text-info text-center";
                    break;
                default: //offline
                    this.textElement.className = "text-secondary text-center";
                    this.hintElement.innerHTML = getLang("rid_offline");
                    this.hintElement.className = "LCDWidgetHint text-secondary text-center";
                    break;
            }
            */
        };

        _proto.drawWidget = function drawWidget() {
            if (this.SVGWidgetBack == undefined) return;
            if (this.light == 1) {
                this.SVGWidgetBack.color = theme.info;
            } else {
                this.SVGWidgetBack.color = theme.secondary;
            }

            _BaseWidget.prototype.drawWidget.call(this);
            /*
                    if (this.light == 1) {
                        this.SVGWidgetBack.color = theme.info;
                    }
                    else {
                        this.SVGWidgetBack.color = theme.secondary;
                    }
            
                    //spinner 
                    if (this.networkStatus == NET_RECONNECT) {
                        this.spinnerAngle += 1.5;
                        this.SVGArcSpinner.draw(this.spinnerAngle, 240 + this.spinnerAngle);
                        requestAnimationFrame(() => this.drawWidget());
                    }
                    else {
                        this.SVGArcSpinner.hide();
                    }
                    
                    */

        };

        return LCDWidget;
    }(BaseWidget);