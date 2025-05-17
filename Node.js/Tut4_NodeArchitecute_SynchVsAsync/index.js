import os from "os";
import fs from "fs";
console.log("1");
fs.readFileSync("demo.txt","utf-8");
console.log("2");
//watch video again
//request--> event queue --> (event loop act) --> blocking/non-blocking
//non blocking (async) comes on execution immediately
//blocking -- thread pool
console.log(os.cpus().length);