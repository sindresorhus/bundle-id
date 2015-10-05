import test from 'ava';
import bundleId from './';

test(t => {
	t.plan(1);

	bundleId('Safari', (err, id) => {
		console.log('Bundle id:', id);
		t.is(id, 'com.apple.Safari');
	});
});
