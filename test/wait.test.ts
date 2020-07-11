import identity from '../src/identity';

test('identity should return what you pass to it', () => {
    expect(identity()).toBeUndefined();
    expect(identity(undefined)).toBeUndefined();
    expect(identity(null)).toBeNull();
    expect(identity(2)).toBe(2);
});
