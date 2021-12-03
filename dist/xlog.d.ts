declare module 'xlog-ts/index' {
  export { LogManager } from 'xlog-ts/LogManager';
  export { Logger } from 'xlog-ts/Logger';
  export { LogConfig } from 'xlog-ts/LogConfig';
  export { LogLevel } from 'xlog-ts/LogLevel';

}
declare module 'xlog-ts/LogConfig' {
  /**
   * The LogConfig class
   */
  export class LogConfig {
      printDate: boolean;
      printTime: boolean;
      printMilliTime: boolean;
      printName: boolean;
      printLevel: boolean;
      printTag: boolean;
      /**
       * Construct a LogConfig
       * @param {boolean} printDate
       * @param {boolean} printTime
       * @param {boolean} printMilliTime
       * @param {boolean} printName
       * @param {boolean} printLevel
       * @param {boolean} printTag
       */
      constructor(printDate?: boolean, printTime?: boolean, printMilliTime?: boolean, printName?: boolean, printLevel?: boolean, printTag?: boolean);
  }

}
declare module 'xlog-ts/Logger' {
  import { LogLevel } from 'xlog-ts/LogLevel';
  import { LogConfig } from 'xlog-ts/LogConfig';
  /**
   * The Logger class
   */
  export class Logger {
      private name;
      private tag;
      private config;
      private level;
      private static readonly consoles;
      private static readonly levels;
      /**
       * Construct a Logger
       * @param {string} name
       * @param {string} tag
       * @param {LogLevel} level
       * @param {LogConfig} config
       */
      constructor(name?: string, tag?: string, level?: LogLevel, config?: LogConfig);
      /**
       * Get log level
       * @return {LogLevel}
       */
      getLevel(): LogLevel;
      /**
       * Set log level
       * @param {LogLevel} level - the log level
       */
      setLevel(level: LogLevel): void;
      private static pad;
      private static getParsedDate;
      private static getParsedTime;
      private static log;
      /**
       * Log with message level
       * @param {any} arg
       * @param {...string} args
       */
      m(arg?: any, ...args: any[]): void;
      /**
       * Log with error level
       * @param {any} arg
       * @param {...string} args
       */
      e(arg?: any, ...args: any[]): void;
      /**
       * Log with warning level
       * @param {any} arg
       * @param {...string} args
       */
      w(arg?: any, ...args: any[]): void;
      /**
       * Log with info level
       * @param {any} arg
       * @param {...string} args
       */
      i(arg?: any, ...args: any[]): void;
      /**
       * Log with debug level
       * @param {any} arg
       * @param {...string} args
       */
      d(arg?: any, ...args: any[]): void;
      /**
       * Log with verbose level
       * @param {any} arg
       * @param {...string} args
       */
      v(arg?: any, ...args: any[]): void;
      /**
       * Log with message level and callstack
       * @param {any} arg
       * @param {...string} args
       */
      mS(arg?: any, ...args: any[]): void;
      /**
       * Log with error level and callstack
       * @param {any} arg
       * @param {...string} args
       */
      eS(arg?: any, ...args: any[]): void;
      /**
       * Log with warning level and callstack
       * @param {any} arg
       * @param {...string} args
       */
      wS(arg?: any, ...args: any[]): void;
      /**
       * Log with info level and callstack
       * @param {any} arg
       * @param {...string} args
       */
      iS(arg?: any, ...args: any[]): void;
      /**
       * Log with debug level and callstack
       * @param {any} arg
       * @param {...string} args
       */
      dS(arg?: any, ...args: any[]): void;
      /**
       * Log with verbose level and callstack
       * @param {any} arg
       * @param {...string} args
       */
      vS(arg?: any, ...args: any[]): void;
      /**
       * Log raw message (equivalent to console.log)
       * @param {any} arg
       * @param {...string} args
       */
      raw(arg?: any, ...args: any[]): void;
  }

}
declare module 'xlog-ts/LogLevel' {
  /**
   * Enum for logger levels
   * @enum {number}
   */
  export enum LogLevel {
      MESSAGE = 0,
      ERROR = 1,
      WARNING = 2,
      INFO = 3,
      DEBUG = 4,
      VERBOSE = 5
  }

}
declare module 'xlog-ts/LogManager' {
  import { LogLevel } from 'xlog-ts/LogLevel';
  import { LogConfig } from 'xlog-ts/LogConfig';
  import { Logger } from 'xlog-ts/Logger';
  /**
   * The LogManager class
   * Manage logger instances
   */
  export class LogManager {
      private name;
      private config;
      private level;
      private loggers;
      private static instance;
      /**
       * Construct a LogManager
       * @param {string} name
       * @param {LogLevel} level
       * @param {LogConfig} config
       */
      constructor(name?: string, level?: LogLevel, config?: LogConfig);
      /**
       * Get the singleton instance of a LogManager
       * @param {string} name
       * @param {LogLevel} level
       * @param {LogConfig} config
       * @param {boolean} override
       * @return {LogManager}
       */
      static getInstance(name?: string, level?: LogLevel, config?: LogConfig, override?: boolean): LogManager;
      /**
       * Return an instance of Logger
       * @param {string} tag
       * @param {LogLevel} level
       * @param {boolean} override
       * @return {Logger}
       */
      getLogger(tag: string, level?: LogLevel, override?: boolean): Logger;
      /**
       * Set log level
       * @param {LogLevel} level - the log level
       */
      setLevel(level: LogLevel): void;
      /**
       * Remove an instance of Logger
       * @param {string} tag
       */
      removeLogger(tag: string): void;
      /**
       * Remove all instances of Logger
       */
      removeLoggers(): void;
  }

}
declare module 'xlog-ts' {
  import main = require('xlog-ts/index');
  export = main;
}