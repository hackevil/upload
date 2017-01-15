/*
* @Author: michellewkx
* @Date:   2017-01-09 20:04:57
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-15 17:11:07
*/

var http = require("http");
function start() {
	    function onRequest(requset, response) {
		  console.log("Request received.");
		  response.writeHead(200, {"Content-Type": "text/plain"});
		  response.write("Hello World");
		  response.end();
		}
	  http.createServer(onRequest).listen(8888);
	  console.log("Server started.");
}
exports.start = start;

