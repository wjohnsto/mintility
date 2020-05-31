import isBigInt from './isBigInt';
import isBoolean from './isBoolean';
import isFiniteNumber from './isFiniteNumber';
import isNil from './isNil';
import isSymbol from './isSymbol';

/**
 * Checks if a value is a primitive type
 *
 * @export
 * @param {*} value
 * @returns {(value is string | boolean | number | bigint | symbol | null | undefined)}
 */
export function isPrimitive(
    value: any,
): value is string | boolean | number | bigint | symbol | null | undefined {
    return (
        isNil(value) ||
        isBoolean(value) ||
        isFiniteNumber(value) ||
        isBigInt(value) ||
        isSymbol(value)
    );
}

export default isPrimitive;
