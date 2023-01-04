import isBuffer from '../src/isBuffer';

test('isBuffer should return true for Buffers', () => {
    expect(isBuffer(Buffer.alloc(1))).toBe(true);
    expect(isBuffer(Buffer.from('abc'))).toBe(true);
});

test('isBuffer should return false for non-Buffers', () => {
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer('')).toBe(false);
});
