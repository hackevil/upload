/*
* @Author: michellewkx
* @Date:   2017-01-15 17:01:44
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-01-17 15:33:34
*/

'use strict';
var server = require('./server');
var router = require('./router');
server.start(router.route);
