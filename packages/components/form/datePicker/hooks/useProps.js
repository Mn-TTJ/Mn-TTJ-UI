export default function () {
    let props = {
        name: String,
        modelValue: {
            type: String,
            default: '2022-1-1'
        },
        week: Boolean,
        disabled: Boolean,
        noForm: Boolean
    }
    return props
}