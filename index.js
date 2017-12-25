'use strict';
const runApplescript = require('run-applescript');

module.exports = bundleName => runApplescript(`get id of application "${bundleName}"`);

module.exports.sync = bundleName => runApplescript.sync(`get id of application "${bundleName}"`);
