
import { LogConfig, LogLevel, LogManager, Logger } from 'xlog-ts';

const logConfig = new LogConfig();
logConfig.printDate = false;

const Logs = new LogManager("demo", logConfig, LogLevel.VERBOSE);
const Log = Logs.getLogger("fn1", LogLevel.WARNING, true); // predefined VERBOSE level overriden to WARNING

Log.raw("Raw");
Log.m("Message");
Log.e("Error");
Log.w("Warning");

Logs.setLevel(LogLevel.VERBOSE); // override every loggers level to VERBOSE

Log.i("Info");
Log.d("Debug");
Log.v("Verbose");
Log.iS("Info with Stack:");
