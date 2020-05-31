import { objString, TypeString } from './helpers';
import isObject from './isObject';

/**
 * Checks if a value is a RegExp
 *
 * @export
 * @param {*} value
 * @returns {(obj is RegExp)}
 */
export function isRegExp(value: any): value is RegExp {
    return isObject(value) && objString(value) === TypeString.REGEXP;
}

export default isRegExp;
