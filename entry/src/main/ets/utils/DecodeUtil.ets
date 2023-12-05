// 解码工具类

import fs from '@ohos.file.fs';
import image from '@ohos.multimedia.image';
import Logger from './LoggerUtil';
import { CommonConstants } from '../common/constant/CommonConstants';

const TAG: string = 'imageEdit_Decode';

/**
 * Async get resource fd.
 *
 * @return file fd.
 */
async function getResourceFd(pageContent: Object) {
  const context = getContext(pageContent);
  const resourceMgr = context.resourceManager;
  let imageBuffer = await resourceMgr.getMediaContent($r('app.media.ic_low'));
  let filePath = context.cacheDir + '/' + CommonConstants.RAW_FILE_NAME;
  let file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
  fs.writeSync(file.fd, imageBuffer.buffer);
  return file.fd;
}

/**
 * Async create pixel map.
 *
 * @return pixelMa.
 */
export default async function getPixelMap(pageContent: Object) {
  const fd = await getResourceFd(pageContent);
  const imageSourceApi = image.createImageSource(fd);
  if (!imageSourceApi) {
    Logger.error(TAG, 'imageSourceAPI created failed!');
    return;
  }
  const pixelMap = await imageSourceApi.createPixelMap({
    editable: true
  });
  return pixelMap;
}