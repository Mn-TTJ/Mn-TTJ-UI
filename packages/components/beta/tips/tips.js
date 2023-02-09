import { ref } from "vue"
export default function () {

    const tipsColor = ref('#303133')

    const tipsWidth = ref('30rem')

    const tipsText = ref('提示')

    const tipsFlag = ref(false)

    const tipsAuto = ref(false)

    let timer = null

    const setTips = ({ text, color, width, auto }) => {
        if (text) tipsText.value = text
        if (width) tipsWidth.value = width
        if (color) tipsColor.value = color
        if (auto) tipsAuto.value = true
        else tipsAuto.value = false
        tipsFlag.value = true
        if (timer) clearTimeout(timer)
        if (tipsAuto.value) timer = setTimeout(() => tipsFlag.value = false, 5000)
    }

    const closeTips = () => tipsFlag.value = false

    return { tipsColor, tipsWidth, tipsText, tipsFlag, tipsAuto, setTips, closeTips }
}