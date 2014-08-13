'use strict';
var assert = require('assert');
var bundleId = require('./');

it('should get bundle id from bundle name', function (cb) {
	bundleId('Safari', function (err, id) {
		console.log('Bundle id:', id);
		assert.equal(id, 'com.apple.Safari');
		cb();
	});
});
