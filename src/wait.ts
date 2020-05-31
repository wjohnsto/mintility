/**
 * Waits for a set number of milliseconds before resolving a Promise
 *
 * @param {number} [ms=1000]
 * @returns {Promise<void>}
 */
export function wait(ms = 200): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default wait;
