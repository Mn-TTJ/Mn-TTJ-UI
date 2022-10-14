export default function () {
    let props = {
        name: String,
        modelValue: String | Number,
        disabled: Boolean,
        parser: String | Number,
        clearable: Boolean,
        ustyle: Object,
        pre: Boolean,
        behind: Boolean,
        tips: Array,
        panel: Boolean,
        other: Boolean
    }
    return props
}