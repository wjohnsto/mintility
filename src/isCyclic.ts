import isObject from "./isObject";
import isArray from "./isArray";

/**
 * Determines if a value contains a circular reference. Useful for knowing if you
 * can stringify the object. NOTE: For large objects this can be an expensive call.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isCyclic(value: any): boolean {
    const marked = new WeakMap();

    function detectCycle(obj: any) {
        if (isObject(obj)) {
            if (marked.has(obj)) {
                return true;
            }

            marked.set(obj, undefined);

            for (const key in obj) {
                if (detectCycle(obj[key])) {
                    return true;
                }
            }
        } else if (isArray(obj)) {
            for (const i in obj) {
                if (detectCycle(obj[i])) {
                    return true;
                }
            }
        }

        return false;
    }

    return detectCycle(value);
}

export default isCyclic;
