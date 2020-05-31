import isObject from "./isObject";
import { objString, TypeString } from "./helpers";
import toNumber from "./toNumber";

/**
 * Checks if a value is a finite number
 *
 * @export
 * @param {*} value
 * @returns {(value is number)}
 */
export function isFiniteNumber(value: any): value is number {
    value = toNumber(value);

    return (
        (typeof value === 'number' ||
            (isObject(value) && objString(value) === TypeString.NUMBER)) &&
        Number.isFinite(value)
    );
}

export default isFiniteNumber;
