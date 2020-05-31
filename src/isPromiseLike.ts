import isObject from "./isObject";
import isFunction from "./isFunction";
import isPromise from "./isPromise";

/**
 * Checks if a value is PromiseLike, meaning it has a then method
 *
 * @export
 * @param {*} value
 * @returns {(value is PromiseLike<any>)}
 */
export function isPromiseLike(value: any): value is PromiseLike<any> {
    return (
        isObject(value) &&
        (isPromise(value) || isFunction(value.then))
    );
}

export default isPromiseLike;
