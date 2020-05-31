import waitFor from './waitFor';

const scripts: { [key: string]: boolean } = {};

/**
 * Dynamically loads scripts, and ensures a script hasn't already been loaded
 *
 * @export
 * @param {string} src
 * @param {string} windowValue
 * @returns
 */
export async function loadScript(src: string, windowValue: string) {
    if (scripts[src]) {
        return waitFor(windowValue);
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.src = src;
    document.body.insertBefore(script, document.body.lastChild);
    scripts[src] = true;

    return waitFor(windowValue);
}

export default loadScript;
