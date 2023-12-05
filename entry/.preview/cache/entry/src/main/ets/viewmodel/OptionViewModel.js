// 图片处理封装类
/**
 * Crop type.
 */
export var CropType;
(function (CropType) {
    CropType[CropType["ORIGINAL_IMAGE"] = 0] = "ORIGINAL_IMAGE";
    CropType[CropType["SQUARE"] = 1] = "SQUARE";
    CropType[CropType["BANNER"] = 2] = "BANNER";
    CropType[CropType["RECTANGLE"] = 3] = "RECTANGLE";
})(CropType || (CropType = {}));
/**
 * Rotate type
 */
export var RotateType;
(function (RotateType) {
    RotateType[RotateType["CLOCKWISE"] = 0] = "CLOCKWISE";
    RotateType[RotateType["ANTI_CLOCK"] = 1] = "ANTI_CLOCK";
})(RotateType || (RotateType = {}));
/**
 * Adjust type.
 */
export var AdjustId;
(function (AdjustId) {
    AdjustId[AdjustId["BRIGHTNESS"] = 0] = "BRIGHTNESS";
    AdjustId[AdjustId["TRANSPARENCY"] = 1] = "TRANSPARENCY";
    AdjustId[AdjustId["SATURATION"] = 2] = "SATURATION";
})(AdjustId || (AdjustId = {}));
/**
 * Main page tab type.
 */
export var MainTabId;
(function (MainTabId) {
    MainTabId[MainTabId["CROP"] = 0] = "CROP";
    MainTabId[MainTabId["ROTATE"] = 1] = "ROTATE";
    MainTabId[MainTabId["ADJUST"] = 2] = "ADJUST";
})(MainTabId || (MainTabId = {}));
/**
 * RGB color, red,green and blue.
 */
export var RGBIndex;
(function (RGBIndex) {
    RGBIndex[RGBIndex["RED"] = 0] = "RED";
    RGBIndex[RGBIndex["GREEN"] = 1] = "GREEN";
    RGBIndex[RGBIndex["BLUE"] = 2] = "BLUE";
})(RGBIndex || (RGBIndex = {}));
/**
 * HSV type.
 */
export var HSVIndex;
(function (HSVIndex) {
    HSVIndex[HSVIndex["HUE"] = 0] = "HUE";
    HSVIndex[HSVIndex["SATURATION"] = 1] = "SATURATION";
    HSVIndex[HSVIndex["VALUE"] = 2] = "VALUE";
})(HSVIndex || (HSVIndex = {}));
/**
 * Angel range.
 */
export var AngelRange;
(function (AngelRange) {
    AngelRange[AngelRange["ANGEL_0_60"] = 0] = "ANGEL_0_60";
    AngelRange[AngelRange["ANGEL_60_120"] = 1] = "ANGEL_60_120";
    AngelRange[AngelRange["ANGEL_120_180"] = 2] = "ANGEL_120_180";
    AngelRange[AngelRange["ANGEL_180_240"] = 3] = "ANGEL_180_240";
    AngelRange[AngelRange["ANGEL_240_300"] = 4] = "ANGEL_240_300";
    AngelRange[AngelRange["ANGEL_300_360"] = 5] = "ANGEL_300_360";
})(AngelRange || (AngelRange = {}));
//# sourceMappingURL=OptionViewModel.js.map