// 编码工具类
import mediaLibrary from '@ohos:multimedia.mediaLibrary';
import fs from '@ohos:file.fs';
import image from '@ohos:multimedia.image';
import Logger from '@bundle:com.example.imagetestharmony/entry/ets/utils/LoggerUtil';
import { CommonConstants } from '@bundle:com.example.imagetestharmony/entry/ets/common/constant/CommonConstants';
const TAG = 'imageEdit_Encode';
/**
 * Pack the image.
 *
 * @param pixelMap.
 */
export async function encode(component, pixelMap) {
    const newPixelMap = pixelMap;
    // Packing image.
    const imagePackerApi = image.createImagePacker();
    const packOptions = {
        format: CommonConstants.ENCODE_FORMAT,
        quality: CommonConstants.ENCODE_QUALITY
    };
    const imageData = await imagePackerApi.packing(newPixelMap, packOptions);
    Logger.info(TAG, `imageData's length is ${imageData.byteLength}`);
    // Get album's path.
    const context = getContext(component);
    const media = mediaLibrary.getMediaLibrary(context);
    const publicPath = await media.getPublicDirectory(mediaLibrary.DirectoryType.DIR_IMAGE);
    const currentTime = new Date().getTime();
    // Create image asset.
    const imageAssetInfo = await media.createAsset(mediaLibrary.MediaType.IMAGE, `${CommonConstants.IMAGE_PREFIX}_${currentTime}${CommonConstants.IMAGE_FORMAT}`, publicPath);
    const imageFd = await imageAssetInfo.open(CommonConstants.ENCODE_FILE_PERMISSION);
    await fs.write(imageFd, imageData);
    // Image resource release.
    await imageAssetInfo.close(imageFd);
    imagePackerApi.release();
    await media.release();
}
//# sourceMappingURL=EncodeUtil.js.map