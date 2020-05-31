import { objString, TypeString } from './helpers';
import isObject from './isObject';

/**
 * Checks if a value is a string
 *
 * @export
 * @param {*} value
 * @returns {(value is string)}
 */
export function isString(value: any): value is string {
    return (
        typeof value === 'string' ||
        (isObject(value) && objString(value) === TypeString.STRING)
    );
}

export default isString;
