#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var bundleId = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    bundle-id <bundle-name>',
		'',
		'  Example',
		'    bundle-id Safari',
		'    com.apple.Safari'
	].join('\n'));
}

if (!input || argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

bundleId(input, function (err, id) {
	if (err) {
		throw err;
	}

	console.log(id);
});
