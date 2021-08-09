import {runAppleScriptAsync, runAppleScriptSync} from 'run-applescript';

const getIdScript = bundleName => `get id of application "${bundleName}"`;

export async function bundleId(bundleName) {
	return runAppleScriptAsync(getIdScript(bundleName));
}

export function bundleIdSync(bundleName) {
	return runAppleScriptSync(getIdScript(bundleName));
}
