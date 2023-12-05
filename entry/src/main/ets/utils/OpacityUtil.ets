// 透明度调节工具类

import { CommonConstants } from '../common/constant/CommonConstants';
import Logger from './LoggerUtil';

const TAG = 'Opacity';

/**
 * Opacity adjust.
 *
 * @param pixelMap.
 * @param value.
 * @return pixelMap.
 */
export async function adjustOpacity(pixelMap: PixelMap, value: number) {
  if (!pixelMap) {
    return;
  }
  const newPixelMap = pixelMap;
  newPixelMap.opacity(value / CommonConstants.SLIDER_MAX, (err: Error) => {
    if (err) {
      Logger.error(TAG, `Failed adjust opacity with ${err}`);
    }
  })
  return newPixelMap;
}