export declare function identity<T = any>(value?: T): T;
export declare function forEach<T>(iterator: (value: T, index: number, obj: any) => void, array: T[], context?: any): T[];
export declare function forEach<T>(iterator: (value: T, key: string, obj: any) => void, obj: any, context?: any): any;
export declare function noop(...args: any[]): void;
export declare function extend(deep: boolean, destination: any, ...sources: any[]): any;
export declare function clone<T>(obj: T): T;
export declare function shallowClone<T>(obj: T): T;
