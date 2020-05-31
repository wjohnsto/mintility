/**
 * Checks if a value is the window.document object
 *
 * @export
 * @param {*} value
 * @returns {(obj is Document)}
 */
export function isDocument(value: any): value is Document {
    return !!(value && value.nodeType === Node.DOCUMENT_NODE);
}

export default isDocument;
