import { onMounted, onBeforeUnmount, ref, watch } from "vue";

export default function (props, mValue) {
    const timePickFlag = ref(false)

    let max

    let min

    let time = ref([0, 0, 0])

    const init = () => {
        time.value = props.modelValue.split(':').map((x) => parseInt(x))
    }

    const setValue = () => {
        let hh = '' + time.value[0]
        if (hh.length == 1) hh = '0' + hh
        let mm = '' + time.value[1]
        if (mm.length == 1) mm = '0' + mm
        let ss = '' + time.value[2]
        if (ss.length == 1) ss = '0' + ss
        mValue.value = hh + ":" + mm + ":" + ss
    }

    const checkTime = () => {
        time.value = mValue.value.split(':').map((x) => parseInt(x))
        for (let i = 0; i < 3; i++) {
            if (time.value[i] > min[i]) break
            if (time.value[i] < min[i]) time.value[i] = min[i]
        }
        for (let i = 0; i < 3; i++) {
            if (time.value[i] < max[i]) break
            if (time.value[i] > max[i]) time.value[i] = max[i]
        }
        setValue()
    }

    const maxAndMin = () => {
        let maxs = props.max.split(':').map((x) => parseInt(x))
        let mins = props.min.split(':').map((x) => parseInt(x))
        for (let i = 0; i < 3; i++) {
            if (maxs[i] > mins[i]) break
            if (maxs[i] < mins[i]) {
                [mins, maxs] = [maxs, mins]
                break
            }
        }
        max = maxs, min = mins
        checkTime()
    }

    const closePicker = () => timePickFlag.value = false

    const setTime = (index, flag) => {
        if (props.disabled) return
        if (flag) {
            if (index == 0 && time.value[index] < 23) time.value[index]++
            if (index != 0 && time.value[index] < 59) time.value[index]++
            for (let i = 0; i < 3; i++) {
                if (time.value[i] < max[i]) break
                else if (time.value[i] > max[i]) time.value[i] = max[i]
            }
        } else {
            if (time.value[index] > 0) time.value[index]--
            for (let i = 0; i < 3; i++) {
                if (time.value[i] > min[i]) break
                else if (time.value[i] < min[i]) time.value[i] = min[i]
            }
        }
        setValue()
    }

    onMounted(() => {
        window.addEventListener('click', closePicker)
        init()
        maxAndMin()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', closePicker)
    })

    watch(() => props.min, maxAndMin)
    watch(() => props.max, maxAndMin)
    watch(() => mValue.value, () => {
        init()
        checkTime()
    })
    watch(() => props.disabled, () => {
        if (props.disabled) timePickFlag.value = false
    })

    return { time, timePickFlag, setTime }
}