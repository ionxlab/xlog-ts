# XLog

XLog is a simple javascript log manager.

This version is written in typescript 

## Install
You can install by using npm repository.
```
npm install xlog-ts
```
You can also install by using npm and git repository url.
```
npm install git+https://github.com/ionxlab/xlog-ts.git
```

## Usage

You can just create a logger and use it.

You can get the LogManager instance, and get a logger.

You can pass a LogConfig for optional parameters and then log messages with easy methods.

```
import { LogConfig, LogLevel, LogManager, Logger } from 'xlog-ts';

const logConfig = new LogConfig();
logConfig.printDate = false;
  
const Logs = new LogManager("demo", logConfig, LogLevel.VERBOSE);
const Log = Logs.getLogger("fn1");
```

There are 6 levels of log, printed when current or a next level is selected :
- m: message
- e: error
- w: warning
- i: info
- d: debug
- v: verbose

```
// aliase of 'console.log'
Log.raw("Raw");
// aliases of 'console[level].apply' with a formated message header
Log.m("Message");
Log.e("Error");
Log.w("Warning");
Log.i("Info");
Log.d("Debug");
Log.v("Verbose");
```

Each level has also a method which also prints the call stack after the message:

```
Log.mS("Message with Stack:");
Log.eS("Error with Stack:");
Log.wS("Warning with Stack:");
Log.iS("Info with Stack:");
Log.dS("Debug with Stack:");
Log.vS("Verbose with Stack:");
```

See demos in [docs](./docs) for more.

### Disclaimer :
It's just a simple log manager...
