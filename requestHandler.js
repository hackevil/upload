/*
* @Author: michellewkx
* @Date:   2017-01-17 23:10:17
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-18 00:39:23
*/

'use strict';

function start(response) {
  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('Hello start');
  response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
