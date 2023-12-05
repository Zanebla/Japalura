// 裁剪工具类
import { RegionItem } from '@bundle:com.example.imagetestharmony/entry/ets/viewmodel/RegionItem';
import { CommonConstants } from '@bundle:com.example.imagetestharmony/entry/ets/common/constant/CommonConstants';
/**
 * Crop 1:1.
 *
 * @param pixelMap.
 * @param width.
 * @param height.
 */
export async function square(pixelMap, width, height) {
    if (width < height) {
        pixelMap.crop({
            size: {
                width: width,
                height: width
            },
            x: 0,
            y: Math.round((height - width) / CommonConstants.AVERAGE_WEIGHT_WIDTH)
        });
    }
    else {
        pixelMap.crop({
            size: {
                width: height,
                height: height
            },
            x: Math.round((width - height) / CommonConstants.AVERAGE_WEIGHT_WIDTH),
            y: 0
        });
    }
}
/**
 * Common crop function.
 *
 * @param pixelMap.
 * @param cropWidth.
 * @param cropHeight.
 * @param cropPosition.
 */
export async function cropCommon(pixelMap, cropWidth, cropHeight, cropPosition) {
    pixelMap.crop({
        size: {
            width: cropWidth,
            height: cropHeight
        },
        x: cropPosition.x,
        y: cropPosition.y
    });
}
/**
 * Crop 4:3.
 *
 * @param pixelMap.
 * @param width.
 * @param height.
 */
export async function banner(pixelMap, width, height) {
    if (width <= height) {
        const cropWidth = width;
        const cropHeight = Math.floor(width * CommonConstants.CROP_RATE_4_3);
        const cropPosition = new RegionItem(0, Math.floor((height - cropHeight) / CommonConstants.AVERAGE_WEIGHT_WIDTH));
        cropCommon(pixelMap, cropWidth, cropHeight, cropPosition);
        return;
    }
    if (width * CommonConstants.CROP_RATE_4_3 >= height) {
        const cropWidth = Math.floor(height / CommonConstants.CROP_RATE_4_3);
        const cropHeight = height;
        const cropPosition = new RegionItem(Math.floor((width - cropWidth) / CommonConstants.AVERAGE_WEIGHT_WIDTH), 0);
        cropCommon(pixelMap, cropWidth, cropHeight, cropPosition);
        return;
    }
    const cropWidth = width;
    const cropHeight = Math.floor(width * CommonConstants.CROP_RATE_4_3);
    const cropPosition = new RegionItem(0, Math.floor((height - cropHeight) / CommonConstants.AVERAGE_WEIGHT_WIDTH));
    cropCommon(pixelMap, cropWidth, cropHeight, cropPosition);
}
/**
 * Crop 16:9.
 *
 * @param pixelMap.
 * @param width.
 * @param height.
 */
export async function rectangle(pixelMap, width, height) {
    if (width <= height) {
        const cropWidth = width;
        const cropHeight = Math.floor(width * (CommonConstants.CROP_RATE_9_16));
        const cropPosition = new RegionItem(0, Math.floor((height - cropHeight) / CommonConstants.AVERAGE_WEIGHT_WIDTH));
        cropCommon(pixelMap, cropWidth, cropHeight, cropPosition);
        return;
    }
    if (width * (CommonConstants.CROP_RATE_9_16) >= height) {
        const cropWidth = Math.floor(height / (CommonConstants.CROP_RATE_9_16));
        const cropHeight = height;
        const cropPosition = new RegionItem(Math.floor((width - cropWidth) / CommonConstants.AVERAGE_WEIGHT_WIDTH), 0);
        cropCommon(pixelMap, cropWidth, cropHeight, cropPosition);
        return;
    }
    const cropWidth = width;
    const cropHeight = Math.floor(width * (CommonConstants.CROP_RATE_9_16));
    const cropPosition = new RegionItem(0, Math.floor((height - cropHeight) / CommonConstants.AVERAGE_WEIGHT_WIDTH));
    cropCommon(pixelMap, cropWidth, cropHeight, cropPosition);
}
//# sourceMappingURL=CropUtil.js.map