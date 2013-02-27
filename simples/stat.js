#!/usr/bin/env node

var fs = require("fs");
var util = require("util");

var mostrar = function mostrar(err, stats) {
	if (err) { throw err };
	console.log(util.inspect(stats));
}
fs.stat("stat.js", mostrar);
console.log('ultima linha do script');
