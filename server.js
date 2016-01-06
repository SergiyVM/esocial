// var http = require("http");
// var url = require("url");
// var port = process.env.PORT || 1337;
//
// start();
//
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//
//     route(handle, pathname);
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
//
//   http.createServer(onRequest).listen(port);
//   console.log("Server has started.");
// }
//
// exports.start = start;

var http = require('http')
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
}).listen(port);
