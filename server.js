/*
* @Author: michellewkx
* @Date:   2017-01-09 20:04:57
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-17 15:34:30
*/

var http = require("http");
var url = require("url");
function start(route) {
	    function onRequest(request, response) {
	      var path = url.parse(request.url).pathname;
		  console.log("Request for " + path + " received");
		  route(path);
		  response.writeHead(200, {"Content-Type": "text/plain"});
		  response.write("Hello World");
		  response.end();
		}
	  http.createServer(onRequest).listen(8888);
	  console.log("Server started.");
}
exports.start = start;

