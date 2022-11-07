import { ref, onMounted, inject, reactive, computed, provide } from 'vue'
import { isDOM, isTarget } from '../../../../utils/utils'
import { menuKey, nextKey } from '../symbol'
export default function (props, shower, panel, root, item) {
    const injectProps = inject(menuKey)
    const isOnPanel = ref(false)
    let isHover = false
    let hasListen = false
    const isDerict = ref(false)

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
        }, 500)
    }

    const menuSubItem = reactive({
        'menu-subItem': true,
        'menu-subItem-left': computed(() => injectProps.left.value && !injectProps.vertical.value),
        'menu-subItem-vertical': computed(() => injectProps.vertical.value && (!injectProps.isCollapse.value || !injectProps.collapseModel.value)),
        'menu-subItem-collapse': computed(() => injectProps.collapseModel.value && injectProps.isCollapse.value)
    })

    const menuSubRoot = reactive({
        'menu-subItem-root': true,
        'menu-subItem-root-vertical': injectProps.vertical
    })

    const menuSubShower = reactive({
        'menu-subItem-shower': true,
        'menu-subItem-hover': isOnPanel,
        'menu-subItem-isDerict': computed(() => isDerict.value && injectProps.collapseModel.value && injectProps.isCollapse.value)
    })

    const next = inject(nextKey)

    onMounted(() => {
        if (!hasListen) {
            shower.value.addEventListener('mouseenter', enterEvent)
            shower.value.addEventListener('mouseleave', leaveEvent)
            panel.value.addEventListener('mouseenter', enterEvent)
            panel.value.addEventListener('mouseleave', leaveEvent)
        }
        hasListen = true

        if (isDOM(root.value)) {
            const parent = root.value.parentNode
            isDerict.value = isTarget(parent, 'menu')
        }

        if (isDerict.value) {
            item.value.isDerict()
        }
    })

    provide(nextKey, {
        isActive: () => {
            item.value.active = true
            if (next != null) next.isActive()
        },
        unActive: () => {
            item.value.active = false
            if (next != null) next.unActive()
        }
    })

    return { isOnPanel, menuSubItem, menuSubRoot, menuSubShower }
}