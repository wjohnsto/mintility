import isArray from './isArray';
import isFiniteNumber from './isFiniteNumber';
import isObject from './isObject';
import isString from './isString';

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
        (isObject(value) && isFiniteNumber(value.length))
    );
}

export default isArrayLike;
