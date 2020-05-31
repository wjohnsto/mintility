/* eslint @typescript-eslint/ban-types: 0 */
import isArrayLike from './isArrayLike';
import isDate from './isDate';
import isFunction from './isFunction';
import isMap from './isMap';
import isObject from './isObject';
import isSet from './isSet';
import isWeakMap from './isWeakMap';
import isWeakSet from './isWeakSet';

/**
 * Checks if a value is a non-primitive type
 *
 * @export
 * @param {*} value
 * @returns {(value is Record<string, any> | Function | Date | ArrayLike<any> | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any>)}
 */
export function isNotPrimitive(
    value: any,
): value is
    | Record<string, any>
    | Function
    | Date
    | ArrayLike<any>
    | Map<any, any>
    | Set<any>
    | WeakMap<any, any>
    | WeakSet<any> {
    return (
        isObject(value) ||
        isFunction(value) ||
        isDate(value) ||
        isArrayLike(value) ||
        isMap(value) ||
        isSet(value) ||
        isWeakMap(value) ||
        isWeakSet(value)
    );
}

export default isNotPrimitive;
