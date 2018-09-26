Pony RSA
========

A toy RSA implementation.

Usage
-----

```js
import { encrypt, decrypt, makeKeys } from './index'

// BOB
const [pubkey, key] = makeKeys(bigInt(9007), bigInt(102877), bigInt(104723))

// ... Transfer pubkey to ALICE ...

// ALICE
const encrypted = encrypt(pubkey, 'Hello')

// BOB
decrypt(key, encrypted)
```

TODO
----

* proper keys generation
* chunking