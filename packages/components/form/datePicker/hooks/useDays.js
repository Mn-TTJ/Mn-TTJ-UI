import { computed } from "vue"

export default function (year, month) {

    const now = computed(() => {
        return [1, new Date(year.value, month.value, 0).getDate()]
    })

    const last = computed(() => {
        const lastMonth = month.value == 1 ? 12 : month.value - 1
        const lastDay = new Date(year.value, lastMonth, 0).getDate()
        const week = new Date(year.value, month.value - 1, 1).getDay()
        return [lastDay - week, week]
    })

    const next = computed(() => {
        return [1, 42 - now.value[1] - last.value[1]]
    })

    return { last, now, next }
}