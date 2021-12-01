if(!XLog)
  console.log("XLog is undefined!");

var Logs = new XLog.LogManager("browser-app");
var Log = Logs.getLogger("main", XLog.LogLevel.VERBOSE);
Log.raw("Raw");
Log.m("Message");
Log.e("Error");
Log.w("Warning");
Log.i("Info");
Log.d("Debug");
Log.v("Verbose");
Log.iS("Info with Stack:");