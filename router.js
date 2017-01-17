/*
* @Author: michellewkx
* @Date:   2017-01-17 15:27:11
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-18 00:52:27
*/

'use strict';
function route(handle, pathname, response, postData) {
	console.log('About to route a request for ' + pathname);
	if (typeof handle[pathname] === 'function')  {
		handle[pathname](response, postData);
	}
	else {
		console.log("No request handler found for" + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;
