/*
* @Author: michellewkx
* @Date:   2017-01-09 20:04:57
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-18 00:54:59
*/

var http = require("http");
var url = require("url");
function start(route, handle) {
	    function onRequest(request, response) {
	        var path = url.parse(request.url).pathname;
	        var postData = '';
		    console.log("Request for " + path + " received");
		    request.setEncoding("utf8");

		    request.addListener("data", function(postDataChunk) {
		      postData += postDataChunk;
		      console.log("Received POST data chunk '"+
		      postDataChunk + "'.");
		    });

		    request.addListener("end", function() {
		      route(handle, path, response, postData);
		    });
		}
	  http.createServer(onRequest).listen(8888);
	  console.log("Server started.");
}
exports.start = start;

