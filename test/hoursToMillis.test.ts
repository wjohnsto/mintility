import hoursToMillis from '../src/hoursToMillis';

const hour = 1000 * 60 * 60;

test('hoursToMillis should default to 1 hour', () => {
    expect(hoursToMillis()).toBe(hour);
});

test('hoursToMillis should allow any number of hours', () => {
    const num = 10;
    expect(hoursToMillis(num)).toBe(hour * num);
});
