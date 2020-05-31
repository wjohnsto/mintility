import { hoursToMillis } from './hoursToMillis';

/**
 * Converts days into milliseconds
 *
 * @export
 * @param {number} [days=1]
 * @returns {number}
 */
export function daysToMillis(days = 1): number {
    return days * hoursToMillis(24);
}

export default daysToMillis;
