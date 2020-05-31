import { objString, TypeString } from "./helpers";

/**
 * Checks if a value is a WeakMap
 *
 * @export
 * @param {*} value
 * @returns {(obj is WeakMap<any, any>)}
 */
export function isWeakMap(value: any): value is WeakMap<any, any> {
    return typeof value === 'object' && objString(value) == TypeString.WEAKMAP;
}

export default isWeakMap;
