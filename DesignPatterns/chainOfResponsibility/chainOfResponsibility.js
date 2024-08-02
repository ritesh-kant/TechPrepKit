"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogger = exports.InfoLogger = exports.BaseLogger = void 0;
class BaseLogger {
    constructor(next) {
        this.next = next;
    }
    log(level, message) {
        if (this.next) {
            this.next.log(level, message);
        }
    }
}
exports.BaseLogger = BaseLogger;
class InfoLogger extends BaseLogger {
    constructor(next) {
        super(next);
    }
    log(logLevel, message) {
        if (logLevel === 'INFO') {
            console.log('loging from info logger');
        }
        else {
            return super.log(logLevel, message);
        }
    }
}
exports.InfoLogger = InfoLogger;
class ErrorLogger extends BaseLogger {
    constructor(next) {
        super(next);
    }
    log(logLevel, message) {
        if (logLevel === 'ERROR') {
            console.log('loging from error logger');
        }
        else {
            return super.log(logLevel, message);
        }
    }
}
exports.ErrorLogger = ErrorLogger;
