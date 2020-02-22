//core-modules: http
const http = require('http');
const port = 7800;

http.createServer((req, res)=>{
    res.write('This is server creation using HTTP core module');
    res.end();
}).listen(port);

//core-module: os
const os = require('os');
console.log(`The platform of the application is ${os.platform()}`);//windows 32
console.log(`The architecture of the application is ${os.arch()}`);//64bit
console.log(`The hostname of the system is ${os.hostname()}`);//rupkaraja

//core-module: util
 