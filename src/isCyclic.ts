import isArray from './isArray';
import isObject from './isObject';

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
            if (
                obj.some((value) => {
                    return detectCycle(value);
                })
            ) {
                return true;
            }
        }

        return false;
    }

    return detectCycle(value);
}

export default isCyclic;
