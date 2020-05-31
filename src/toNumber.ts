import isArray from './isArray';
import isNil from './isNil';

/**
 * Attempts to convert a value to a number. In JavaScript Number(null) will give you 0, while Number(undefined) will
 * give you NaN. This function will prevent accidentally casting null to a number, and instead will ensure that
 * whatever value you pass in is safely converted to a number or undefined.
 *
 * @export
 * @param {*} value
 * @returns {number | undefined}
 */
export function toNumber(value: any): number | undefined;
/**
 * Attempts to convert values to numbers. In JavaScript Number(null) will give you 0, while Number(undefined) will
 * give you NaN. This function will prevent accidentally casting null to a number, and instead will ensure that
 * whatever values you pass in are safely converted to number or undefined.
 *
 * @export
 * @param {*} value
 * @returns {(number | undefined)[]}
 */
export function toNumber(...values: any[]): (number | undefined)[];
export function toNumber(...values: any[]): any {
    const len = values.length;
    const results: number[] = values.map((value: any) => {
        if (
            isNil(value) ||
            isArray(value) ||
            value === '' ||
            value === 'undefined' ||
            value === 'null'
        ) {
            return;
        }

        return Number(value);
    }) as number[];

    if (len === 0) {
        return undefined;
    }
    if (len === 1) {
        return results[0];
    }

    return results;
}

export default toNumber;
