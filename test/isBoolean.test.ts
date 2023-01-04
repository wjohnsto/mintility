import isBoolean from '../src/isBoolean';

test('isBoolean should return true for Booleans', () => {
    expect(isBoolean(Boolean(1))).toBe(true);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
});

test('isBoolean should return false for non-Booleans', () => {
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(1)).toBe(false);
});
