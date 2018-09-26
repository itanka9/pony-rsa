import bigInt from 'big-integer'
import { toBn, fromBn } from './enc'
import { encrypt, decrypt, makeKeys } from './index'
import { bnSize } from './num';

const message = 'Franky goes to Hollywood!'

const [pubkey, key] = makeKeys(bigInt(9007), bigInt(102877), bigInt(104723))

const encrypted = encrypt(pubkey, message)
const decrypted = decrypt(key, encrypted)

test('fromBn(toBn(original)) === message', () => {
    expect(fromBn(toBn(message))).toBe(message)
})

test('decrypt encrypted === message', () => {
    expect(decrypted).toBe(message)
})

test('encrypted !== decrypted', () => {
    expect(decrypted).not.toBe(encrypted)
})