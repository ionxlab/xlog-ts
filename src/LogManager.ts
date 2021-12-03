import { LogLevel } from './LogLevel'
import { LogConfig } from './LogConfig'
import { Logger } from './Logger'

/**
 * The LogManager class
 * Manage logger instances
 */
export class LogManager {
  private name: string = null;
  private config: LogConfig = new LogConfig();
  private level: LogLevel = LogLevel.VERBOSE;
  private loggers: Map<string, Logger> = new Map<string, Logger>();
  private static instance: LogManager = null;

  /**
   * Construct a LogManager
   * @param {string} name
   * @param {LogLevel} level
   * @param {LogConfig} config
   */
  constructor(name?: string, level?: LogLevel, config?: LogConfig) {
    if(name != null)
      this.name = name;
    if(level != null)
      this.level = level;
    if(config != null)
      this.config = config;
  }

  /**
   * Get the singleton instance of a LogManager
   * @param {string} name
   * @param {LogLevel} level
   * @param {LogConfig} config
   * @param {boolean} override
   * @return {LogManager}
   */
  static getInstance(name?: string, level?: LogLevel, config?: LogConfig, override?: boolean): LogManager {
    if(LogManager.instance===null || override) {
      LogManager.instance = new LogManager(name, level, config);
    }
    return LogManager.instance;
  }

  /**
   * Return an instance of Logger
   * @param {string} tag
   * @param {LogLevel} level
   * @param {boolean} override
   * @return {Logger}
   */
  getLogger(tag: string, level?: LogLevel, override?: boolean): Logger {
    if(!this.loggers.has(tag) || override)
      this.loggers.set(tag, new Logger(this.name, tag, (level!==null ? level : this.level), this.config));

    return this.loggers.get(tag);
  };

  /**
   * Set log level
   * @param {LogLevel} level - the log level
   */
  setLevel(level: LogLevel): void {
    this.level = level;
    Object.keys(this.loggers).forEach((key) => {
      if(this.loggers[key])
        this.loggers[key].setLevel(level);
    });
  };

  /**
   * Remove an instance of Logger
   * @param {string} tag
   */
  removeLogger(tag: string): void {
    this.loggers.delete(tag);
  };

  /**
   * Remove all instances of Logger
   */
  removeLoggers(): void {
    this.loggers.clear();
  };
}