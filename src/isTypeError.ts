import { instanceOf } from './helpers';

/**
 * Checks if a value is a TypeError
 *
 * @export
 * @param {*} value
 * @returns {(obj is TypeError)}
 */
export function isTypeError(value: any): value is TypeError {
    return instanceOf(value, TypeError);
}

export default isTypeError;
