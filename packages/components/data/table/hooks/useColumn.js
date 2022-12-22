import { computed, inject, reactive } from "vue";
import { dataKey, injectKey, titleKey } from "../symbol";

export default function (props) {
    const data = inject(dataKey)
    const title = inject(titleKey)
    const injectProps = inject(injectKey)
    const o = reactive({
        'table-col': true,
        'table-col-border': computed(() => injectProps.border),
        'table-col-left': computed(() => injectProps.left),
        'table-col-right': computed(() => injectProps.right),
        'table-col-danger': computed(() => {
            if (title) return false
            if (data[props.prop].state) {
                if (data[props.prop].state == 1) return true
                else return false
            }
            if (data.state == 1) return true
            return false
        }),
        'table-col-success': computed(() => {
            if (title) return false
            if (data[props.prop].state) {
                if (data[props.prop].state == 2) return true
                else return false
            }
            if (data.state == 2) return true
            return false
        }),
        'table-col-witdh': computed(() => props.width ? true : false)
    })
    return { data, title, o }
}