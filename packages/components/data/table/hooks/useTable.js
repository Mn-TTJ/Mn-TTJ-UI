import { computed, provide, reactive, useSlots } from "vue"
import { injectKey } from "../symbol"

export default function (props) {
    const o = reactive({
        'table': true,
        'table-border': computed(() => props.border)
    })

    const slot = useSlots()

    provide(injectKey, props)
    return { o, slot }
}