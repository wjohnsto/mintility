/**
 * This file contains helper wrapper functions build around Ramda. Use of these helper functions is preferred over traditional
 * javascript assertions because it helps with TypeScript definitions and also helps avoid gotchas
 */
const enum TypeString {
    ARRAY = '[object Array]',
    DATE = '[object Date]',
    ERROR = '[object Error]',
    FILE = '[object File]',
    NUMBER = '[object Number]',
    PROMISE = '[object Promise]',
    REGEXP = '[object RegExp]',
    STRING = '[object String]',
}

const objToString = Object.prototype.toString;

export function isNil(obj: any): obj is null | undefined {
    return obj === null || obj === undefined;
}

export function isNull(obj: any): obj is null {
    return obj === null ;
}

export function isUndefined(obj: any): obj is undefined {
    return obj === undefined || typeof obj === 'undefined' ;
}

export function isNilOrFalse(obj: any): obj is null | undefined | false {
    return isNil(obj) || obj === false;
}

export function isTrue(obj: any): obj is true {
    return !isNilOrFalse(obj) && obj === true;
}

export function isObject(obj: any): obj is Object {
    return obj != null && typeof obj === 'object';
}

export function isError(obj: any): obj is Error {
    return objToString.call(obj) === TypeString.ERROR;
}

export function isNode(obj: any): obj is Node {
    return !!(obj && typeof obj.nodeType === 'number');
}

export function isRegExp(obj: any): obj is RegExp {
    return isObject(obj) && objToString.call(obj) === TypeString.REGEXP;
}

export function isDate(obj: any): obj is Date {
    return typeof obj === 'object' && objToString.call(obj) === TypeString.DATE;
}

export function isWindow(obj: any): obj is Window {
    return !!(obj && obj.document && obj.setInterval);
}

export function isDocument(obj: any): obj is Document {
    return !!(obj && obj.nodeType === Node.DOCUMENT_NODE);
}

export function isDocumentFragment(obj: any): obj is DocumentFragment {
    return !!(obj && (obj as Node).nodeType === Node.DOCUMENT_FRAGMENT_NODE);
}

export function isFile(obj: any): obj is File {
    return isObject(obj) && objToString.call(obj) === TypeString.FILE;
}

// eslint-disable-next-line
export function isFunction(obj: any): obj is Function {
    return typeof obj === 'function';
}

export function isArray(obj: any): obj is any[] {
    if (isFunction(Array.isArray)) {
        return Array.isArray(obj);
    }

    return objToString.call(obj) === TypeString.ARRAY;
}

export function isString(obj: any): obj is string {
    return (
        typeof obj === 'string' ||
        (isObject(obj) && objToString.call(obj) === TypeString.STRING)
    );
}

export function toNumber(value: any): number;
export function toNumber(...values: any[]): number[];
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

export function isFiniteNumber(obj: any): obj is number {
    // eslint-disable-next-line
    obj = toNumber(obj);

    return (
        (typeof obj === 'number' ||
            (isObject(obj) && objToString.call(obj) === TypeString.NUMBER)) &&
        Number.isFinite(obj)
    );
}

export function isPromise(obj: any): obj is Promise<any> {
    return (
        isObject(obj) &&
        (objToString.call(obj) === TypeString.PROMISE || isFunction(obj.then))
    );
}

export function isObjectNotEmpty(obj: any): obj is { [key: string]: any; } {
    return isObject(obj) && Object.keys(obj).length > 0;
}

export function isArrayLike(obj: any): obj is ArrayLike<any> {
    return (
        isArray(obj) ||
        isString(obj) ||
        (isObject(obj) && isFiniteNumber((obj as any).length))
    );
}

export function isArrayNotEmpty(obj: any): obj is ArrayLike<any> {
    return isArrayLike(obj) && obj.length > 0;
}

export function isNotEmpty(obj: any): ReturnType<typeof isObjectNotEmpty | typeof isArrayNotEmpty> {
    return (
        isArrayNotEmpty(obj) ||
        (!isArrayLike(obj) && isObject(obj) && isObjectNotEmpty(obj))
    );
}

export function isPrimitive(obj: any): obj is number | string | null {
    return obj === null || (typeof obj !== 'object' && typeof obj !== 'function');
}

export function isImmutable(obj: any): obj is RegExp | number {
    return obj instanceof RegExp || obj instanceof Number;
}

export function isMutable(obj: any): obj is Date {
    return obj instanceof Date;
}

export function isSymbol(obj: any): obj is symbol {
    return typeof obj === 'symbol';
}

export function isSamePropertyDescriptor(
    a?: PropertyDescriptor,
    b?: PropertyDescriptor,
) {
    return (
        a !== undefined &&
        b !== undefined &&
        Object.is(a.value, b.value) &&
        (a.writable || false) === (b.writable || false) &&
        (a.enumerable || false) === (b.enumerable || false) &&
        (a.configurable || false) === (b.configurable || false)
    );
}
