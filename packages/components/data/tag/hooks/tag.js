import { computed, reactive } from "vue"

export default function (props, emits) {
    const o = reactive({
        'xl': computed(() => props.size === 'xl'),
        'sm': computed(() => props.size === 'sm'),
        'round': computed(() => props.round),
        'dark': computed(() => props.dark),
        'plain': computed(() => props.plain)
    })

    const closeEvent = (destroy) => {
        return () => {
            destroy.value = false
            emits('close')
        }
    }

    const selectEvent = (selected) => {
        return () => {
            selected.value = !selected.value
            emits('select', selected.value)
        }
    }

    return { o, closeEvent, selectEvent }
}