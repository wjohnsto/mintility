import { objString, TypeString } from './helpers';

/**
 * Checks if a value is a BigInt
 *
 * @export
 * @param {*} value
 * @returns {(obj is bigint)}
 */
export function isBigInt(value: any): value is bigint {
    return typeof value === 'bigint' && objString(value) === TypeString.BIGINT;
}

export default isBigInt;
