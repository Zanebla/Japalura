// 日志工具类
import hilog from '@ohos:hilog';
/**
 * Log printing tool class.
 */
class Logger {
    /**
     * Constructor.
     *
     * @param Prefix Identifies the log tag.
     * @param domain Domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFFF.
     */
    constructor(prefix = 'MyApp', domain = 0xFF00) {
        this.format = '%{public}s, %{public}s';
        this.prefix = prefix;
        this.domain = domain;
    }
    debug(...args) {
        hilog.debug(this.domain, this.prefix, this.format, args);
    }
    info(...args) {
        hilog.info(this.domain, this.prefix, this.format, args);
    }
    warn(...args) {
        hilog.warn(this.domain, this.prefix, this.format, args);
    }
    error(...args) {
        hilog.error(this.domain, this.prefix, this.format, args);
    }
}
export default new Logger('[ImageEdit]');
//# sourceMappingURL=LoggerUtil.js.map