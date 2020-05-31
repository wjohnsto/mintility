import { objString, TypeString } from './helpers';
import isObject from './isObject';

/**
 * Checks if a value is a Number. Note that NaN is considered a number, and this method does not
 * explicitly check for NaN. If you want to know if the value is a finite number or NaN, use
 * isFiniteNumber or isNaN
 *
 * @export
 * @param {*} value
 * @returns {(value is number)}
 */
export function isNumber(value: any): value is number {
    return (
        typeof value === 'number' ||
        (isObject(value) && objString(value) === TypeString.NUMBER)
    );
}

export default isNumber;
