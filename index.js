'use strict';
var runApplescript = require('run-applescript');

module.exports = function (bundleName, cb) {
	var script = 'get id of application "' + bundleName + '"';

	runApplescript(script, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(err, res);
	});
};
