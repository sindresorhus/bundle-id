import test from 'ava';
import m from '.';

test('returns expected id', async t => {
	t.is(await m('Safari'), 'com.apple.Safari');
});

test('sync returns expected id', t => {
	t.is(m.sync('Safari'), 'com.apple.Safari');
});
