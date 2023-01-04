import { computed, inject, provide, reactive, ref, useSlots } from "vue";
import { dataKey, hoverKey, injectKey, lastKey, stripeKey, titleKey } from "../symbol";

export default function (props) {
    const injectProps = inject(injectKey)

    const o = reactive({
        'table-expand': true,
        'table-expand-border': computed(() => injectProps.border && injectProps.expand)
    })

    const hoverFlag = ref(false)

    const isExpand = ref(false)

    const slot = useSlots()

    const expandEvent = () => isExpand.value = !isExpand.value

    const hoverEvent = () => hoverFlag.value = true

    const unHoverEvent = () => hoverFlag.value = false

    provide(dataKey, props.data)
    provide(titleKey, props.title)
    provide(lastKey, props.last)
    provide(stripeKey, props.stripe)
    provide(hoverKey, { hoverFlag, hoverEvent, unHoverEvent })

    return { o, slot, isExpand, expandEvent }
}