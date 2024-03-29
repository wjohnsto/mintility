import isNil from '../src/isNil';

test('isNil should be true for null', () => {
    expect(isNil(null)).toBe(true);
});

test('isNil should be true for undefined', () => {
    expect(isNil(undefined)).toBe(true);
});

test('isNil should be false for a number', () => {
    expect(isNil(-1)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil(1)).toBe(false);
});

test('isNil should be false for a string', () => {
    expect(isNil('')).toBe(false);
    expect(isNil('test')).toBe(false);
});

test('isNil should be false for an object', () => {
    expect(isNil({})).toBe(false);
    expect(isNil({ test: undefined })).toBe(false);
    expect(isNil({ test: null })).toBe(false);
});

test('isNil should be false for an array', () => {
    expect(isNil([])).toBe(false);
    expect(isNil([undefined])).toBe(false);
    expect(isNil([null])).toBe(false);
});

test('isNil should be false for a function', () => {
    expect(isNil(() => {})).toBe(false);
    expect(isNil(() => undefined)).toBe(false);
    expect(isNil(() => null)).toBe(false);
});
