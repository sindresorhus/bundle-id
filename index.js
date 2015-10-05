'use strict';
var runApplescript = require('run-applescript');

module.exports = function (bundleName) {
	var script = 'get id of application "' + bundleName + '"';

	return runApplescript(script);
};
