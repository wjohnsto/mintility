/**
 * Checks if the current environment is the browser
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isBrowser(this: any): boolean {
    try {
        return this === window;
    } catch (e) {
        return false;
    }
}

export default isBrowser;
