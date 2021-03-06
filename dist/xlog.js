(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("XLog", [], factory);
	else if(typeof exports === 'object')
		exports["XLog"] = factory();
	else
		root["XLog"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 352:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogConfig = void 0;
/**
 * The LogConfig class
 */
class LogConfig {
    /**
     * Construct a LogConfig
     * @param {boolean} printDate
     * @param {boolean} printTime
     * @param {boolean} printMilliTime
     * @param {boolean} printName
     * @param {boolean} printLevel
     * @param {boolean} printTag
     */
    constructor(printDate, printTime, printMilliTime, printName, printLevel, printTag) {
        this.printDate = true;
        this.printTime = true;
        this.printMilliTime = true;
        this.printName = true;
        this.printLevel = true;
        this.printTag = true;
        if (printDate != null)
            this.printDate = printDate;
        if (printTime != null)
            this.printTime = printTime;
        if (printMilliTime != null)
            this.printMilliTime = printMilliTime;
        if (printName != null)
            this.printName = printName;
        if (printLevel != null)
            this.printLevel = printLevel;
        if (printTag != null)
            this.printTag = printTag;
    }
}
exports.LogConfig = LogConfig;


/***/ }),

/***/ 647:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = void 0;
/**
 * Enum for logger levels
 * @enum {number}
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["MESSAGE"] = 0] = "MESSAGE";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 5] = "VERBOSE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogManager = void 0;
const LogLevel_1 = __webpack_require__(647);
const LogConfig_1 = __webpack_require__(352);
const Logger_1 = __webpack_require__(530);
/**
 * The LogManager class
 * Manage logger instances
 */
