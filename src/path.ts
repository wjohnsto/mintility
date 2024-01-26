import isNil from './isNil';

/**
 * Given a list of path properties and an object, returns the value at the given path
 * in that object
 *
 * @export
 * @param {((string | number)[])} list
 * @param {*} obj
 * @returns
 */
export function path(list: (string | number)[], obj: any) {
    let value: any = obj;
    let idx: number = 0;
    let p: string | number = 0;

    while (idx < list.length) {
        if (isNil(value)) {
            return;
        }

        p = list[idx];
        value = value[p];
        idx += 1;
    }

    return value;
}

export default path;
