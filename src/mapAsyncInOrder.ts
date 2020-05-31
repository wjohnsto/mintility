import isArray from './isArray';

/**
 * Same as mapAsync, only this function waits for one iterator to finish before calling the next one. Use this
 * when you need to ensure that items in the array are evaluated in-order
 *
 * @template T
 * @template TResult
 * @param {((value: T, key: number, obj?: T[]) => TResult | Promise<TResult>)} iterator
 * @param {T[]} obj
 * @param {*} [context]
 * @returns {Promise<TResult[]>}
 */
export async function mapAsyncInOrder<T, TResult>(
    iterator: (value: T, key: number, obj?: T[]) => TResult | Promise<TResult>,
    obj: T[],
    context?: any,
): Promise<TResult[]> {
    const initialValue = Promise.resolve<TResult[]>([]);

    if (!isArray(obj)) {
        return initialValue;
    }

    // eslint-disable-next-line
    iterator = iterator.bind(context);

    return obj.reduce(
        async (prev: Promise<TResult[]>, next: T, index: number, arr: T[]) => {
            const items = await prev;
            const more = await Promise.resolve(iterator(next, index, arr));

            return items.concat(more);
        },
        initialValue,
    );
}

export default mapAsyncInOrder;
