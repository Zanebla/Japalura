// icon数据

/**
 * Icon status.
 */
export class IconStatus {
  normal: Resource;
  chosen: Resource;

  constructor(normal: Resource, chosen: Resource) {
    this.normal = normal;
    this.chosen = chosen;
  }
}

/**
 * Bottom menu icon.
 */
export const menuIconList: Array<IconStatus> = [
  new IconStatus($r('app.media.ic_crop'), $r('app.media.ic_crop_filled')),
  new IconStatus($r('app.media.ic_rotate'), $r('app.media.ic_rotate_filled')),
  new IconStatus($r('app.media.ic_adjust'), $r('app.media.ic_adjust_filled'))
]

/**
 * Crop icon.
 */
export const cropIconChangeList: Array<IconStatus> = [
  new IconStatus($r('app.media.ic_original'),$r('app.media.ic_original_filled') ),
  new IconStatus($r('app.media.ic_one2one'), $r('app.media.ic_one2one_filled')),
  new IconStatus($r('app.media.ic_four2three'), $r('app.media.ic_four2three_filled')),
  new IconStatus($r('app.media.ic_sixteen2nine'), $r('app.media.ic_sixteen2nine_filled'))
]

/**
 * Adjust icon.
 */
export const adjustIconList: Array<IconStatus> = [
  new IconStatus($r('app.media.ic_brightness'), $r('app.media.ic_brightness_filled')),
  new IconStatus($r('app.media.ic_transparency'), $r('app.media.ic_transparency_filled')),
  new IconStatus($r('app.media.ic_saturation'), $r('app.media.ic_saturation_filled'))
]

