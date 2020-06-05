/**
 * This file stubs out the calls for the bids server component
 */

import isNil from '../src/isNil';

test.skip('isNil should be true for null', () => {
    expect(isNil(null)).toBe(true);
});

test.skip('isNil should be true for undefined', () => {
    expect(isNil(undefined)).toBe(true);
});

test.skip('isNil should be false for a number', () => {
    expect(isNil(-1)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil(1)).toBe(false);
});

test.skip('isNil should be false for a string', () => {
    expect(isNil('')).toBe(false);
    expect(isNil('test')).toBe(false);
});

test.skip('isNil should be false for an object', () => {
    expect(isNil({})).toBe(false);
    expect(isNil({ test: undefined })).toBe(false);
    expect(isNil({ test: null })).toBe(false);
});

test.skip('isNil should be false for an array', () => {
    expect(isNil([])).toBe(false);
    expect(isNil([undefined])).toBe(false);
    expect(isNil([null])).toBe(false);
});

test.skip('isNil should be false for a function', () => {
    expect(isNil(() => {})).toBe(false);
    expect(isNil(() => undefined)).toBe(false);
    expect(isNil(() => null)).toBe(false);
});
