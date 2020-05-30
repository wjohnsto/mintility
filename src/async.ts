/**
 * This file provides helper methods for performing asynchronous functions such as
 * mapping over a list, mapping in order, or filtering asynchronously
 */

import { isArray } from './assert';

/**
 * The same thing as Array.prototype.map, but assumes the iterator returns a promise.
 * Instead of returning an Promise[], this will evalutate all the promises and return the values.
 * If any promise errors, this will throw an error.
 *
 * @template T
 * @template TResult
 * @param {((value: T, key: number, obj?: T[]) => TResult | Promise<TResult>)} iterator
 * @param {T[]} obj
 * @param {*} [context]
 * @returns {Promise<TResult[]>}
 */
export async function mapAsync<T, TResult>(
    iterator: (value: T, key: number, obj?: T[]) => TResult | Promise<TResult>,
    obj: T[],
    context?: any,
): Promise<TResult[]> {
    if (!isArray(obj)) {
        return Promise.resolve(obj);
    }

    return Promise.all<TResult>(
        obj.map(iterator),
    );
}

/**
 * Same as mapAsync, only this function waits for one iterator to finish before calling the next one. Use this
 * when you need to ensure that items in the array are evaluated in-order
 *
 * @template T
 * @template TResult
 * @param {((value: T, key: number, obj?: T[]) => TResult | Promise<TResult>)} iterator
 * @param {T[]} obj
 * @param {*} [context]
 * @returns {Promise<TResult[]>}
 */
export async function mapAsyncInOrder<T, TResult>(
    iterator: (value: T, key: number, obj?: T[]) => TResult | Promise<TResult>,
    obj: T[],
    context?: any,
): Promise<TResult[]> {
    const initialValue = Promise.resolve<TResult[]>([]);

    if (!isArray(obj)) {
        return initialValue;
    }

    // eslint-disable-next-line
    iterator = iterator.bind(context);

    return obj.reduce(
        async (prev: Promise<TResult[]>, next: T, index: number, arr: T[]) => {
            const items = await prev;
            const more = await Promise.resolve(iterator(next, index, arr));

            return items.concat(more);
        },
        initialValue,
    );
}

/**
 * The same thing as Array.prototype.filter, but assumes the iterator returns a promise.
 * Instead of returning an Promise[], this will evalutate all the promises and return the filtered list.
 * If any promise errors, this will throw an error.
 *
 * @template T
 * @param {(value: T, key: any, obj: any) => Promise<boolean>} iterator
 * @param {T[]} obj
 * @param {*} [context]
 * @returns {Promise<T[]>}
 */
export async function filterAsync<T>(
    iterator: (value: T, key: any, obj: any) => Promise<boolean>,
    obj: T[],
    context?: any,
): Promise<T[]> {
    // eslint-disable-next-line
    return new Promise<T[]>(async (resolve, reject) => {
        if (!isArray(obj)) {
            resolve([]);
        }

        const newObj: T[] = [];

        try {
            for (let i = 0; i < obj.length; i += 1) {
                // eslint-disable-next-line
                if ((await Promise.resolve(iterator(obj[i], i, obj))) === true) {
                    newObj.push(obj[i]);
                }
            }

            resolve(newObj);
        } catch (e) {
            reject(e);
        }
    });
}

/**
 * Waits for a set number of milliseconds before resolving a Promise
 *
 * @param {number} [ms=1000]
 * @returns {Promise<void>}
 */
export function wait(ms = 200) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/**
 * Similar to wait, but waits for a specific value to exist on the window. Useful for loading
 * scripts dynamically that set properties on the window.
 *
 * @param {string} windowValue
 * @returns {Promise<any>}
 */
async function waitFor(windowValue: string) {
    while (!(window as any)[windowValue]) {
        // eslint-disable-next-line
        await wait();
    }

    return (window as any)[windowValue];
}

const scripts: { [key: string]: boolean; } = {};

/**
 * Dynamically loads scripts
 *
 * @export
 * @param {string} src
 * @param {string} windowValue
 * @returns
 */
export async function loadScript(src: string, windowValue: string) {
    if (scripts[src]) {
        return waitFor(windowValue);
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.src = src;
    document.body.insertBefore(script, document.body.lastChild);
    scripts[src] = true;

    return waitFor(windowValue);
}
