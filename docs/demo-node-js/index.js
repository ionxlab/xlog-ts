
const { LogConfig, LogLevel, LogManager, Logger } = require('xlog-ts');

const Logs = new LogManager("demo");
const Log = Logs.getLogger("fn1", LogLevel.VERBOSE, true);
Log.raw("Raw");
Log.m("Message");
Log.e("Error");
Log.w("Warning");
Log.i("Info");
Log.d("Debug");
Log.v("Verbose");
Log.iS("Info with Stack:");
