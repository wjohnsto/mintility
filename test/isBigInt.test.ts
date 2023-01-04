import isBigInt from '../src/isBigInt';

test('isBigInt should return true for BigInts', () => {
    expect(isBigInt(BigInt(1))).toBe(true);
});

test('isBigInt should return false for non-BigInts', () => {
    expect(isBigInt(1)).toBe(false);
    expect(isBigInt(Number.MIN_VALUE)).toBe(false);
    expect(isBigInt(Number.MIN_SAFE_INTEGER)).toBe(false);
    expect(isBigInt(Number.MAX_VALUE)).toBe(false);
    expect(isBigInt(Number.MAX_SAFE_INTEGER)).toBe(false);
});
