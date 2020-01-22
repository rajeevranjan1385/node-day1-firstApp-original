var http = require("http");

var server = http.createServer(function(req, res){
    res.write('<h1>Hey! This is hello from Rajeev</h1>');
    res.end();
})

server.listen(5600);