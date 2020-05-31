import { secondsToMillis } from "./secondsToMillis";

/**
 * Converts minutes into milliseconds
 *
 * @export
 * @param {number} [minutes=1]
 * @returns {number}
 */
export function minutesToMillis(minutes = 1): number {
    return minutes * secondsToMillis(60);
}

export default minutesToMillis;
