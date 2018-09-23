import bigInt from 'big-integer'

const CHAR_BASE = 256

export const toBN = s => s.split('').reduce((acc, c) => acc.times(CHAR_BASE).add(c.charCodeAt(0)), bigInt(0))

export const fromBN = n => {
    const result = []
    while (!n.eq(0)) { // BAWWWW: Хачу unflodr
        const { quotient, remainder } = n.divmod(CHAR_BASE)
        result.unshift(String.fromCharCode(remainder.toJSNumber()))
        n = quotient
    }
    return result.join('')
}

const withBN = (s, f) => fromBN(f(toBN(s)))

export const makeKeys = (p, q, e) => {
    const d = e.modInv(p.minus(1).times(q.minus(1)))
    const m = p.times(q)

    return [{e, m}, {d, m}]
}

export const encrypt = (key: PublicKey, x: string): string => withBN(x, x => x.modPow(key.e, key.m))
export const decrypt = (key: PrivateKey, y: string): string => withBN(y, y => y.modPow(key.d, key.m))