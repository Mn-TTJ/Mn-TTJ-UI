import { computed, inject, provide, reactive } from "vue";
import { dataKey, injectKey, titleKey } from "../symbol";

export default function (props) {
    provide(dataKey, props.data)
    provide(titleKey, props.title)
    const injectProps = inject(injectKey)
    console.log(injectProps)
    const o = reactive({
        'table-row': true,
        'table-stripe': computed(() => props.stripe && injectProps.stripe),
        'table-row-hover': computed(() => !props.title),
        'table-row-danger': computed(() => props.data.state == 0),
        'table-row-success': computed(() => props.data.state == 1)
    })
    return { o }
}