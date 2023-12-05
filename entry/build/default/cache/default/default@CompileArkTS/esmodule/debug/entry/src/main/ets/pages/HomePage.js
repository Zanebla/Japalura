import AdjustContentView from '@bundle:com.example.imagetestharmony/entry/ets/view/AdjustContentView';
import { cropIconChangeList, menuIconList } from '@bundle:com.example.imagetestharmony/entry/ets/viewmodel/IconListViewModel';
import Logger from '@bundle:com.example.imagetestharmony/entry/ets/utils/LoggerUtil';
import { RotateType, CropType, MainTabId } from '@bundle:com.example.imagetestharmony/entry/ets/viewmodel/OptionViewModel';
import { square, banner, rectangle } from '@bundle:com.example.imagetestharmony/entry/ets/utils/CropUtil';
import { encode } from '@bundle:com.example.imagetestharmony/entry/ets/utils/EncodeUtil';
import getPixelMap from '@bundle:com.example.imagetestharmony/entry/ets/utils/DecodeUtil';
import { CommonConstants } from '@bundle:com.example.imagetestharmony/entry/ets/common/constant/CommonConstants';
const TAG = 'imageEdit';
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.pageContent = undefined;
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__currentCropIndex = new ObservedPropertySimplePU(0, this, "currentCropIndex");
        this.__pixelMap = new ObservedPropertyObjectPU(undefined, this, "pixelMap");
        this.addProvidedVar("pixelMap", this.__pixelMap);
        this.__tempPixelMap = new ObservedPropertyObjectPU(undefined, this, "tempPixelMap");
        this.originalPixelMap = undefined;
        this.__imageInfo = new ObservedPropertyObjectPU({ size: { height: 0, width: 0 }, density: 0 }, this, "imageInfo");
        this.addProvidedVar("imageInfo", this.__imageInfo);
        this.__currentAdjustData = new ObservedPropertyObjectPU(CommonConstants.ADJUST_SLIDER_VALUE.map((item) => item), this, "currentAdjustData");
        this.addProvidedVar("currentAdjustData", this.__currentAdjustData);
        this.menuIconChangeList = menuIconList;
        this.cropIconChange = cropIconChangeList;
        this.__isPixelMapChange = new ObservedPropertySimplePU(false, this, "isPixelMapChange");
        this.addProvidedVar("isPixelMapChange", this.__isPixelMapChange);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.pageContent !== undefined) {
            this.pageContent = params.pageContent;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.currentCropIndex !== undefined) {
            this.currentCropIndex = params.currentCropIndex;
        }
        if (params.pixelMap !== undefined) {
            this.pixelMap = params.pixelMap;
        }
        if (params.tempPixelMap !== undefined) {
            this.tempPixelMap = params.tempPixelMap;
        }
        if (params.originalPixelMap !== undefined) {
            this.originalPixelMap = params.originalPixelMap;
        }
        if (params.imageInfo !== undefined) {
            this.imageInfo = params.imageInfo;
        }
        if (params.currentAdjustData !== undefined) {
            this.currentAdjustData = params.currentAdjustData;
        }
        if (params.menuIconChangeList !== undefined) {
            this.menuIconChangeList = params.menuIconChangeList;
        }
        if (params.cropIconChange !== undefined) {
            this.cropIconChange = params.cropIconChange;
        }
        if (params.isPixelMapChange !== undefined) {
            this.isPixelMapChange = params.isPixelMapChange;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentCropIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__tempPixelMap.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__currentCropIndex.aboutToBeDeleted();
        this.__pixelMap.aboutToBeDeleted();
        this.__tempPixelMap.aboutToBeDeleted();
        this.__imageInfo.aboutToBeDeleted();
        this.__currentAdjustData.aboutToBeDeleted();
        this.__isPixelMapChange.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    NavigationTitle(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Text.fontColor(Color.Red);
            Text.fontSize({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    TabBuilderMenu(index, name, parent = null) {
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
            Image.create(this.currentIndex === index ? (_a = this.menuIconChangeList[index]) === null || _a === void 0 ? void 0 : _a.chosen :
                (_b = this.menuIconChangeList[index]) === null || _b === void 0 ? void 0 : _b.normal);
            Image.width(CommonConstants.TAB_MENU_WIDTH);
            Image.height(CommonConstants.TAB_MENU_WIDTH);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(name);
            Text.fontColor(this.currentIndex === index ? Color.Blue : Color.White);
            Text.fontSize({ "id": 16777241, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get currentCropIndex() {
        return this.__currentCropIndex.get();
    }
    set currentCropIndex(newValue) {
        this.__currentCropIndex.set(newValue);
    }
    get pixelMap() {
        return this.__pixelMap.get();
    }
    set pixelMap(newValue) {
        this.__pixelMap.set(newValue);
    }
    get tempPixelMap() {
        return this.__tempPixelMap.get();
    }
    set tempPixelMap(newValue) {
        this.__tempPixelMap.set(newValue);
    }
    get imageInfo() {
        return this.__imageInfo.get();
    }
    set imageInfo(newValue) {
        this.__imageInfo.set(newValue);
    }
    get currentAdjustData() {
        return this.__currentAdjustData.get();
    }
    set currentAdjustData(newValue) {
        this.__currentAdjustData.set(newValue);
    }
    get isPixelMapChange() {
        return this.__isPixelMapChange.get();
    }
    set isPixelMapChange(newValue) {
        this.__isPixelMapChange.set(newValue);
    }
    async cropImage(proportion) {
        if (!this.pixelMap) {
            return;
        }
        const imageInfo = await this.pixelMap.getImageInfo();
        const size = imageInfo.size;
        const imageWidth = size === null || size === void 0 ? void 0 : size.width;
        const imageHeight = size === null || size === void 0 ? void 0 : size.height;
        switch (proportion) {
            case CropType.ORIGINAL_IMAGE:
                this.pixelInit();
                break;
            case CropType.SQUARE:
                if (this.pixelMap) {
                    square(this.pixelMap, imageWidth, imageHeight).then(() => {
                        this.flushPixelMapNew();
                    });
                }
                break;
            case CropType.BANNER:
                if (this.pixelMap) {
                    banner(this.pixelMap, imageWidth, imageHeight).then(() => {
                        this.flushPixelMapNew();
                    });
                }
                break;
            case CropType.RECTANGLE:
                if (this.pixelMap) {
                    rectangle(this.pixelMap, imageWidth, imageHeight).then(() => {
                        this.flushPixelMapNew();
                    });
                }
                break;
            default:
                break;
        }
    }
    rotateImage(rotateType) {
        if (rotateType === RotateType.CLOCKWISE) {
            if (!this.pixelMap) {
                return;
            }
            try {
                this.pixelMap.rotate(CommonConstants.CLOCK_WISE)
                    .then(() => {
                    this.flushPixelMapNew();
                });
            }
            catch (error) {
                Logger.error(TAG, `there is a error in rotate process with ${error === null || error === void 0 ? void 0 : error.code}`);
            }
        }
        if (rotateType === RotateType.ANTI_CLOCK) {
            if (!this.pixelMap) {
                return;
            }
            try {
                this.pixelMap.rotate(CommonConstants.ANTI_CLOCK)
                    .then(() => {
                    this.flushPixelMapNew();
                });
            }
            catch (error) {
                Logger.error(TAG, `there is a error in rotate process with ${error === null || error === void 0 ? void 0 : error.code}`);
            }
        }
    }
    flushPixelMap() {
        const temp = this.pixelMap;
        this.pixelMap = undefined;
        this.pixelMap = temp;
    }
    flushPixelMapNew() {
        this.isPixelMapChange = !this.isPixelMapChange;
    }
    pixelInit() {
        if (this.pageContent !== undefined) {
            getPixelMap(this.pageContent).then((pixelMap) => {
                if (pixelMap) {
                    this.isPixelMapChange = !this.isPixelMapChange;
                    this.pixelMap = pixelMap;
                }
                this.currentCropIndex = 0;
                this.currentAdjustData = CommonConstants.ADJUST_SLIDER_VALUE.map((item) => item);
            });
        }
    }
    aboutToAppear() {
        this.pageContent = this;
        this.pixelInit();
    }
    TitleNavigation(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.TITLE_SPACE });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild();
            Button.height(CommonConstants.LAYOUT_FULL_SCREEN);
            Button.type(ButtonType.Normal);
            Button.aspectRatio(1);
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => {
                this.pixelInit();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Image.width({ "id": 16777253, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Image.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild();
            Button.height(CommonConstants.LAYOUT_FULL_SCREEN);
            Button.type(ButtonType.Normal);
            Button.aspectRatio(1);
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => {
                AlertDialog.show({
                    title: { "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" },
                    message: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" },
                    alignment: DialogAlignment.Center,
                    primaryButton: {
                        value: { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" },
                        action: () => {
                            if (this.pixelMap) {
                                encode(this, this.pixelMap);
                            }
                        }
                    },
                    secondaryButton: {
                        value: { "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" },
                        action: () => {
                            Logger.info(TAG, `cancel`);
                        }
                    }
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Image.width({ "id": 16777253, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            Image.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigation.create();
            Navigation.titleMode(NavigationTitleMode.Mini);
            Navigation.backgroundColor(Color.Black);
            Navigation.title({ builder: () => {
                    this.NavigationTitle.call(this);
                } });
            Navigation.hideBackButton(true);
            Navigation.menus({ builder: () => {
                    this.TitleNavigation.call(this);
                } });
            if (!isInitialRender) {
                Navigation.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.LAYOUT_FULL_SCREEN);
            Column.height(CommonConstants.LAYOUT_FULL_SCREEN);
            Column.backgroundColor(Color.Black);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.LAYOUT_FULL_SCREEN);
            Column.height(CommonConstants.IMAGE_SHOW_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isPixelMapChange) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create(this.pixelMap ? this.pixelMap : '');
                        Image.objectFit(ImageFit.Contain);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create(this.pixelMap ? this.pixelMap : '');
                        Image.objectFit(ImageFit.Contain);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.LAYOUT_FULL_SCREEN);
            Column.height(CommonConstants.EDIT_PAGE_HEIGHT);
            Column.backgroundColor(Color.Black);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({ barPosition: BarPosition.End });
            Tabs.scrollable(false);
            Tabs.onChange((index) => {
                this.currentIndex = index;
            });
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.width(CommonConstants.LAYOUT_FULL_SCREEN);
                    Row.height(CommonConstants.LAYOUT_FULL_SCREEN);
                    Row.justifyContent(FlexAlign.SpaceAround);
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    ForEach.create();
                    const forEachItemGenFunction = (_item, index) => {
                        const item = _item;
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(this.currentCropIndex === index ? item === null || item === void 0 ? void 0 : item.chosen : item === null || item === void 0 ? void 0 : item.normal);
                            Image.width({ "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                            Image.height({ "id": 16777243, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                            Image.onClick(() => {
                                if (index) {
                                    this.currentCropIndex = index;
                                    this.cropImage(index);
                                }
                            });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    };
                    this.forEachUpdateFunction(elmtId, this.cropIconChange, forEachItemGenFunction, (item) => JSON.stringify(item), true, false);
                    if (!isInitialRender) {
                        ForEach.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                ForEach.pop();
                Row.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilderMenu.call(this, MainTabId.CROP, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
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
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.justifyContent(FlexAlign.Center);
                    Row.width(CommonConstants.LAYOUT_FULL_SCREEN);
                    Row.height(CommonConstants.LAYOUT_FULL_SCREEN);
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                    Image.width({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                    Image.height({ "id": 16777245, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                    Image.margin({ right: CommonConstants.EDIT_PAGE_HEIGHT });
                    Image.onClick(() => {
                        this.rotateImage(RotateType.CLOCKWISE);
                    });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                    Image.width({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                    Image.height({ "id": 16777245, "type": 10002, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                    Image.onClick(async () => {
                        this.rotateImage(RotateType.ANTI_CLOCK);
                    });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Row.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilderMenu.call(this, MainTabId.ROTATE, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
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
                            ViewPU.create(new AdjustContentView(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilderMenu.call(this, MainTabId.ADJUST, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.imagetestharmony", "moduleName": "entry" });
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new HomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=HomePage.js.map