import test from 'ava';
import {bundleId, bundleIdSync} from './index.js';

test('returns expected id - async', async t => {
	t.is(await bundleId('Safari'), 'com.apple.Safari');
});

test('returns expected id - sync', t => {
	t.is(bundleIdSync('Safari'), 'com.apple.Safari');
});
