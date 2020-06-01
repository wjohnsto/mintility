/**
 * This file provides a simple implementation of a cache using SessionStorage or LocalStorage
 */

import isBrowser from './isBrowser';
import isDate from './isDate';
import isFiniteNumber from './isFiniteNumber';
import isFunction from './isFunction';
import isString from './isString';
import isNumber from './isNumber';
import isObject from './isObject';
import isUndefined from './isUndefined';

/**
 * The options for the StorageCache
 *
 * @export
 * @interface StorageCacheOptions
 */
export interface StorageCacheOptions {
    /**
     * The base key used to prepend to cache keys
     */
    key: string | ((key: string) => string);

    /**
     * What Storage to use, defaults to SessionStorage. You can use any object that fulfills the
     * Storage interface.
     */
    storage?: Storage;

    /**
     * A number of miliseconds to set as the default expiration of cache items. Defaults to 30 seconds.
     */
    expiration?: number;
}

let _storage: Storage;

function simpleStorage(): Storage {
    if (isObject(_storage)) {
        return _storage;
    }

    let values: { key: string; value: string; }[] = [];
    const storage: Storage = {
        get length(): number {
            return values.length;
        },

        clear(): void {
            values = values.filter((value) => {
                delete storage[value.key];
                return false;
            });
        },
        getItem(key: string): string | null {
            return storage[key];
        },
        key(index: number): string | null {
            return values[index].key || null;
        },
        removeItem(key: string): void {
            const index = values.findIndex((value) => {
                return value.key === key;
            });

            if (index < 0) {
                return;
            }
            const item = values.splice(index, 1)[0];
            delete storage[item.key];
        },
        setItem(key: string, value: string): void {
            if (!isString(key)) {
                key = String(key);
            }

            if (!isString(value)) {
                value = String(value);
            }

            this[key] = value;
            values.push({ key, value });
        },
    };

    _storage = storage;

    return _storage;
}

/**
 * A class that lets you create a cache using SessionStorage or LocalStorage. You specify
 * a root key off of which the key of every value you put in the cache will be based.
 *
 * @export
 * @class StorageCache
 */
export class StorageCache {
    protected storage: Storage;

    protected getKey: (obj: string) => string;

    private options: StorageCacheOptions;

    constructor (options: StorageCacheOptions) {
        this.options = options;

        if (isObject(options.storage)) {
            this.storage = options.storage;
        } else if (isBrowser()) {
            this.storage = window.sessionStorage;
        } else {
            this.storage = simpleStorage();
        }

        if (isFunction(options.key)) {
            this.getKey = options.key;
        } else if (!(isString(options.key) || isNumber(options.key))) {
            throw new Error('Cache must have a string or function key');
        } else {
            this.getKey = (key: string) => {
                return `${ options.key as string }${ key }`;
            };
        }

        if (!isNumber(options.expiration)) {
            // eslint-disable-next-line
            options.expiration = 1000 * 30;
        }
    }

    /**
     * Chack if a key is in the cache
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof StorageCache
     */
    public exists(key: string): boolean {
        return !isUndefined(this.get(key));
    }

    /**
     * Remove a key from the cache
     *
     * @param {string} key
     * @memberof StorageCache
     */
    public delete(key: string) {
        this.storage.removeItem(this.getKey(key));
    }

    /**
     * Get a value out of the cache
     *
     * @template T
     * @param {string} key
     * @param {((value?: T) => T | undefined)} [validator=this.validator]
     * @returns {(T | undefined)}
     * @memberof StorageCache
     */
    public get<T = any>(
        key: string,
        validator: (value?: T) => T | undefined = this.validator,
    ): T | undefined {
        if (!(isString(key) || isNumber(key))) {
            return;
        }

        const cacheKey = this.getKey(key);
        const cacheItem = this.storage.getItem(cacheKey);

        if (!isString(cacheItem)) {
            return;
        }

        try {
            const {
                expires,
                value,
            }: { expires: number; value: T; } = JSON.parse(cacheItem);

            if (!isFiniteNumber(expires)) {
                return;
            }

            if (expires > -1 && Date.now() > expires) {
                this.storage.removeItem(cacheKey);

                return;
            }

            return validator(value);
            // eslint-disable-next-line
        } catch (e) { }
    }

    /**
     * put a value in the cache
     *
     * @param {string} key
     * @param {*} value
     * @param {(Date)} [expires]
     * @returns
     * @memberof StorageCache
     */
    public set(key: string, value: any, expires?: Date) {
        if (isUndefined(value)) {
            return value;
        } else if (!(isString(key) || isNumber(key))) {
            return;
        }

        let timestamp = -1;
        const { expiration } = this.options;

        if (isDate(expires)) {
            timestamp = expires.getTime();
        } else if (isFiniteNumber(expiration) && expiration > -1) {
            timestamp = new Date().getTime() + expiration;
        }

        const prefix = this.getKey(key);

        this.storage.setItem(
            prefix,
            JSON.stringify({
                value,
                expires: timestamp,
            }),
        );

        return this.get(key);
    }

    protected validator<T>(value: T): T | undefined {
        return value;
    }
}

export default StorageCache;
