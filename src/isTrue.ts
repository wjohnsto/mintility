/**
 * Checks if a value is true
 *
 * @export
 * @param {*} value
 * @returns {(obj is true)}
 */
export function isTrue(obj: any): obj is true {
    return obj === true;
}

export default isTrue;
