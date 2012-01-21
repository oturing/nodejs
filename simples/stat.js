#!/usr/bin/env node

var fs = require("fs");
var util = require("util");

fs.stat("stat.js", function(err, stats) {
	if (err) { throw err };
	console.log(util.inspect(stats));	
});
