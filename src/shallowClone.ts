import isArray from "./isArray";
import extend from "./extend";

/**
 * Creates a shallow copy of an object
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function shallowClone<T>(obj: T): T {
    let destination = {};

    if (isArray(obj)) {
        destination = [];
    }

    return extend(false, destination, obj);
}

export default shallowClone;
