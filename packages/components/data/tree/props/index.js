export const treeProps = {
    dataSet: {
        type: Array,
        default: []
    },
    accordion: Boolean,
    select: Boolean,
    preExpend: {
        type: Array,
        default: []
    },
    preSelect: {
        type: Array,
        default: []
    }
}

export const leafProps = {
    id: Symbol,
    leaf: {
        type: Object,
        default: {}
    },
    injections: {
        type: Object,
        default: {}
    },
    layer: Number,
    monitorIndex: Object
}