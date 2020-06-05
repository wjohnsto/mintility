import { instanceOf } from './helpers';

const nativeBuffer = typeof Buffer !== 'undefined';

/**
 * Checks if a value is a Buffer
 *
 * @export
 * @param {*} value
 * @returns {(obj is Buffer)}
 */
export function isBuffer(value: any): value is Buffer {
    return nativeBuffer && instanceOf(value, Buffer);
}

export default isBuffer;
