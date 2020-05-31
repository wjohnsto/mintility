import { objString, TypeString } from "./helpers";

/**
 * Checks if a value is a Map
 *
 * @export
 * @param {*} value
 * @returns {(obj is Map<any, any>)}
 */
export function isMap(value: any): value is Map<any, any> {
    return typeof value === 'object' && objString(value) == TypeString.MAP;
}

export default isMap;
