import { objString, TypeString } from './helpers';
import isObject from './isObject';

/**
 * Checks if a value is a Date
 *
 * @export
 * @param {*} value
 * @returns {(obj is Date)}
 */
export function isDate(value: any): value is Date {
    return isObject(value) && objString(value) === TypeString.DATE;
}

export default isDate;