class LogManager {
    /**
     * Construct a LogManager
     * @param {string} name
     * @param {LogLevel} level
     * @param {LogConfig} config
     */
    constructor(name, level, config) {
        this.name = null;
        this.config = new LogConfig_1.LogConfig();
        this.level = LogLevel_1.LogLevel.VERBOSE;
        this.loggers = new Map();
        if (name != null)
            this.name = name;
        if (level != null)
            this.level = level;
        if (config != null)
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
    static getInstance(name, level, config, override) {
        if (LogManager.instance === null || override) {
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
    getLogger(tag, level, override) {
        if (!this.loggers.has(tag) || override)
            this.loggers.set(tag, new Logger_1.Logger(this.name, tag, (level !== null ? level : this.level), this.config));
        return this.loggers.get(tag);
    }
    ;
    /**
     * Set log level
     * @param {LogLevel} level - the log level
     */
    setLevel(level) {
        this.level = level;
        Object.keys(this.loggers).forEach((key) => {
            if (this.loggers[key])
                this.loggers[key].setLevel(level);
        });
    }
    ;
    /**
     * Remove an instance of Logger
     * @param {string} tag
     */
    removeLogger(tag) {
        this.loggers.delete(tag);
    }
    ;
    /**
     * Remove all instances of Logger
     */
    removeLoggers() {
        this.loggers.clear();
    }
    ;
}
exports.LogManager = LogManager;
LogManager.instance = null;


/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const LogLevel_1 = __webpack_require__(647);
const LogConfig_1 = __webpack_require__(352);
/**
 * The Logger class
 */
class Logger {
    /**
     * Construct a Logger
     * @param {string} name
     * @param {string} tag
     * @param {LogLevel} level
     * @param {LogConfig} config
     */
    constructor(name, tag, level, config) {
        this.name = null;
        this.tag = null;
        this.config = new LogConfig_1.LogConfig();
        this.level = LogLevel_1.LogLevel.VERBOSE;
        if (name != null)
            this.name = name;
        if (tag != null)
            this.tag = tag;
        if (level != null)
            this.level = level;
        if (config != null)
            this.config = config;
    }
    /**
     * Get log level
     * @return {LogLevel}
     */
    getLevel() {
        return this.level;
    }
    ;
    /**
     * Set log level
     * @param {LogLevel} level - the log level
     */
    setLevel(level) {
        this.level = level;
    }
    ;
    // ==========================================================================
    // Helpers
    // ==========================================================================
    static pad(n) {
        return (n != null && n < 10 ? "0" + n : n);
    }
    static getParsedDate(date, separator) {
        const s = (separator ? separator : "");
        return "" + date.getFullYear() + s + Logger.pad(date.getMonth() + 1) + s + Logger.pad(date.getDate());
    }
    static getParsedTime(date, milliseconds, separator) {
        const s = (separator ? separator : "");
        return "" + Logger.pad(date.getHours()) + s + Logger.pad(date.getMinutes()) + s + Logger.pad(date.getSeconds()) + (milliseconds ? s + date.getMilliseconds() : '');
    }
    static log(level, levelMax, name, tag, config, args, printStack) {
        if (!Array.isArray(args))
            args = [args];
        // check if level of message is inferior or equal to the current log level
        if (level <= levelMax) {
            let argsOut = [];
            let dateTime = "";
            if (config.printDate)
                dateTime += Logger.getParsedDate(new Date());
            if (config.printTime)
                dateTime += Logger.getParsedTime(new Date(), config.printMilliTime);
            if (dateTime !== "")
                argsOut.push("[" + dateTime + "]");
            if (config.printName && name)
                argsOut.push("(" + name + ")");
            if (config.printLevel)
                argsOut.push("<" + Logger.levels[level] + ">");
            if (config.printTag && tag)
                argsOut.push("(" + tag + ")");
            argsOut = argsOut.concat(args);
            if (printStack) {
                const err = new Error();
                let s = err.stack;
                for (let i = 0; i < 3; i++) {
                    s = s.substring(s.indexOf('\n') + 1);
                }
                argsOut.push("\n" + s);
            }
            console[Logger.consoles[level]].apply(console, argsOut);
        }
    }
    // ==========================================================================
    // Methods
    // ==========================================================================
    /**
     * Log with message level
     * @param {any} arg
     * @param {...string} args
     */
    m(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.MESSAGE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
    }
    /**
     * Log with error level
     * @param {any} arg
     * @param {...string} args
     */
    e(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.ERROR, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
    }
    /**
     * Log with warning level
     * @param {any} arg
     * @param {...string} args
     */
    w(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.WARNING, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
    }
    /**
     * Log with info level
     * @param {any} arg
     * @param {...string} args
     */
    i(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.INFO, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
    }
    /**
     * Log with debug level
     * @param {any} arg
     * @param {...string} args
     */
    d(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.DEBUG, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
    }
    /**
     * Log with verbose level
     * @param {any} arg
     * @param {...string} args
     */
    v(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.VERBOSE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments));
    }
    /**
     * Log with message level and callstack
     * @param {any} arg
     * @param {...string} args
     */
    mS(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.MESSAGE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
    }
    /**
     * Log with error level and callstack
     * @param {any} arg
     * @param {...string} args
     */
    eS(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.ERROR, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
    }
    /**
     * Log with warning level and callstack
     * @param {any} arg
     * @param {...string} args
     */
    wS(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.WARNING, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
    }
    /**
     * Log with info level and callstack
     * @param {any} arg
     * @param {...string} args
     */
    iS(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.INFO, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
    }
    /**
     * Log with debug level and callstack
     * @param {any} arg
     * @param {...string} args
     */
    dS(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.DEBUG, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
    }
    /**
     * Log with verbose level and callstack
     * @param {any} arg
     * @param {...string} args
     */
    vS(arg, ...args) {
        Logger.log(LogLevel_1.LogLevel.VERBOSE, this.level, this.name, this.tag, this.config, Array.prototype.slice.call(arguments), true);
    }
    /**
     * Log raw message (equivalent to console.log)
     * @param {any} arg
     * @param {...string} args
     */
    raw(arg, ...args) {
        console.log.apply(console, Array.prototype.slice.call(arguments));
    }
}
exports.Logger = Logger;
Logger.consoles = ["log", "error", "warn", "info", "debug", "debug"];
Logger.levels = ['m', 'e', 'w', 'i', 'd', 'v'];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = exports.LogConfig = exports.Logger = exports.LogManager = void 0;
var LogManager_1 = __webpack_require__(563);
Object.defineProperty(exports, "LogManager", ({ enumerable: true, get: function () { return LogManager_1.LogManager; } }));
var Logger_1 = __webpack_require__(530);
Object.defineProperty(exports, "Logger", ({ enumerable: true, get: function () { return Logger_1.Logger; } }));
var LogConfig_1 = __webpack_require__(352);
Object.defineProperty(exports, "LogConfig", ({ enumerable: true, get: function () { return LogConfig_1.LogConfig; } }));
var LogLevel_1 = __webpack_require__(647);
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return LogLevel_1.LogLevel; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=xlog.js.map