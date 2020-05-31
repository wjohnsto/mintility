import isObject from "./isObject";
import { objString, TypeString } from "./helpers";

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
