import bigInt from 'big-integer'
import { toBN, fromBN, encrypt, decrypt, makeKeys } from './index'

const original = 'XY'
const [pubkey, key] = makeKeys(bigInt(9007), bigInt(102877), bigInt(104723))

const encrypted = encrypt(pubkey, original)
const decrypted = decrypt(key, encrypted)

console.log(pubkey)
console.log(key)
console.log(JSON.stringify(encrypted))
console.log(toBN(original))

test('fromBN(toBN(original)) === original', () => { expect(fromBN(toBN(original))).toBe(original) })
test('decrypt encrypted === original', () => { expect(decrypted).toBe(original) });
test('encrypted !== decrypted', () => { expect(decrypted).not.toBe(encrypted) });