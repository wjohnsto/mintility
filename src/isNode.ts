/**
 * Checks if a value is a DOM Node
 *
 * @export
 * @param {*} value
 * @returns {(obj is Node)}
 */
export function isNode(value: any): value is Node {
    return !!(value && typeof value.nodeType === 'number');
}

export default isNode;
