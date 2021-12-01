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

  /**
   * Construct a LogManager
   * @param {string} name
   * @param {LogConfig} config
   * @param {LogLevel} level
   */
  constructor(name?: string, config?: LogConfig, level?: LogLevel) {
    if(name != null)
      this.name = name;
    if(config != null)
      this.config = config;
    if(level != null)
      this.level = level;
  }

  /**
   * Return an instance of Logger
   * @param {string} tag
   * @param {LogLevel} level
   * @param force
   * @return {Logger}
   */
  getLogger(tag: string, level?: LogLevel, force?: boolean): Logger {
    if(!this.loggers.has(tag) || force)
      this.loggers.set(tag, new Logger(this.name, tag, this.config, (level!==null ? level : this.level)));

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