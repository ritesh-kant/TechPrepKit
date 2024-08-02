export abstract class BaseLogger {
  constructor(public next: BaseLogger | null) {}
  log(level: string, message: string) {
    if (this.next) {
      this.next.log(level, message);
    }
  }
}

export class InfoLogger extends BaseLogger {
  constructor(next: BaseLogger) {
    super(next);
  }
  log(logLevel: string, message: string): void {
    if (logLevel === 'INFO') {
      console.log('loging from info logger');
    } else {
      return super.log(logLevel, message);
    }
  }
}

export class ErrorLogger extends BaseLogger {
  constructor(next: BaseLogger | null) {
    super(next);
  }
  log(logLevel: string, message: string): void {
    if (logLevel === 'ERROR') {
      console.log('loging from error logger');
    } else {
      return super.log(logLevel, message);
    }
  }
}
