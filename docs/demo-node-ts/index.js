"use strict";
exports.__esModule = true;
var xlog_ts_1 = require("xlog-ts");
var logConfig = new xlog_ts_1.LogConfig();
logConfig.printDate = false;
var Logs = new xlog_ts_1.LogManager("demo", xlog_ts_1.LogLevel.VERBOSE, logConfig);
var Log = Logs.getLogger("fn1", xlog_ts_1.LogLevel.WARNING, true); // inherited VERBOSE level overriden to WARNING
Log.raw("Raw");
Log.m("Message");
Log.e("Error");
Log.w("Warning");
Logs.setLevel(xlog_ts_1.LogLevel.VERBOSE); // override every loggers level to VERBOSE
Log.i("Info");
Log.d("Debug");
Log.v("Verbose");
Log.iS("Info with Stack:");
