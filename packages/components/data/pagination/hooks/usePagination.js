import { computed, reactive, ref, watch } from "vue"

export default function (props, emits) {
    const now = ref(props.currentPage)

    const mValue = computed({
        get: () => props.modelValue,
        set: (val) => emits('update:modelValue', val)
    })

    const p = reactive({
        sum: computed(() => Math.ceil(props.total / props.pageSize)),
        page: computed(() => {
            let start = now.value - Math.floor((props.pageCount - 3) / 2)
            let end = now.value + Math.ceil((props.pageCount - 3) / 2)
            while (start <= 0) {
                start++
                if (end < p.sum) end++
            }
            if (start == 1) end++
            while (end > p.sum) {
                end--
                if (start > 1) start--
            }
            if (end == p.sum && start != 1) {
                start--
            }
            return [start, end - start + 1]
        })
    })

    const goPage = (page) => {
        if (page != now.value) {
            now.value = page
        }
    }

    const prePage = () => {
        if (now.value == 1) return
        now.value--
    }

    const nextPage = () => {
        if (now.value == p.sum) return
        now.value++
    }

    const preGroup = () => {
        now.value = p.page[0]
    }

    const nextGroup = () => {
        now.value = p.page[0] + p.page[1] - 1
    }

    const goSelectPage = (page) => {
        if (page >= 1 && page <= p.sum) now.value = page
    }

    watch(mValue, () => {
        if (!mValue.value || mValue.value < 1 || mValue.value > p.sum) console.log('Unexpected pages')
        else now.value = mValue.value
    }, {
        immediate: true
    })

    watch(now, () => {
        mValue.value = now.value
        emits('pageChage', now.value)
    })

    return {
        p,
        now,
        goPage,
        prePage,
        nextPage,
        preGroup,
        nextGroup,
        goSelectPage
    }
}