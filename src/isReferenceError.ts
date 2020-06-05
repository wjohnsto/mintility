import { instanceOf } from './helpers';

/**
 * Checks if a value is a ReferenceError
 *
 * @export
 * @param {*} value
 * @returns {(obj is ReferenceError)}
 */
export function isReferenceError(value: any): value is ReferenceError {
    return instanceOf(value, ReferenceError);
}

export default isReferenceError;
