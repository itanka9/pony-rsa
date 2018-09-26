import { bnSplit, bnJoin } from './num'

const BYTE_SIZE = 256

export const toBn = str => bnJoin(BYTE_SIZE, str.split('').map(c => c.charCodeAt(0)))

export const fromBn = bn => bnSplit(BYTE_SIZE, bn).map(n => String.fromCharCode(n)).join('')