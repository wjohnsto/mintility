import isBrowser from '../src/isBrowser';

const root = this;

test('isBrowser should return false', () => {
    expect(isBrowser()).toBe(false);
    expect(isBrowser.call(root)).toBe(false);
});
