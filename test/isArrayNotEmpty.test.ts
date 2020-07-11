import isArrayNotEmpty from '../src/isArrayNotEmpty';

test('isArrayNotEmpty should return true for arraylike objects with length > 0', () => {
    expect(isArrayNotEmpty([1])).toBe(true);
    expect(isArrayNotEmpty(new Array(3))).toBe(true);
    expect(isArrayNotEmpty(/123/.exec('123'))).toBe(true);
    expect(isArrayNotEmpty('abc')).toBe(true);
    expect(isArrayNotEmpty({ length: 2 })).toBe(true);
});

test('isArrayNotEmpty should return false for non-arraylike and arraylike object with length <= 0', () => {
    expect(isArrayNotEmpty(undefined)).toBe(false);
    expect(isArrayNotEmpty(null)).toBe(false);
    expect(isArrayNotEmpty(new Array())).toBe(false);
    expect(isArrayNotEmpty([])).toBe(false);
    expect(isArrayNotEmpty({ length: 0 })).toBe(false);
});
