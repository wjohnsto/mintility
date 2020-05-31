import { objString, TypeString } from "./helpers";

/**
 * Checks if a value is a WeakSet
 *
 * @export
 * @param {*} value
 * @returns {(obj is WeakSet<any>)}
 */
export function isWeakSet(value: any): value is WeakSet<any> {
    return typeof value === 'object' && objString(value) == TypeString.WEAKSET;
}

export default isWeakSet;
