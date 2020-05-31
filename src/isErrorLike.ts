import isError from "./isError";
import isObject from "./isObject";
import isNil from "./isNil";

/**
 * Checks if a value is Error-like in that it has a message property
 *
 * @export
 * @param {*} value
 * @returns {(obj is Error | { message: any; })}
 */
export function isErrorLike(value: any): value is Error | { message: any; } {
    return isError(value) ||
        (isObject(value) && !isNil(value.message));
}

export default isErrorLike;
