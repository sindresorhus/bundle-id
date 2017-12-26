'use strict';
const runApplescript = require('run-applescript');

const getId = bundleName => `get id of application "${bundleName}"`;

module.exports = bundleName => runApplescript(getId(bundleName));

module.exports.sync = bundleName => runApplescript.sync(getId(bundleName));
