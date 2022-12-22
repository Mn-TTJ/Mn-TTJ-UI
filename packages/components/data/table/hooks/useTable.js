import { computed, provide, reactive } from "vue"
import { injectKey } from "../symbol"

export default function (props) {
    const o = reactive({
        'table': true,
        'table-border': computed(() => props.border)
    })
    provide(injectKey, props)
    return { o }
}