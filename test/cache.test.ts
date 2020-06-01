/**
 * This file stubs out the calls for the bids server component
 */

import StorageCache from '../src/cache';

test('StorageCache should accept a string key', () => {
    const cache = new StorageCache({
        key: 'options-cache'
    });

    expect(cache instanceof StorageCache).toBe(true);
});

test('StorageCache should accept a function key', () => {
    const cache = new StorageCache({
        key: (key) => 'options-cache'
    });

    expect(cache instanceof StorageCache).toBe(true);
});

describe('Cache methods', () => {
    let defaultExpiration = -1;
    let cache = new StorageCache({
        key: 'test-cache',
        expiration: defaultExpiration
    });

    beforeEach(() => {
        cache.delete('test')
    });

    test('StorageCache should allow setting items', () => {
        const value = { key: 2 };
        const cached = cache.set('test', value);

        expect(cache.exists('test')).toBe(true);
        expect(value).toStrictEqual(cached);
    });

    test('StorageCache should allow setting to null', () => {
        const cached = cache.set('test', null);

        expect(cache.exists('test')).toBe(true);
        expect(cached).toBeNull();
    });

    test('StorageCache should not allow setting to undefined', () => {
        const cached = cache.set('test', undefined);

        expect(cache.exists('test')).toBe(false);
        expect(cached).toBeUndefined();
    });

    test('StorageCache should allow setting with a number key', () => {
        const value = { key: 2 };
        cache.set(2 as any, value);

        expect(cache.exists(2 as any)).toBe(true);
        expect(cache.get(2 as any)).toStrictEqual(value);
    });

    test('StorageCache should not allow setting with a non-string or non-number key', () => {
        const value = { key: 2 };
        const cached = cache.set({} as any, value);

        expect(cache.exists({} as any)).toBe(false);
        expect(cache.get({} as any)).toBeUndefined();
        expect(cached).toBeUndefined();
    });

    test('StorageCache should allow getting items', () => {
        const value = { key: 2 };
        cache.set('test', value);

        expect(cache.get('test')).toStrictEqual(value);
    });

    test('StorageCache should only get with string keys', () => {
        const value = { key: 2 };
        cache.set('test', value);

        expect(cache.get('test')).toStrictEqual(value);
    });

    test('StorageCache should allow deleting items', () => {
        const value = { key: 2 };
        cache.set('test', value);
        cache.delete('test');

        expect(cache.exists('test')).toBe(false);
        expect(cache.get('test')).toBeUndefined();
    });

    test('StorageCache should expire items', (done) => {
        const value = { key: 2 };
        cache.set('test', value);

        setTimeout(() => {
            expect(cache.exists('test')).toBe(false);
            expect(cache.get('test')).toBeUndefined();
            done();
        }, defaultExpiration);
    });

    test('StorageCache should allow overriding expiration', (done) => {
        const value = { key: 2 };
        const timeout = defaultExpiration + 200;
        cache.set('test', value, new Date(Date.now() + timeout));

        setTimeout(() => {
            expect(cache.exists('test')).toBe(true);
            expect(cache.get('test')).toStrictEqual(value);

            setTimeout(() => {
                expect(cache.exists('test')).toBe(true);
                expect(cache.get('test')).toStrictEqual(value);
            }, timeout - defaultExpiration - 10);

            setTimeout(() => {
                expect(cache.exists('test')).toBe(false);
                expect(cache.get('test')).toBeUndefined();
                done();
            }, timeout - defaultExpiration);
        }, defaultExpiration);
    });
});
