export default function () {
    let props = {
        name: String,
        modelValue: String | Number,
        disabled: Boolean,
        resizable: Boolean,
        parser: String | Number,
        max: {
            type: Number,
            default: null
        },
        min: {
            type: Number,
            default: null
        },
        minRow: {
            type: Number,
            default: null
        },
        maxRow: {
            type: Number,
            default: null
        },
        ustyle: Object,
    }
    return props
}