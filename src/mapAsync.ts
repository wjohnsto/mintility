import isArray from './isArray';

/**
 * The same thing as Array.prototype.map, but assumes the iterator returns a promise.
 * Instead of returning an Promise[], this will evalutate all the promises and return the values.
 * If any promise errors, this will throw an error.
 *
 * @template T
 * @template TResult
 * @param {((value: T, key: number, obj?: T[]) => TResult | Promise<TResult>)} iterator
 * @param {T[]} obj
 * @param {*} [context]
 * @returns {Promise<TResult[]>}
 */
export async function mapAsync<T, TResult>(
    iterator: (value: T, key: number, obj?: T[]) => TResult | Promise<TResult>,
    obj: T[],
    context?: any,
): Promise<TResult[]> {
    if (!isArray(obj)) {
        return Promise.resolve(obj);
    }

    return Promise.all<TResult>(obj.map(iterator));
}

export default mapAsync;
