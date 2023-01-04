export const tableProps = {
    data: {
        type: Object,
        default: {}
    },
    border: Boolean,
    left: Boolean,
    right: Boolean,
    stripe: Boolean,
    height: String,
    expand: Boolean
}

export const rowProps = {
    data: {
        type: Object,
        default: {}
    },
    title: Boolean,
    stripe: Boolean,
    last: Boolean
}

export const columnProps = {
    prop: String,
    width: String,
    label: String,
}