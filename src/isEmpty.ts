import { isArrayLike } from './isArrayLike';
import { isArrayNotEmpty } from './isArrayNotEmpty';
import { isMap } from './isMap';
import { isSet } from './isSet';
import { isObject } from './isObject';
import { isObjectNotEmpty } from './isObjectNotEmpty';

/**
 * Checks if a value is an object with at least one key.
 *
 * You might also ask "Why different functions for Arrays and Objects?" The reason for this is to
 * make sure you are explicitly getting what you ask for, and to aid in TypeScript type safety.
 *
 * @export
 * @param {any} value
 * @returns {boolean}
 */
export function isEmpty(value: any): boolean {
    return !(
        (isArrayLike(value) && isArrayNotEmpty(value)) ||
        (isMap(value) && value.size === 0) ||
        (isSet(value) && value.size === 0) ||
        (isObject(value) && isObjectNotEmpty(value))
    );
}

export default isEmpty;
