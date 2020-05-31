import isNil from './isNil';

/**
 * Checks if a value is null, undefined, or false
 *
 * @export
 * @param {*} value
 * @returns {(obj is null | undefined | false)}
 */
export function isNilOrFalse(value: any): value is null | undefined | false {
    return isNil(value) || value === false;
}

export default isNilOrFalse;
