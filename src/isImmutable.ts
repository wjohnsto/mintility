import isNil from "./isNil";
import isNumber from "./isNumber";
import isString from "./isString";
import isRegExp from "./isRegExp";

/**
 * Checks if a value is an immutable type
 *
 * @export
 * @param {*} value
 * @returns {(value is RegExp | Number | String | null | undefined)}
 */
export function isImmutable(value: any): value is RegExp | Number | String | null | undefined {
    return isNil(value) || isNumber(value) || isString(value) || isRegExp(value);
}

export default isImmutable;
