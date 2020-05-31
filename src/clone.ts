import isNil from "./isNil";
import isObject from "./isObject";
import isDate from "./isDate";
import isRegExp from "./isRegExp";
import isNode from "./isNode";
import isFile from "./isFile";
import isError from "./isError";
import isArray from "./isArray";
import extend from "./extend";

/**
 * Creates a deep copy of an object. Be careful, this can be an expensive call and may not
 * work with circular objects
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function clone<T>(obj: T): T {
    if (isNil(obj) || !isObject(obj)) {
        return obj;
    }
    if (isDate(obj)) {
        return new Date(obj.getTime()) as any;
    }
    if (isRegExp(obj)) {
        return new RegExp(obj) as any;
    }
    if (isNode(obj)) {
        return (obj as Node).cloneNode(true) as any;
    }
    if (isFile(obj)) {
        return obj;
    }
    if (isError(obj)) {
        return new (obj as any).constructor((obj as Error).message);
    }

    let destination = {};

    if (isArray(obj)) {
        destination = [];
    }

    const result = extend(true, destination, obj);

    return result;
}

export default clone;
