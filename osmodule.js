const os=require("os");
console.log("platform : "+os.platform());
console.log("cpu architecture : "+os.arch());
console.log("No. of CPUs : "+os.cpus().length);
console.log("Free Memory : "+os.freemem());
console.log("Total Memory : "+os.totalmem());
console.log("user info : ",os.userInfo());
console.log("Network interfaces : ",os.networkInterfaces());