import daysToMillis from '../src/daysToMillis';

const day = 1000 * 60 * 60 * 24;

test('daysToMillis should default to 1 day', () => {
    expect(daysToMillis()).toBe(day);
});

test('daysToMillis should allow any number of days', () => {
    const num = 10;
    expect(daysToMillis(num)).toBe(day * num);
});
