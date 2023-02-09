import { reactive, computed, ref } from "vue"
export default function (props) {
    const o = reactive({
        'flod-left': computed(() => props.left),
        'flod-shadow-none': computed(() => props.shadow == 'none'),
        'flod-shadow-hover': computed(() => props.shadow == 'hover')
    })

    const flodFlag = ref(props.unActive)

    const setFlod = () => flodFlag.value = !flodFlag.value
    return { o, flodFlag, setFlod }
}