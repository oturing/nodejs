#!/usr/bin/env node

var fs = require("fs");
var util = require("util");

var meta = fs.statSync("stat.js");

console.log(util.inspect(meta));
