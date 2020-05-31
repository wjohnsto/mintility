import isUndefined from "./isUndefined";

/**
 * Converts undefined to null
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {T | null}
 */
export function undefinedToNull<T = any>(value: T): T | null {
    if (isUndefined(value)) {
        return null;
    }

    return value;
}

export default undefinedToNull;
