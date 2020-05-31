export const enum TypeString {
    ARRAY = '[object Array]',
    BIGINT = '[object BigInt]',
    DATE = '[object Date]',
    ERROR = '[object Error]',
    FILE = '[object File]',
    FUNCTION = '[object Function]',
    MAP = '[object Map]',
    NUMBER = '[object Number]',
    PROMISE = '[object Promise]',
    REGEXP = '[object RegExp]',
    SET = '[object Set]',
    STRING = '[object String]',
    SYMBOL = '[object Symbol]',
    WEAKMAP = '[object WeakMap]',
    WEAKSET = '[object WeakSet]',
}

export const objString = Object.prototype.toString.call.bind(
    Object.prototype.toString,
);
