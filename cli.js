#!/usr/bin/env node
'use strict';
var bundleId = require('./index');
var input = process.argv[2];

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	return console.log('Usage\n  bundle-id <bundle name>\n\nExample\n  bundle-id Safari\n  => com.apple.Safari\n\nReturns the bundle identifier from a bundle name');
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	return console.log(require('./package').version);
}

bundleId(input, function (err, id) {
	if (err) {
		throw err;
	}

	console.log(id);
});
