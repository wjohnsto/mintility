import isArrayLike from './isArrayLike';
import isError from './isError';
import isObject from './isObject';

/**
 * Checks if a value is Error-like in that it has a message property
 *
 * @export
 * @param {*} value
 * @returns {(obj is Error | { message: any; })}
 */
export function isErrorLike(
    value: any,
): value is Error | { message: ArrayLike<any> } {
    return isError(value) || (isObject(value) && isArrayLike(value.message));
}

export default isErrorLike;
