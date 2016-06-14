import test from 'ava';
import m from '.';

test(async t => {
	t.is(await m('Safari'), 'com.apple.Safari');
});
