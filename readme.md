# bundle-id [![Build Status](https://travis-ci.org/sindresorhus/bundle-id.svg?branch=master)](https://travis-ci.org/sindresorhus/bundle-id)

> Get [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) from a [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) (macOS): `Safari` → `com.apple.Safari`


## Install

```
$ npm install --save bundle-id
```


## Usage

```js
const bundleId = require('bundle-id');

bundleId('Safari').then(id => {
	console.log(id);
	//=> 'com.apple.Safari'
});
```


## Related

- [bundle-id-cli](https://github.com/sindresorhus/bundle-id-cli) - CLI for this module
- [bundle-name](https://github.com/sindresorhus/bundle-name) - Get bundle name from a bundle identifier


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
