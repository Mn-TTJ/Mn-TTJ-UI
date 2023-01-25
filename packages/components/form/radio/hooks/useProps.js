export default function () {
    let props = {
        name: String,
        labels: Array,
        values: Array,
        group: {
            required: true,
            type: String
        },
        modelValue: String | Number,
        circular: Boolean,
        tick: Boolean,
        noBorder: Boolean,
        btn: Boolean,
        full: Boolean,
        custom: Boolean,
        ustyle: Object,
        disabled: Boolean
    }
    return props
}