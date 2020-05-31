import isObject from "./isObject";
import { objString, TypeString } from "./helpers";

/**
 * Checks if a value is not a finite number
 *
 * @export
 * @param {*} value
 * @returns {(value is number)}
 */
export function isNaN(value: any): value is number {
    return (
        (typeof value === 'number' ||
            (isObject(value) && objString(value) === TypeString.NUMBER)) &&
        Number.isNaN(value)
    );
}

export default isNaN;
