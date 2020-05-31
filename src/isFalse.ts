/**
 * Checks if a value is false. Warning, this is an explicit check. See
 * isNilOrFalse to check for null | undefined | false.
 *
 * @export
 * @param {*} value
 * @returns {(obj is false)}
 */
export function isFalse(obj: any): obj is false {
    return obj === false;
}

export default isFalse;
