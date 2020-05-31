import { minutesToMillis } from "./minutesToMillis";

/**
 * Converts hours into milliseconds
 *
 * @export
 * @param {number} [hours=1]
 * @returns {number}
 */
export function hoursToMillis(hours = 1): number {
    return hours * minutesToMillis(60);
}

export default hoursToMillis;
