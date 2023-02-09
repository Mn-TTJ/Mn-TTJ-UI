export default {
    name: String,
    modelValue: {
        type: Array,
        default: ['00:00:00', '00:00:00']
    },
    max: {
        type: Array,
        default: ['23:59:59', '23:59:59']
    },
    min: {
        type: Array,
        default: ['00:00:00', '00:00:00']
    },
    disabled: Boolean,
}