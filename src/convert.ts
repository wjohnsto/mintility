/**
 * This file contains common converter function helpers
 */
import {
    isArray,
    isArrayLike,
    isDate,
    isError,
    isFile,
    isFunction,
    isNil,
    isNode,
    isNotEmpty,
    isObject,
    isRegExp,
} from './assert';

export function identity<T = any>(value?: T): T {
    return value as T;
}

/**
 * Similar to Array.prototype.forEach, but also works with Objects
 *
 * @export
 * @template T
 * @param {(value: T, index: number, obj: any) => void} iterator
 * @param {T[]} array
 * @param {*} [context]
 * @returns {T[]}
 */
export function forEach<T>(
    iterator: (value: T, index: number, obj: any) => void,
    array: T[],
    context?: any,
): T[];
export function forEach<T>(
    iterator: (value: T, key: string, obj: any) => void,
    obj: any,
    context?: any,
): any;
export function forEach<T>(
    iterator: (value: T, key: any, obj: any) => void,
    obj: any,
    context?: any,
): any {
    if (isNil(obj) || !(isObject(obj) || isArrayLike(obj))) {
        return obj;
    }

    let i: number;
    let key: string;
    let length: number;

    if (isFunction(obj.forEach)) {
        return obj.forEach(iterator, context);
    }
    if (isArrayLike(obj)) {
        length = obj.length;
        for (i = 0; i < length; i += 1) {
            iterator.call(context, obj[i], i, obj);
        }
    } else {
        const keys = Object.keys(obj);
        length = keys.length;
        while (keys.length > 0) {
            key = keys.shift() as string;
            iterator.call(context, obj[key], key, obj);
        }
    }

    return obj;
}

/**
 * Allows any arguments, does nothing
 *
 * @export
 * @param {...any[]} args
 */
export function noop(...args: any[]) {
    // do nothing
}

/**
 * Allows you to extend an object with another object(s)
 *
 * @export
 * @param {boolean} deep
 * @param {*} destination
 * @param {...any[]} sources
 * @returns {*}
 */
export function extend(
    deep: boolean,
    destination: any,
    ...sources: any[]
): any {
    if (isNil(destination)) {
        return destination;
    }

    let keys: string[];
    let property: any;
    const define = (obj: any, key: string, value: any) => {
        // eslint-disable-next-line
        obj[key] = value;
    };

    if (!isNotEmpty(sources)) {
        sources.push(destination);
    }

    forEach((source, k): void => {
        if (!isObject(source)) {
            return;
        }

        keys = Object.keys(source);

        forEach((key): void => {
            // eslint-disable-next-line
            property = source[key];
            if (deep) {
                if (isArray(property)) {
                    if (!isArray(destination[key])) {
                        // eslint-disable-next-line
                        destination[key] = [];
                    }
                    extend(deep, destination[key], property);

                    return;
                }
                if (isDate(property)) {
                    define(destination, key, new Date(property.getTime()));

                    return;
                }
                if (isRegExp(property)) {
                    define(destination, key, new RegExp(property));

                    return;
                }
                if (isNode(property)) {
                    define(destination, key, property.cloneNode(true));

                    return;
                }
                if (isFile(property)) {
                    define(destination, key, property);

                    return;
                }
                if (isObject(property)) {
                    if (!isObject(destination[key])) {
                        // eslint-disable-next-line
                        destination[key] = {};
                    }

                    extend(deep, destination[key], property);

                    Object.setPrototypeOf(
                        destination[key],
                        Object.getPrototypeOf(property),
                    );

                    return;
                }
            }
            define(destination, key, property);
        }, keys);
    }, sources);

    return destination;
}

/**
 * Creates a deep copy of an object. Be careful, this can be an expensive call and may not
 * work with circular objects
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function clone<T>(obj: T): T {
    if (isNil(obj) || !isObject(obj)) {
        return obj;
    }
    if (isDate(obj)) {
        return new Date(obj.getTime()) as any;
    }
    if (isRegExp(obj)) {
        return new RegExp(obj) as any;
    }
    if (isNode(obj)) {
        return (obj as Node).cloneNode(true) as any;
    }
    if (isFile(obj)) {
        return obj;
    }
    if (isError(obj)) {
        return new (obj as any).constructor((obj as Error).message);
    }

    let destination = {};

    if (isArray(obj)) {
        destination = [];
    }

    const result = extend(true, destination, obj);

    return result;
}

/**
 * Creates a shallow copy of an object
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function shallowClone<T>(obj: T): T {
    let destination = {};

    if (isArray(obj)) {
        destination = [];
    }

    return extend(false, destination, obj);
}

export function stripNilProperties(obj?: any): any {
    if (isNil(obj)) {
        return obj;
    }

    const ret: any = {};

    Object.keys(obj).forEach((key) => {
        if (isNil(obj[key])) {
            return;
        }

        ret[key] = obj[key];
    });

    return ret;
}
