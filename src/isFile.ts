import { objString, TypeString } from './helpers';
import isObject from './isObject';

/**
 * Checks if a value is a File
 *
 * @export
 * @param {*} value
 * @returns {(obj is File)}
 */
export function isFile(value: any): value is File {
    return isObject(value) && objString(value) === TypeString.FILE;
}

export default isFile;
