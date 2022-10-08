import { onMounted, ref } from "vue"

export default function (props, isOnPanel, mValue) {
    const multipleDate = ref([])
    const multiplePath = ref([])
    const lazy = ref(false)
    onMounted(() => {
        if (!props.lazy) {
            multipleDate.value.push(props.dataSet)
            multiplePath.value.push(-1)
        }
    })
    const setMultipleValue = async (gIndex, index, node) => {
        if (lazy.value) {
            isOnPanel()
            return
        }
        if (node == null && gIndex != -1) return
        if (gIndex == -1 || index == -1) {
            return new Promise((resolve) => {
                lazy.value = true
                props.callBack(null, null, null).then(date => {
                    if (date && date.length != 0) multipleDate.value.push(date)
                    lazy.value = false
                    resolve()
                })
            })
        }
        if (node.hasChild) {
            isOnPanel()
            while (multipleDate.value.length > gIndex) multipleDate.value.pop()
            while (multiplePath.value.length >= gIndex) multiplePath.value.pop()
            multiplePath.value.push(index)
            if (!props.lazy)
                multipleDate.value.push(node.children)
            else {
                lazy.value = true
                const date = await props.callBack(node.value, gIndex, index)
                if (date && date.length != 0) multipleDate.value.push(date)
                lazy.value = false
            }
        } else {
            mValue.value = node.value
            multipleDate.value = multipleDate.value.slice(0, 1)
            multiplePath.value.unshift(-1)
            multiplePath.value = multiplePath.value.slice(0, 1)
        }
    }

    return {
        multipleDate, multiplePath, lazy, setMultipleValue
    }
}