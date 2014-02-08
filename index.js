'use strict';
var execFile = require('child_process').execFile;

module.exports = function (bundleName, cb) {
	var script = 'get id of application "' + bundleName + '"';

	execFile('osascript', ['-e', script], function (err, stdout) {
		if (err) {
			return cb(err);
		}

		cb(err, stdout.trim());
	});
};
