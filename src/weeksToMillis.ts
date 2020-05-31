import { daysToMillis } from "./daysToMillis";

/**
 * Converts weeks into milliseconds
 *
 * @export
 * @param {number} [weeks=1]
 * @returns {number}
 */
export function weeksToMillis(weeks = 1): number {
    return weeks * daysToMillis(7);
}

export default weeksToMillis;
