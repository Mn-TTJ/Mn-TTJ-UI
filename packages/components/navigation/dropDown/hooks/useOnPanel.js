import { ref, onMounted } from 'vue'
export default function (props, shower, panel) {
    const isOnPanel = ref(false)
    let isHover = false
    let hasListen = false

    const clickEvent = () => {
        if (props.disabled) {
            isOnPanel.value = false
            return
        }
        isOnPanel.value = !isOnPanel.value
    }

    const enterEvent = () => {
        if (props.disabled) {
            isOnPanel.value = false
            isHover = false
            return
        }
        isHover = true
        isOnPanel.value = true
    }

    const leaveEvent = () => {
        if (props.disabled) {
            isOnPanel.value = false
            isHover = false
            return
        }
        isHover = false
        setTimeout(() => {
            if (!isHover) isOnPanel.value = false
        }, 200)
    }

    onMounted(() => {
        if (!hasListen) {
            if (props.click) {
                shower.value.addEventListener('click', clickEvent)
            } else {
                shower.value.addEventListener('mouseenter', enterEvent)
                shower.value.addEventListener('mouseleave', leaveEvent)
                panel.value.addEventListener('mouseenter', enterEvent)
                panel.value.addEventListener('mouseleave', leaveEvent)
            }
        }
        hasListen = true
    })

    return isOnPanel
}