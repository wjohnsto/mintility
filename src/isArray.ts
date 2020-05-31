import { objString, TypeString } from "./helpers";
import isFunction from "./isFunction";

/**
 * Checks if a value is an Array
 *
 * @export
 * @param {*} value
 * @returns {(obj is any[])}
 */
let isArray: (value: any) => value is any[];

if (isFunction(Array.isArray)) {
    isArray = Array.isArray;
} else {
    isArray = (value: any): value is any[] => {
        return objString(value) === TypeString.ARRAY;
    }
}

export default isArray;
