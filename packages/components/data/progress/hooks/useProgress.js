import { computed, onBeforeUnmount, onMounted, reactive } from "vue"

export default function (props, circle) {
    const s = reactive({
        '--slider-color': computed(() => {
            if (props.status) {
                if (props.status == 'success') return '#67c23a'
                else if (props.status == 'warning') return '#e6a23c'
                else if (props.status == 'danger') return '#f56c6c'
            }
            return props.color
        })
    })

    const c = reactive({
        radius: 16,
        perimeter: computed(() => {
            return 2 * Math.PI * (c.radius - 8)
        }),
        init: false
    })

    const setRadius = (dom) => {
        c.radius = dom.offsetWidth / 2
        setImmediate(() => c.init = true)
    }

    onMounted(() => {
        setRadius(circle.value)
        circle.value.addEventListener("resize", setRadius)
    })

    onBeforeUnmount(() => {
        circle.value.removeEventListener('resize', setRadius)
    })

    return { s, c }
}