import { computed, inject, reactive } from "vue";
import { dataKey, hoverKey, injectKey, lastKey, stripeKey, titleKey } from "../symbol";

export default function () {
    const data = inject(dataKey)
    const title = inject(titleKey)
    const last = inject(lastKey)
    const stripe = inject(stripeKey)
    const hover = inject(hoverKey)
    const injectProps = inject(injectKey)
    const o = reactive({
        'table-col': true,
        'table-col-border': computed(() => injectProps.border),
        'table-col-last-border': computed(() => last && injectProps.border),
        'table-col-stripe': computed(() => stripe),
        'table-col-hover': computed(() => !title && hover.hoverFlag.value),
        'table-col-left': computed(() => injectProps.left),
        'table-col-right': computed(() => injectProps.right),
    })
    return { data, title, o, hover }
}