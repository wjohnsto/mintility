import { objString, TypeString } from './helpers';
import isFunction from './isFunction';
import isObject from './isObject';

/**
 * Checks if a value is a Promise, meaning it is either an instance of the built-in Promise class,
 * or it has a then method and a catch method.
 *
 * @export
 * @param {*} value
 * @returns {(value is Promise<any>)}
 */
export function isPromise(value: any): value is Promise<any> {
    return (
        isObject(value) &&
        (objString(value) === TypeString.PROMISE ||
            (isFunction(value.then) && isFunction(value.catch)))
    );
}

export default isPromise;
