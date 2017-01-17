/*
* @Author: michellewkx
* @Date:   2017-01-09 20:04:57
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-18 00:41:10
*/

var http = require("http");
var url = require("url");
function start(route, handle) {
	    function onRequest(request, response) {
	      var path = url.parse(request.url).pathname;
		  console.log("Request for " + path + " received");
		  route(handle, path, response);
		}
	  http.createServer(onRequest).listen(8888);
	  console.log("Server started.");
}
exports.start = start;

