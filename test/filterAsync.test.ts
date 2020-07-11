import filterAsync from '../src/filterAsync';

test('filterAsync should work with a non-array', async () => {
    expect(await filterAsync(async () => true, null as any)).toEqual([]);
});

test('filterAsync should filter values with promises', async () => {
    expect(await filterAsync(async (value) => value === 2, [1, 2, 3])).toEqual([2]);
});

test('filterAsync should return a new array', async () => {
    const input = [1, 2, 3];
    expect(await filterAsync(async () => true, input)).not.toBe(input);
});

test('filterAsync should pass array filter values', async () => {
    const input = [1, 2, 3];
    expect(await filterAsync(async (value, index, arr) => {
        expect(arr).toEqual(input);
        expect(typeof index).toBe('number');

        return true;
    }, input)).toEqual(input);
});

test('filterAsync should allow a this arg', async () => {
    const input = [1, 2, 3];
    await filterAsync(function (this: typeof input) {
        expect(this).toBe(input);

        return Promise.resolve(true);
    }, input, input);
});
