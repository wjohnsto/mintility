import isArray from '../src/isArray';

test('isArray should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray(new Array())).toBe(true);
    expect(isArray(/123/.exec('123'))).toBe(true);
});

test('isArray should return false for non-arrays', () => {
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('abc')).toBe(false);
    expect(isArray({})).toBe(false);
});
