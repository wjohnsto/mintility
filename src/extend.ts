import forEach from './forEach';
import isArray from './isArray';
import isArrayNotEmpty from './isArrayNotEmpty';
import isDate from './isDate';
import isFile from './isFile';
import isNil from './isNil';
import isNode from './isNode';
import isObject from './isObject';
import isRegExp from './isRegExp';

function safeExtend(
    deep: boolean,
    destination: any,
    sources: any[],
    marked: WeakMap<any, any> = new WeakMap(),
) {
    let keys: string[];
    let property: any;

    if (isObject(destination)) {
        marked.set(destination, undefined);
    }

    const define = (obj: any, key: string, value: any) => {
        // eslint-disable-next-line
        obj[key] = value;
    };

    forEach((source, k): void => {
        if (!isObject(source)) {
            return;
        }

        keys = Object.keys(source);

        forEach((key): void => {
            // eslint-disable-next-line
            property = source[key];
            if (deep) {
                if (isArray(property)) {
                    if (!isArray(destination[key])) {
                        // eslint-disable-next-line
                        destination[key] = [];
                    }

                    if (marked.has(property)) {
                        define(destination, key, property);
                    } else {
                        safeExtend(deep, destination[key], property, marked);
                    }

                    return;
                }
                if (isDate(property)) {
                    define(destination, key, new Date(property.getTime()));

                    return;
                }
                if (isRegExp(property)) {
                    define(destination, key, new RegExp(property));

                    return;
                }
                if (isNode(property)) {
                    define(destination, key, property.cloneNode(true));

                    return;
                }
                if (isFile(property)) {
                    define(destination, key, property);

                    return;
                }
                if (isObject(property)) {
                    if (!isObject(destination[key])) {
                        // eslint-disable-next-line
                        destination[key] = {};
                    }

                    if (marked.has(property)) {
                        define(destination, key, property);
                    } else {
                        safeExtend(deep, destination[key], [property], marked);
                    }

                    Object.setPrototypeOf(
                        destination[key],
                        Object.getPrototypeOf(property),
                    );

                    return;
                }
            }
            define(destination, key, property);
        }, keys);
    }, sources);
}

/**
 * Allows you to extend an object with another object(s)
 *
 * @export
 * @param {boolean} deep
 * @param {*} destination
 * @param {...any[]} sources
 * @returns {*}
 */
export function extend(
    deep: boolean,
    destination: any,
    ...sources: any[]
): any {
    if (isNil(destination)) {
        return destination;
    }

    if (!isArrayNotEmpty(sources)) {
        sources.push(destination);
    }

    safeExtend(deep, destination, sources);

    return destination;
}

export default extend;
