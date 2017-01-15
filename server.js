/*
* @Author: michellewkx
* @Date:   2017-01-09 20:04:57
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-15 16:24:34
*/
var http = require('http');
http.createServer(function (request,response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('Helll World');
	response.end();
}).listen('8888');
