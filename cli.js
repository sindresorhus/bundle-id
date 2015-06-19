#!/usr/bin/env node
'use strict';
var meow = require('meow');
var bundleId = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ bundle-id <bundle-name>',
		'',
		'Example',
		'  $ bundle-id Safari',
		'  com.apple.Safari'
	]
});

if (cli.input.length === 0) {
	console.error('Expected a bundle name');
	process.exit(1);
}

bundleId(cli.input[0], function (err, id) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(id);
});
