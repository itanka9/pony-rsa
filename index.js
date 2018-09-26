import bigInt from 'big-integer'
import { toBn, fromBn } from './enc'
import { bnMap, bnSize } from './num'

const withBn = (s, f) => fromBn(f(toBn(s)))

export const makeKeys = (p, q, e) => {
    const d = e.modInv(p.minus(1).times(q.minus(1)))
    const m = p.times(q)

    return [{e, m}, {d, m}]
}

export const encrypt = (pubkey, x) => withBn(
    x,
    n => bnMap(2 ** bnSize(pubkey.m), n, nc => nc.modPow(pubkey.e, pubkey.m))
)

export const decrypt = (key, y) => withBn(
    y,
    n => bnMap(2 ** bnSize(key.m), n, nc => nc.modPow(key.d, key.m))
)