# bundle-id [![Build Status](https://travis-ci.org/sindresorhus/bundle-id.svg?branch=master)](https://travis-ci.org/sindresorhus/bundle-id)

> Get [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) from a [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) (OS X): `Safari` → `com.apple.Safari`


## Install

```sh
$ npm install --save bundle-id
```


## Usage

```js
var bundleId = require('bundle-id');

bundleId('Safari', function (err, id) {
	console.log(id);
	//=> com.apple.Safari
});
```


## CLI

```sh
$ npm install --global bundle-id
```

```sh
$ bundle-id --help

  Usage
    $ bundle-id <bundle-name>

  Example
    $ bundle-id Safari
    com.apple.Safari
```


## Related

See [bundle-name](https://github.com/sindresorhus/bundle-name) for the inverse.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
