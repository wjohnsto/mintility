import isNil from './isNil';
import isNumber from './isNumber';
import isRegExp from './isRegExp';
import isString from './isString';

/**
 * Checks if a value is an immutable type
 *
 * @export
 * @param {*} value
 * @returns {(value is RegExp | Number | String | null | undefined)}
 */
export function isImmutable(
    value: any,
): value is RegExp | number | string | null | undefined {
    return (
        isNil(value) || isNumber(value) || isString(value) || isRegExp(value)
    );
}

export default isImmutable;
