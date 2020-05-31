import wait from "./wait";

/**
 * Similar to wait, but waits for a specific value to exist on the value of "this". Useful for loading
 * scripts dynamically that set properties on the global namespace. Can also be scoped to any value that
 * may have a property at a later point in time.
 *
 * @param {string} value
 * @returns {Promise<any>} When the value is found, it will be returned
 */
async function waitFor(this: any, value: string): Promise<any> {
    let win = this;

    while (!(win as any)[value]) {
        await wait(50);
    }

    return (win as any)[value];
}

export default waitFor;
