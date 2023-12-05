// 透明度调节工具类
import { CommonConstants } from '@bundle:com.example.imagetestharmony/entry/ets/common/constant/CommonConstants';
import Logger from '@bundle:com.example.imagetestharmony/entry/ets/utils/LoggerUtil';
const TAG = 'Opacity';
/**
 * Opacity adjust.
 *
 * @param pixelMap.
 * @param value.
 * @return pixelMap.
 */
export async function adjustOpacity(pixelMap, value) {
    if (!pixelMap) {
        return;
    }
    const newPixelMap = pixelMap;
    newPixelMap.opacity(value / CommonConstants.SLIDER_MAX, (err) => {
        if (err) {
            Logger.error(TAG, `Failed adjust opacity with ${err}`);
        }
    });
    return newPixelMap;
}
//# sourceMappingURL=OpacityUtil.js.map