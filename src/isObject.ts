/**
 * Checks if a value is an object
 *
 * @export
 * @param {*} value
 * @returns {(obj is Object)}
 */
export function isObject(value: any): value is Object {
    return value != null && typeof value === 'object';
}

export default isObject;
