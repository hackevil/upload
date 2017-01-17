/*
* @Author: michellewkx
* @Date:   2017-01-15 17:01:44
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-17 23:24:23
*/

'use strict';
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandler');

var handle ={};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
