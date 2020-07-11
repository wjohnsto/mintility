import forEach from '../src/forEach';

test('forEach should not fail with a null or undefined value', () => {
    const iterator = jest.fn(() => { });
    forEach(iterator, null as any);
    forEach(iterator, undefined as any);
    expect(true).toBe(true);
    expect(iterator).not.toBeCalled();
});

test('forEach should not fail with a non-array/object like value', () => {
    const iterator = jest.fn(() => { });
    forEach(iterator, 2);
    expect(true).toBe(true);
    expect(iterator).not.toBeCalled();
});

test('forEach should be called for every value in an array', () => {
    const iterator = jest.fn(() => { });
    const arr = [1, 2, 3];
    forEach(iterator, arr);
    expect(iterator).toBeCalledTimes(arr.length);
});

test('forEach should be called for every key in an object', () => {
    const iterator = jest.fn(() => { });
    const obj = { a: 1, b: 2, c: 3 };
    forEach(iterator, obj);
    expect(iterator).toBeCalledTimes(Object.keys(obj).length);
});

test('forEach should be called for every character in a string', () => {
    const iterator = jest.fn(() => { });
    const str = 'abc';
    forEach(iterator, str);
    expect(iterator).toBeCalledTimes(str.length);
});

test('forEach should use an object\'s foreach method if it exists', () => {
    const iterator = jest.fn(() => { });
    const ownForEach = jest.fn(() => { });
    const obj = { a: 1, b: 2, c: 3, forEach: ownForEach };
    forEach(iterator, obj);
    expect(iterator).not.toBeCalled();
    expect(ownForEach).toBeCalled();
});

test('forEach should allow a this arg', () => {
    const input = [1, 2, 3];
    forEach(function (this: typeof input) {
        expect(this).toBe(input);
    }, input, input);
});
