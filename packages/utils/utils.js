export const isDOM =
    typeof HTMLElement === 'object'
        ? function (dom) {
            return dom instanceof HTMLElement;
        }
        : function (dom) {
            return dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string';
        };

export const isTarget = (target, value, attr = 'type') => {
    if (!isDOM(target)) return false
    if (target.getAttribute(attr) == value) return true
    return false
}

export const getChildIndex = (parent, child, value, attr = 'type') => {
    let index = 0
    for (let node of parent.childNodes) {
        if (child === node) return index
        else if (isTarget(node, value, attr)) index++
    }
    return -1
}