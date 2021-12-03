import {LogLevel} from './LogLevel'
import {LogConfig} from './LogConfig'

/**
 * The Logger class
 */
export class Logger {
  private name: string = null;
  private tag: string = null;
  private config: LogConfig = new LogConfig();
  private level: LogLevel = LogLevel.VERBOSE;
  private static readonly consoles: string[] = ["log","error","warn","info","debug","debug"];
  private static readonly levels: string[] = ['m','e','w','i','d','v'];

  /**
   * Construct a Logger
   * @param {string} name
   * @param {string} tag
   * @param {LogLevel} level
   * @param {LogConfig} config
   */
  constructor(name?: string, tag?: string, level?: LogLevel, config?: LogConfig) {
    if(name != null)
      this.name = name;
    if(tag != null)
      this.tag = tag;
    if(level != null)
      this.level = level;
    if(config != null)
      this.config = config;
  }

  /**
   * Get log level
   * @return {LogLevel}
   */
  getLevel(): LogLevel {
    return this.level;
  };

  /**
   * Set log level
   * @param {LogLevel} level - the log level
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  };

  // ==========================================================================
  // Helpers
  // ==========================================================================

  private static pad(n) {
    return (n!=null && n<10 ? "0"+n : n);
  }

  private static getParsedDate(date: Date, separator?: string) {
    const s = (separator? separator : "");
    return ""+date.getFullYear()+s+Logger.pad(date.getMonth()+1)+s+Logger.pad(date.getDate());
  }

  private static getParsedTime(date: Date, milliseconds?: boolean, separator?: string) {
    const s = (separator ? separator : "");
    return ""+Logger.pad(date.getHours())+s+Logger.pad(date.getMinutes())+s+Logger.pad(date.getSeconds())+(milliseconds ? s+date.getMilliseconds(): '');
  }

  private static log(level: LogLevel, levelMax: LogLevel, name: string, tag: string, config: LogConfig, args: string[], printStack?: boolean) {
    if(!Array.isArray(args))
      args = [args];

    // check if level of message is inferior or equal to the current log level
    if(level <= levelMax) {
      let argsOut = [];

      let dateTime = "";
      if(config.printDate)
        dateTime += Logger.getParsedDate(new Date());
      if(config.printTime)
        dateTime += Logger.getParsedTime(new Date(), config.printMilliTime);
      if(dateTime !== "")
        argsOut.push("["+dateTime+"]");
      if(config.printName && name)
        argsOut.push("("+name+")");
      if(config.printLevel)
        argsOut.push("<"+Logger.levels[level]+">");
      if(config.printTag && tag)
        argsOut.push("("+tag+")");

      argsOut = argsOut.concat(args);

      if(printStack) {
        const err = new Error();
        let s = err.stack;
        for(let i=0; i<3; i++) {
          s = s.substring(s.indexOf('\n')+1);
        }
        argsOut.push("\n"+s);
      }

      console[Logger.consoles[level]].apply(console, argsOut);
    }
  }

  // ==========================================================================
  // Methods
  // ==========================================================================

  /**
   * Log with message level
   * @param {...string} args
   */
  m(...args: any[]): void {
    Logger.log(LogLevel.MESSAGE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
  }
  /**
   * Log with error level
   * @param {...string} args
   */
  e(...args: any[]): void {
    Logger.log(LogLevel.ERROR, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
  }
  /**
   * Log with warning level
   * @param {...string} args
   */
  w(...args: any[]): void {
    Logger.log(LogLevel.WARNING, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
  }
  /**
   * Log with info level
   * @param {...string} args
   */
  i(...args: any[]): void {
    Logger.log(LogLevel.INFO, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
  }
  /**
   * Log with debug level
   * @param {...string} args
   */
  d(...args: any[]): void {
    Logger.log(LogLevel.DEBUG, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
  }
  /**
   * Log with verbose level
   * @param {...string} args
   */
  v(...args: any[]): void {
    Logger.log(LogLevel.VERBOSE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
  }

  /**
   * Log with message level and callstack
   * @param {...string} args
   */
  mS(...args: any[]): void {
    Logger.log(LogLevel.MESSAGE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
  }
  /**
   * Log with error level and callstack
   * @param {...string} args
   */
  eS(...args: any[]): void {
    Logger.log(LogLevel.ERROR, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
  }
  /**
   * Log with warning level and callstack
   * @param {...string} args
   */
  wS(...args: any[]): void {
    Logger.log(LogLevel.WARNING, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
  }
  /**
   * Log with info level and callstack
   * @param {...string} args
   */
  iS(...args: any[]): void {
    Logger.log(LogLevel.INFO, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
  }
  /**
   * Log with debug level and callstack
   * @param {...string} args
   */
  dS(...args: any[]): void {
    Logger.log(LogLevel.DEBUG, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
  }
  /**
   * Log with verbose level and callstack
   * @param {...string} args
   */
  vS(...args: any[]): void {
    Logger.log(LogLevel.VERBOSE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
  }
  /**
   * Log raw message (equivalent to console.log)
   * @param {...string} args
   */
  raw(...args: any[]): void {
    console.log.apply(console, Array.prototype.slice.call(arguments));
  }
}
