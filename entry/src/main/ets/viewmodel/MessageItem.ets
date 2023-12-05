// 多线程封装消息

/**
 * Multithreading transmission message.
 */
export class MessageItem {
  constructor(buf: ArrayBuffer, last: number, cur: number) {
    this.buf = buf;
    this.last = last;
    this.cur = cur;
  }

  /**
   * Send buffers.
   */
  buf: ArrayBuffer;

  /**
   * Last slider value.
   */
  last: number;

  /**
   * Current slider value.
   */
  cur: number;
}