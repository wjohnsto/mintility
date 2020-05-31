/**
 * Converts seconds into milliseconds
 *
 * @export
 * @param {number} [seconds=1]
 * @returns {number}
 */
export function secondsToMillis(seconds = 1): number {
    return seconds * 1000;
}

export default secondsToMillis;
