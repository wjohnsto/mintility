/* eslint @typescript-eslint/ban-types: 0 */
import { objString, TypeString } from './helpers';

/**
 * Checks if a value is a Function
 *
 * @export
 * @param {*} value
 * @returns {(obj is Function)}
 */
export function isFunction(value: any): value is Function {
    return (
        typeof value === 'function' && objString(value) == TypeString.FUNCTION
    );
}

export default isFunction;
