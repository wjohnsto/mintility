/**
 * Checks if a value is null or undefined
 *
 * @export
 * @param {*} value
 * @returns {(obj is null | undefined)}
 */
export function isNil(value: any): value is null | undefined {
    return value === null || value === undefined;
}

export default isNil;
