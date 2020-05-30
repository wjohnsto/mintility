declare type HashMap<T = any> = {
    [key: string]: T;
};
export interface WatchListener<T> {
    (this: T, path: string, value: unknown, previousValue: unknown): void;
}
export interface WatchOptions {
    isShallow?: boolean;
    equals?: (a: unknown, b: unknown) => boolean;
    ignoreSymbols?: boolean;
    ignoreKeys?: (string | symbol)[];
    ignoreUnderscores?: boolean;
    pathAsArray?: boolean;
}
export declare function watch<T extends HashMap>(object: T, onChange: WatchListener<T>, options?: WatchOptions): any;
export declare namespace watch {
    var target: <T>(proxy: T) => any;
    var unsubscribe: <T>(proxy: T) => any;
}
export {};
