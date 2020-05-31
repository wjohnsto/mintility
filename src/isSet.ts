import { objString, TypeString } from "./helpers";

/**
 * Checks if a value is a Set
 *
 * @export
 * @param {*} value
 * @returns {(obj is Set<any>)}
 */
export function isSet(value: any): value is Set<any> {
    return typeof value === 'object' && objString(value) == TypeString.SET;
}

export default isSet;
