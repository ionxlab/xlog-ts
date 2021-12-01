declare module 'xlog-ts/index' {
  export * from 'xlog-ts/LogManager';
  export * from 'xlog-ts/Logger';
  export * from 'xlog-ts/LogConfig';
  export * from 'xlog-ts/LogLevel';

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
       * @param {LogConfig} config
       * @param {LogLevel} level
       */
      constructor(name?: string, tag?: string, config?: LogConfig, level?: LogLevel);
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
       * @param {...string} args
       */
      m(args: any): void;
      /**
       * Log with error level
       * @param {...string} args
       */
      e(args: any): void;
      /**
       * Log with warning level
       * @param {...string} args
       */
      w(args: any): void;
      /**
       * Log with info level
       * @param {...string} args
       */
      i(args: any): void;
      /**
       * Log with debug level
       * @param {...string} args
       */
      d(args: any): void;
      /**
       * Log with verbose level
       * @param {...string} args
       */
      v(args: any): void;
      /**
       * Log with message level and callstack
       * @param {...string} args
       */
      mS(args: any): void;
      /**
       * Log with error level and callstack
       * @param {...string} args
       */
      eS(args: any): void;
      /**
       * Log with warning level and callstack
       * @param {...string} args
       */
      wS(args: any): void;
      /**
       * Log with info level and callstack
       * @param {...string} args
       */
      iS(args: any): void;
      /**
       * Log with debug level and callstack
       * @param {...string} args
       */
      dS(args: any): void;
      /**
       * Log with verbose level and callstack
       * @param {...string} args
       */
      vS(args: any): void;
      /**
       * Log raw message (equivalent to console.log)
       * @param {...string} args
       */
      raw(args: any): void;
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
      /**
       * Construct a LogManager
       * @param {string} name
       * @param {LogConfig} config
       * @param {LogLevel} level
       */
      constructor(name?: string, config?: LogConfig, level?: LogLevel);
      /**
       * Return an instance of Logger
       * @param {string} tag
       * @param {LogLevel} level
       * @param force
       * @return {Logger}
       */
      getLogger(tag: string, level?: LogLevel, force?: boolean): Logger;
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