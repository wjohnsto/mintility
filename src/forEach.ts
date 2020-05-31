import isArrayLike from './isArrayLike';
import isFunction from './isFunction';
import isNil from './isNil';
import isObject from './isObject';

/**
 * Similar to Array.prototype.forEach
 *
 * @export
 * @template T
 * @param {(value: T, index: number, arr: T[]) => void} iterator
 * @param {T[]} array
 * @param {*} [context]
 * @returns {void}
 */
export function forEach<T = any[]>(
    iterator: (value: T, index: number, arr: T[]) => void,
    array: T[],
    context?: any,
): void;
/**
 * Similar to Array.prototype.forEach, except with Object keys instead of Array values
 *
 * @export
 * @template T
 * @param {(value: T[keyof T], index: keyof T, obj: T) => void} iterator
 * @param {T} object
 * @param {*} [context]
 * @returns {void}
 */
export function forEach<T = any>(
    iterator: (value: T[keyof T], key: keyof T, obj: T) => void,
    obj: T,
    context?: any,
): any;
export function forEach(
    iterator: (value: any, key: any, obj: any) => void,
    obj: any,
    context?: any,
): void {
    if (isNil(obj) || !(isObject(obj) || isArrayLike(obj))) {
        return;
    }

    let i: number;
    let key: string;
    let length: number;

    if (isFunction(obj.forEach)) {
        obj.forEach(iterator, context);

        return;
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
}

export default forEach;
