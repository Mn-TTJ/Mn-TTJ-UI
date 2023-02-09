import { computed, reactive, ref } from "vue"
export default function (props) {

    const o = reactive({
        'dialog-panel-only': computed(() => props.panelOnly),
        'dialog-shadow': computed(() => props.shadow)
    })

    const dialogFlag = ref(false)

    const setDialog = () => dialogFlag.value = !dialogFlag.value

    return { o, dialogFlag, setDialog }
}