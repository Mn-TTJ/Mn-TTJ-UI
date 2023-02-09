import { reactive, computed } from "vue"
export default function (props) {

    const o = reactive({
        'sm': computed(() => props.sm),
        'lg': computed(() => props.lg),
        'disabled': computed(() => props.disabled)
    })

    const filter = (input) => {
        return (val) => {
            if (props.disabled) {
                input.value.value = props.modelValue
                return props.modelValue
            }
            if (typeof val == 'number') {
                input.value.value = val
                return val
            }
            const str = val.replace(/[^0-9-]/g, '')
            let number = '0'
            if (str.length > 0) number = str[0] + str.substring(1).replace(/-/g, '')
            if (number.length == 1 && number[0] == '-') number = '0'
            const res = parseInt(number)
            input.value.value = isNaN(res) ? 0 : res
            return res
        }
    }

    const add = (val) => {
        return () => {
            val.value += props.skip
        }
    }

    const sub = (val) => {
        return () => {
            val.value -= props.skip
        }
    }

    return { o, filter, add, sub }
}