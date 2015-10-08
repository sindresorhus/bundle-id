'use strict';
const runApplescript = require('run-applescript');

module.exports = bundleName => runApplescript(`get id of application "${bundleName}"`);
