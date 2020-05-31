/**
 * Checks if a value is null
 *
 * @export
 * @param {*} value
 * @returns {(obj is null)}
 */
export function isNull(value: any): value is null {
    return value === null ;
}

export default isNull;
