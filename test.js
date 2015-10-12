import test from 'ava';
import fn from '.';

test(async t => {
	t.is(await fn('Safari'), 'com.apple.Safari');
});
