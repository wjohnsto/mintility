/**
 * Checks if a value is true or false
 *
 * @export
 * @param {*} value
 * @returns {(obj is true | false)}
 */
export function isBoolean(obj: any): obj is true | false {
    return obj === true || obj === false;
}


export default isBoolean;
