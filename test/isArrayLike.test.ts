import isArrayLike from '../src/isArrayLike';

test('isArrayLike should return true for arraylike objects', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike(new Array())).toBe(true);
    expect(isArrayLike(/123/.exec('123'))).toBe(true);
    expect(isArrayLike('abc')).toBe(true);
    expect(isArrayLike({ length: 2 })).toBe(true);
});

test('isArrayLike should return false for non-arraylike', () => {
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike({ length: 'a' })).toBe(false);
});
