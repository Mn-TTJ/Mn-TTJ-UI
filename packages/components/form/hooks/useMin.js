import { watch, computed, ref } from "vue";
export default function (props) {
    let input = computed(() => props.modelValue)
    let lessInput = ref(false)
    watch(input, () => {
        if (props.min) {
            if ((input.value + '').length < props.min)
                lessInput.value = true
            else lessInput.value = false
        }
        else lessInput.value = false
    })
    return lessInput
}