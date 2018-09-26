import bigInt from 'big-integer'

export const bnSplit = (chunkSize, n) => {
    const result = []
    while (!n.eq(0)) {
        const { quotient, remainder } = n.divmod(chunkSize)
        result.unshift(remainder)
        n = quotient
    }
    return result
}

export const bnJoin = (chunkSize, ns) => ns.reduce((result, n) => result.times(chunkSize).add(n), bigInt(0))

export const bnMap = (chunkSize, n, f) => bnJoin(chunkSize, bnSplit(chunkSize, n).map(f))

export const bnSize = n => n.toString(2).length