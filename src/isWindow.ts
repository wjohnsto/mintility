/**
 * Checks if a value is the window object
 *
 * @export
 * @param {*} value
 * @returns {(obj is Window)}
 */
export function isWindow(value: any): value is Window {
    return !!(value && value.document && value.setInterval);
}

export default isWindow;
