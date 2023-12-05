// 图片处理封装类

/**
 * Crop type.
 */
export enum CropType {
  ORIGINAL_IMAGE,
  SQUARE,
  BANNER,
  RECTANGLE
}

/**
 * Rotate type
 */
export enum RotateType {
  CLOCKWISE,
  ANTI_CLOCK
}

/**
 * Adjust type.
 */
export enum AdjustId {
  BRIGHTNESS,
  TRANSPARENCY,
  SATURATION
}

/**
 * Main page tab type.
 */
export enum MainTabId {
  CROP,
  ROTATE,
  ADJUST
}

/**
 * RGB color, red,green and blue.
 */
export enum RGBIndex {
  RED,
  GREEN,
  BLUE
}

/**
 * HSV type.
 */
export enum HSVIndex {
  HUE,
  SATURATION,
  VALUE
}

/**
 * Angel range.
 */
export enum AngelRange {
  ANGEL_0_60,
  ANGEL_60_120,
  ANGEL_120_180,
  ANGEL_180_240,
  ANGEL_240_300,
  ANGEL_300_360
}