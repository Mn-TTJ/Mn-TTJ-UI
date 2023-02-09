export default {
    name: String,
    modelValue: {
        type: String,
        default: '00:00:00',
        validator(value) {
            if (!/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(value)) return false
            let arr = value.split(':').map((x) => parseInt(x))
            if (arr[0] < 0 || arr[0] > 23) return false
            if (arr[1] < 0 || arr[1] > 59) return false
            if (arr[2] < 0 || arr[2] > 59) return false
            return true
        }
    },
    min: {
        type: String,
        default: '00:00:00',
        validator(value) {
            if (!/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(value)) return false
            let arr = value.split(':').map((x) => parseInt(x))
            if (arr[0] < 0 || arr[0] > 23) return false
            if (arr[1] < 0 || arr[1] > 59) return false
            if (arr[2] < 0 || arr[2] > 59) return false
            return true
        }
    },
    max: {
        type: String,
        default: '23:59:59',
        validator(value) {
            if (!/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(value)) return false
            let arr = value.split(':').map((x) => parseInt(x))
            if (arr[0] < 0 || arr[0] > 23) return false
            if (arr[1] < 0 || arr[1] > 59) return false
            if (arr[2] < 0 || arr[2] > 59) return false
            return true
        }
    },
    disabled: Boolean,
    noForm: Boolean
}