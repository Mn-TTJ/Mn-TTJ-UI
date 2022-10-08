import { onMounted, onUnmounted } from "vue"
export default function (onPanel) {

    let isWindow = false

    const clickEvent = () => {
        if (!isWindow) onPanel.value = false
        isWindow = false
    }

    onMounted(() => {
        addEventListener('click', clickEvent)
    })

    onUnmounted(() => {
        removeEventListener('click', clickEvent)
    })

    return () => {
        isWindow = true
    }
}