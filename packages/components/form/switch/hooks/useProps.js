export default function () {
    let props = {
        name: String,
        disabled: Boolean,
        sm: Boolean,
        lg: Boolean,
        modelValue: Boolean,
        custom: Boolean,
        trackColor: {
            type: String,
            default: '#dcdfe6'
        },
        sliderColor: {
            type: String,
            default: 'white'
        },
        onColor: {
            type: String,
            default: '#409eff'
        },
    }
    return props
}