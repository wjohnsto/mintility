import isNil from './isNil';

/**
 * Removes any properties from an object that are null or undefined
 *
 * @export
 * @param {*} [obj]
 * @returns {*}
 */
export function stripNilProperties(obj?: any): any {
    if (isNil(obj)) {
        return obj;
    }
    const ret: any = {};
    Object.keys(obj).forEach((key) => {
        if (isNil(obj[key])) {
            return;
        }
        ret[key] = obj[key];
    });
    return ret;
}

export default stripNilProperties;
