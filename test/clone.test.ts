/**
 * This file stubs out the calls for the bids server component
 */

import clone from '../src/clone';

test('Clone should allow null', () => {
    const value = clone(null);

    expect(value).toBeNull();
});

test('Clone should allow undefined', () => {
    const value = clone(undefined);

    expect(value).toBeUndefined();
});

test('Clone should allow a string', () => {
    const value = clone('foo');

    expect(value).toEqual('foo');
});

test('Clone should allow a number', () => {
    const value = clone(4);

    expect(value).toEqual(4);
});

test('Clone should allow a RegExp', () => {
    const input = /test/g;
    const value = clone(input);

    expect(value instanceof RegExp).toBe(true);
    expect(value).toEqual(input);
    expect(value).not.toBe(input);
});

test('Clone should allow an Error', () => {
    const input = new Error('test');
    const value = clone(input);

    expect(value instanceof Error).toBe(true);
    expect(value.message).toEqual(input.message);
    expect(value).not.toBe(input);
});

test('Clone should allow a Date', () => {
    const input = new Date();
    const value = clone(input);

    expect(value instanceof Date).toBe(true);
    expect(value).toEqual(input);
    expect(value).not.toBe(input);
});

test('Clone should allow an empty Array', () => {
    const input: any[] = [];
    const value = clone(input);

    expect(Array.isArray(value)).toBe(true);
    expect(value.length).toBe(0);
    expect(value).toEqual(input);
    expect(value).not.toBe(input);
});

test('Clone should allow a circular reference', () => {
    const input = {
        foo: 2
    };

    (input as any).bar = input;
    const value = clone(input);

    expect(value.foo).toBe(2);
    expect((value as any).bar).toBe(value);
    expect(value).not.toBe(input);
});
