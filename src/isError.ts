import { objString, TypeString } from './helpers';

/**
 * Checks if a value is an Error
 *
 * @export
 * @param {*} value
 * @returns {(obj is Error)}
 */
export function isError(value: any): value is Error {
    return objString(value) === TypeString.ERROR;
}

export default isError;
