// 色域调整视图
import worker from '@ohos:worker';
import { adjustIconList } from '@bundle:com.example.imagetestharmony/entry/ets/viewmodel/IconListViewModel';
import { adjustOpacity } from '@bundle:com.example.imagetestharmony/entry/ets/utils/OpacityUtil';
import { CommonConstants } from '@bundle:com.example.imagetestharmony/entry/ets/common/constant/CommonConstants';
import { AdjustId } from '@bundle:com.example.imagetestharmony/entry/ets/viewmodel/OptionViewModel';
import { MessageItem } from '@bundle:com.example.imagetestharmony/entry/ets/viewmodel/MessageItem';
export default class AdjustContentView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentAdjustIndex = new ObservedPropertySimplePU(0, this, "currentAdjustIndex");
        this.__currentAdjustData = this.initializeConsume("currentAdjustData", "currentAdjustData");
        this.AdjustIconList = adjustIconList;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentAdjustIndex !== undefined) {
            this.currentAdjustIndex = params.currentAdjustIndex;
        }
        if (params.AdjustIconList !== undefined) {
            this.AdjustIconList = params.AdjustIconList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentAdjustIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentAdjustIndex.aboutToBeDeleted();
        this.__currentAdjustData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    TabBuilder(index, name, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.LAYOUT_FULL_SCREEN);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a, _b;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.currentAdjustIndex === index ? (_a = this.AdjustIconList[index]) === null || _a === void 0 ? void 0 : _a.chosen : (_b = this.AdjustIconList[index]) === null || _b === void 0 ? void 0 : _b.normal);
            Image.width({ "id": 16777238, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Image.height({ "id": 16777237, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(name);
            Text.fontColor(this.currentAdjustIndex === index ? Color.Blue : Color.White);
            Text.fontSize({ "id": 16777236, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777240, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    get currentAdjustIndex() {
        return this.__currentAdjustIndex.get();
    }
    set currentAdjustIndex(newValue) {
        this.__currentAdjustIndex.set(newValue);
    }
    get currentAdjustData() {
        return this.__currentAdjustData.get();
    }
    set currentAdjustData(newValue) {
        this.__currentAdjustData.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({ barPosition: BarPosition.End });
            Tabs.margin({ bottom: { "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" } });
            Tabs.onChange((index) => {
                this.currentAdjustIndex = index;
            });
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new SliderCustom(this, {
                                currentIndex: AdjustId.BRIGHTNESS.valueOf(),
                                min: CommonConstants.SLIDER_MIN.valueOf(),
                                max: CommonConstants.SLIDER_MAX.valueOf(),
                                currentAdjustData: this.__currentAdjustData
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                currentIndex: AdjustId.BRIGHTNESS.valueOf(),
                                min: CommonConstants.SLIDER_MIN.valueOf(),
                                max: CommonConstants.SLIDER_MAX.valueOf()
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, AdjustId.BRIGHTNESS, { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new SliderCustom(this, {
                                currentIndex: AdjustId.TRANSPARENCY.valueOf(),
                                min: CommonConstants.SLIDER_MIN.valueOf(),
                                max: CommonConstants.SLIDER_MAX.valueOf(),
                                currentAdjustData: this.__currentAdjustData
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                currentIndex: AdjustId.TRANSPARENCY.valueOf(),
                                min: CommonConstants.SLIDER_MIN.valueOf(),
                                max: CommonConstants.SLIDER_MAX.valueOf()
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, AdjustId.TRANSPARENCY, { "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new SliderCustom(this, {
                                currentIndex: AdjustId.SATURATION.valueOf(),
                                min: CommonConstants.SLIDER_MIN.valueOf(),
                                max: CommonConstants.SLIDER_MAX.valueOf(),
                                currentAdjustData: this.__currentAdjustData
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                currentIndex: AdjustId.SATURATION.valueOf(),
                                min: CommonConstants.SLIDER_MIN.valueOf(),
                                max: CommonConstants.SLIDER_MAX.valueOf()
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, AdjustId.SATURATION, { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SliderCustom extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentIndex = new SynchedPropertySimpleOneWayPU(params.currentIndex, this, "currentIndex");
        this.__currentAdjustData = new SynchedPropertyObjectTwoWayPU(params.currentAdjustData, this, "currentAdjustData");
        this.__min = new SynchedPropertySimpleOneWayPU(params.min, this, "min");
        this.__max = new SynchedPropertySimpleOneWayPU(params.max, this, "max");
        this.__pixelMap = this.initializeConsume("pixelMap", "pixelMap");
        this.__isPixelMapChange = this.initializeConsume("isPixelMapChange", "isPixelMapChange");
        this.pixelMapTemp = undefined;
        this.postState = true;
        this.workerInstance = undefined;
        this.saturationLastSlider = CommonConstants.SLIDER_MAX;
        this.brightnessLastSlider = CommonConstants.SLIDER_MAX;
        this.deviceListDialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new Dialog(this, {});
                jsDialog.setController(this.deviceListDialogController);
                ViewPU.create(jsDialog);
            },
            alignment: DialogAlignment.Center,
            autoCancel: false,
            customStyle: true
        }, this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.pixelMapTemp !== undefined) {
            this.pixelMapTemp = params.pixelMapTemp;
        }
        if (params.postState !== undefined) {
            this.postState = params.postState;
        }
        if (params.workerInstance !== undefined) {
            this.workerInstance = params.workerInstance;
        }
        if (params.saturationLastSlider !== undefined) {
            this.saturationLastSlider = params.saturationLastSlider;
        }
        if (params.brightnessLastSlider !== undefined) {
            this.brightnessLastSlider = params.brightnessLastSlider;
        }
        if (params.deviceListDialogController !== undefined) {
            this.deviceListDialogController = params.deviceListDialogController;
        }
    }
    updateStateVars(params) {
        this.__currentIndex.reset(params.currentIndex);
        this.__min.reset(params.min);
        this.__max.reset(params.max);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentAdjustData.purgeDependencyOnElmtId(rmElmtId);
        this.__min.purgeDependencyOnElmtId(rmElmtId);
        this.__max.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__currentAdjustData.aboutToBeDeleted();
        this.__min.aboutToBeDeleted();
        this.__max.aboutToBeDeleted();
        this.__pixelMap.aboutToBeDeleted();
        this.__isPixelMapChange.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get currentAdjustData() {
        return this.__currentAdjustData.get();
    }
    set currentAdjustData(newValue) {
        this.__currentAdjustData.set(newValue);
    }
    get min() {
        return this.__min.get();
    }
    set min(newValue) {
        this.__min.set(newValue);
    }
    get max() {
        return this.__max.get();
    }
    set max(newValue) {
        this.__max.set(newValue);
    }
    get pixelMap() {
        return this.__pixelMap.get();
    }
    set pixelMap(newValue) {
        this.__pixelMap.set(newValue);
    }
    get isPixelMapChange() {
        return this.__isPixelMapChange.get();
    }
    set isPixelMapChange(newValue) {
        this.__isPixelMapChange.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`${this.currentAdjustData[this.currentIndex]}`);
            Text.fontColor(Color.White);
            Text.margin({ top: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.LAYOUT_FULL_SCREEN);
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Slider.create({
                value: this.currentAdjustData[this.currentIndex],
                step: CommonConstants.SLIDER_STEP,
                min: this.min,
                max: this.max
            });
            Slider.trackColor(Color.White);
            Slider.width(CommonConstants.SLIDER_WIDTH);
            Slider.showSteps(true);
            Slider.onChange((value, mode) => {
                this.sliderChange(value, mode);
            });
            if (!isInitialRender) {
                Slider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        Column.pop();
    }
    sliderChange(value, mode) {
        if (mode === SliderChangeMode.End || mode === CommonConstants.SLIDER_CLICK_MODE) {
            this.currentAdjustData[this.currentIndex] = Math.round(value);
            switch (this.currentIndex) {
                case AdjustId.BRIGHTNESS:
                    this.postToWorker(AdjustId.BRIGHTNESS, value, CommonConstants.BRIGHTNESS_WORKER_FILE);
                    break;
                case AdjustId.TRANSPARENCY:
                    if (this.pixelMap) {
                        adjustOpacity(this.pixelMap, Math.round(value))
                            .then((pixelMap) => {
                            if (pixelMap) {
                                this.pixelMap = pixelMap;
                                this.isPixelMapChange = !this.isPixelMapChange;
                            }
                        });
                    }
                    break;
                case AdjustId.SATURATION:
                    this.postToWorker(AdjustId.SATURATION, value, CommonConstants.SATURATION_WORKER_FILE);
                    break;
                default:
                    break;
            }
        }
    }
    postToWorker(type, value, workerName) {
        if (!this.pixelMap) {
            return;
        }
        let sliderValue = type === AdjustId.BRIGHTNESS ? this.brightnessLastSlider : this.saturationLastSlider;
        let workerInstance = new worker.ThreadWorker(workerName);
        const bufferArray = new ArrayBuffer(this.pixelMap.getPixelBytesNumber());
        this.pixelMap.readPixelsToBuffer(bufferArray).then(() => {
            let message = new MessageItem(bufferArray, sliderValue, value);
            workerInstance.postMessage(message);
            if (this.postState) {
                this.deviceListDialogController.open();
            }
            this.postState = false;
            workerInstance.onmessage = (event) => {
                this.updatePixelMap(event);
            };
            if (type === AdjustId.BRIGHTNESS) {
                this.brightnessLastSlider = Math.round(value);
            }
            else {
                this.saturationLastSlider = Math.round(value);
            }
            workerInstance.onexit = () => {
                if (workerInstance !== undefined) {
                    workerInstance.terminate();
                }
            };
        });
    }
    updatePixelMap(event) {
        const newPixel = this.pixelMap;
        if (newPixel !== undefined) {
            newPixel.writeBufferToPixels(event.data);
        }
        this.pixelMap = newPixel;
        this.isPixelMapChange = !this.isPixelMapChange;
        this.deviceListDialogController.close();
        this.postState = true;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class Dialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.controller = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            LoadingProgress.create();
            LoadingProgress.color(Color.White);
            LoadingProgress.width(CommonConstants.LOADING_WH);
            LoadingProgress.height(CommonConstants.LOADING_WH);
            if (!isInitialRender) {
                LoadingProgress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=AdjustContentView.js.map