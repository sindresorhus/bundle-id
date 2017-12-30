import test from 'ava';
import m from '.';

test('returns expected id - async', async t => {
	t.is(await m('Safari'), 'com.apple.Safari');
});

test('returns expected id - sync', t => {
	t.is(m.sync('Safari'), 'com.apple.Safari');
});
