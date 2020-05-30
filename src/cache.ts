/**
 * This file provides a simple implementation of a cache using SessionStorage or LocalStorage
 */
import { isDate, isFiniteNumber, isFunction, isNil, isString } from './assert';

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
  key: string | ((obj: any) => string);

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

  constructor(options: StorageCacheOptions) {
    this.options = options;
    this.storage = options.storage || window.sessionStorage;

    if (isFunction(options.key)) {
      this.getKey = options.key;
    } else {
      this.getKey = (key: string) => {
        return `${options.key as string}${key}`;
      };
    }

    if (!options.expiration) {
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
    return !isNil(this.get(key));
  }

  /**
   * Remove a key from the cache
   *
   * @param {string} key
   * @memberof StorageCache
   */
  public remove(key: string) {
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
    const cacheKey = this.getKey(key);
    const cacheItem = this.storage.getItem(cacheKey);

    if (!isString(cacheItem)) {
      return;
    }

    try {
      const { expires, value }: { expires: number; value: T } = JSON.parse(
        cacheItem,
      );

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
  public put(key: string, value: any, expires?: Date) {
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
