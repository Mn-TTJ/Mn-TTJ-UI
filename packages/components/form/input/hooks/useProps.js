export default function () {
    let props = {
        name: String,
        modelValue: String | Number,
        disabled: Boolean,
        parser: String | Number,
        max: {
            type: Number,
            default: null
        },
        min: {
            type: Number,
            default: null
        },
        clearable: Boolean,
        password: Boolean,
        ustyle: Object,
        pre: Boolean,
        behind: Boolean
    }
    return props
}