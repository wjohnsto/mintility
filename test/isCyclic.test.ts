import isCyclic from '../src/isCyclic';

test('isCyclic should return true for Cyclic objects', () => {
    const a = {
        b: {
            c: 2 as any,
        },
    };
    a.b.c = a;

    expect(isCyclic(a)).toBe(true);
});

test('isCyclic should return false for non-Cyclic objects', () => {
    expect(isCyclic(undefined)).toBe(false);
    expect(isCyclic(null)).toBe(false);
    expect(isCyclic(0)).toBe(false);
    expect(isCyclic('')).toBe(false);
    expect(isCyclic({})).toBe(false);
    expect(isCyclic({
        b: {
            c: 2 as any,
        },
    })).toBe(false);
});
