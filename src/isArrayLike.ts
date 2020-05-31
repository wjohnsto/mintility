import isObject from "./isObject";
import isArray from "./isArray";
import isString from "./isString";
import isFiniteNumber from "./isFiniteNumber";

/**
 * Checks if a value is Array-like
 *
 * @export
 * @param {*} value
 * @returns {(value is ArrayLike<any>)}
 */
export function isArrayLike(value: any): value is ArrayLike<any> {
    return (
        isArray(value) ||
        isString(value) ||
        (isObject(value) && isFiniteNumber((value as any).length))
    );
}

export default isArrayLike;
