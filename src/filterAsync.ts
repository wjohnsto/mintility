import isArray from './isArray';

/**
 * The same thing as Array.prototype.filter, but assumes the iterator returns a promise.
 * Instead of returning an Promise[], this will evalutate all the promises and return the filtered list.
 * If any promise errors, this will throw an error.
 *
 * @template T
 * @param {(value: T, key: any, obj: any) => Promise<boolean>} iterator
 * @param {T[]} obj
 * @param {*} [context]
 * @returns {Promise<T[]>}
 */
export async function filterAsync<T>(
    iterator: (value: T, key: any, obj: any) => Promise<boolean>,
    obj: T[],
    context?: any,
): Promise<T[]> {
    // eslint-disable-next-line
    return new Promise<T[]>(async (resolve, reject) => {
        if (!isArray(obj)) {
            resolve([]);
        }

        const newObj: T[] = [];

        try {
            for (let i = 0; i < obj.length; i += 1) {
                // eslint-disable-next-line
                if ((await Promise.resolve(iterator(obj[i], i, obj))) === true) {
                    newObj.push(obj[i]);
                }
            }

            resolve(newObj);
        } catch (e) {
            reject(e);
        }
    });
}

export default filterAsync;
