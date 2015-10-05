import test from 'ava';
import fn from './';

test(async t => {
	const id = await fn('Safari');

	console.log('Bundle id:', id);
	t.is(id, 'com.apple.Safari');
});
