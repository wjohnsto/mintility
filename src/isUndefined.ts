/**
 * Checks if a value is undefined
 *
 * @export
 * @param {*} value
 * @returns {(obj is undefined)}
 */
export function isUndefined(value: any): value is undefined {
    return value === undefined;
}

export default isUndefined;
