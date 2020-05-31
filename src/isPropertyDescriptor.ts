import isObject from "./isObject";
import isFunction from "./isFunction";

/**
 * Checks if a value is a PropertyDescriptor
 *
 * @export
 * @param {PropertyDescriptor} [a]
 * @param {PropertyDescriptor} [b]
 * @returns {(a is typeof b)}
 */
export function isPropertyDescriptor(value: any): value is PropertyDescriptor {
    return isObject(value) && (
        isFunction(value.get) || isFunction(value.set)
    );
}

export default isPropertyDescriptor;
