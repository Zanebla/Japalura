// 亮度异步调节
import hilog from '@ohos:hilog';
import worker from '@ohos:worker';
import { adjustImageValue } from '@bundle:com.example.imagetestharmony/entry/ets/utils/AdjustUtil';
let workerPort = worker.workerPort;
/**
* Defines the event handler to be called when the worker thread receives a message sent by the host thread.
* The event handler is executed in the worker thread.
*
* @param e message data
*/
workerPort.onmessage = function (event) {
    let bufferArray = event.data.buf;
    let last = event.data.last;
    let cur = event.data.cur;
    let buffer = adjustImageValue(bufferArray, last, cur);
    workerPort.postMessage(buffer);
    workerPort.close();
};
/**
* Defines the event handler to be called when the worker receives a message that cannot be deserialized.
* The event handler is executed in the worker thread.
*
* @param e message data
*/
workerPort.onmessageerror = function (event) {
    hilog.error(0x0000, 'AdjustBrightnessWork', 'Failed to load the content. Cause: %{public}s', `on message error ${JSON.stringify(event)}`);
};
/**
* Defines the event handler to be called when an exception occurs during worker execution.
* The event handler is executed in the worker thread.
*
* @param e error message
*/
workerPort.onerror = function (error) {
    hilog.error(0x0000, 'AdjustBrightnessWork', 'Failed to load the content. Cause: %{public}s', `on worker error ${JSON.stringify(error)}`);
};
//# sourceMappingURL=AdjustBrightnessWork.js.map