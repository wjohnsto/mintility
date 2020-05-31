import { objString, TypeString } from "./helpers";

/**
 * Checks if a value is a Symbol
 *
 * @export
 * @param {*} value
 * @returns {(obj is symbol)}
 */
export function isSymbol(value: any): value is symbol {
    return typeof value === 'symbol' && objString(value) === TypeString.SYMBOL;
}

export default isSymbol;
