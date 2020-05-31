/**
 * Checks if a value is an object
 *
 * @export
 * @param {*} value
 * @returns {(obj is Record<string, any>)}
 */
export function isObject(value: any): value is Record<string, any> {
    return value != null && typeof value === 'object';
}

export default isObject;
