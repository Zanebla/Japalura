// 日志工具类

import hilog from '@ohos.hilog';

/**
 * Log printing tool class.
 */
class Logger {
  private domain: number;
  private prefix: string;
  private format: string = '%{public}s, %{public}s';

  /**
   * Constructor.
   *
   * @param Prefix Identifies the log tag.
   * @param domain Domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFFF.
   */
  constructor(prefix: string = 'MyApp', domain: number = 0xFF00) {
    this.prefix = prefix;
    this.domain = domain;
  }

  debug(...args: any[]) {
    hilog.debug(this.domain, this.prefix, this.format, args);
  }

  info(...args: any[]) {
    hilog.info(this.domain, this.prefix, this.format, args);
  }

  warn(...args: any[]) {
    hilog.warn(this.domain, this.prefix, this.format, args);
  }

  error(...args: any[]) {
    hilog.error(this.domain, this.prefix, this.format, args);
  }
}

export default new Logger('[ImageEdit]')