# bundle-id

> Get [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) from a [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) (macOS): `Safari` → `com.apple.Safari`

## Install

```
$ npm install bundle-id
```

## Usage

```js
import {bundleId} from 'bundle-id';

console.log(await bundleId('Safari'));
//=> 'com.apple.Safari'
```

## API

### bundleId()

Returns a `Promise<string>` with the bundle ID.

### bundleIdSync()

Returns a `string` with the bundle ID.

## Related

- [bundle-id-cli](https://github.com/sindresorhus/bundle-id-cli) - CLI for this module
- [bundle-name](https://github.com/sindresorhus/bundle-name) - Get bundle name from a bundle identifier
