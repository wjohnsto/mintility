/**
 * Checks if a value is a DocumentFragment
 *
 * @export
 * @param {*} value
 * @returns {(obj is DocumentFragment)}
 */
export function isDocumentFragment(value: any): value is DocumentFragment {
    return !!(
        value && (value as Node).nodeType === Node.DOCUMENT_FRAGMENT_NODE
    );
}

export default isDocumentFragment;
