import { isArrayLike } from './isArrayLike';

/**
 * Checks if a value is an object with at least one key. You might ask "Why no isEmpty?" This is
 * because we are taking advantage of TypeScript's "is," which ensures the existence of something.
 * TypeScript does not have a way to declare the absense of something.
 *
 * You might also ask "Why different functions for Arrays and Objects?" The reason for this is to
 * make sure you are explicitly getting what you ask for, and to aid in TypeScript type safety.
 *
 * @export
 * @template T
 * @param {T[]} [value]
 * @returns {value is [T, ...T[]]}
 */
export function isArrayNotEmpty<T = any>(value?: T[]): value is [T, ...T[]] {
    return isArrayLike(value) && value.length > 0;
}

export default isArrayNotEmpty;
