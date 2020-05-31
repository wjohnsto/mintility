import { objString, TypeString } from './helpers';
import isFunction from './isFunction';

let isA: (value: any) => value is any[];

if (isFunction(Array.isArray)) {
    isA = Array.isArray;
} else {
    isA = (value: any): value is any[] => {
        return objString(value) === TypeString.ARRAY;
    };
}

/**
 * Checks if a value is an Array
 *
 * @export
 * @param {*} value
 * @returns {(obj is any[])}
 */
export const isArray = isA;
export default isArray;
