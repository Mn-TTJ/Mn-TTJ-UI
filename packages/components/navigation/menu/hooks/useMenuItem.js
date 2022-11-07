import { computed, inject, reactive, ref, onMounted, watch } from "vue";
import { isDOM, isTarget } from "../../../../utils/utils";
import { menuKey, nextKey, treeKey } from "../symbol";

export default function (props, root) {

    const injectProps = inject(menuKey)

    const unDerict = ref(true)

    const collapseModel = injectProps.collapseModel

    const isCollapse = injectProps.isCollapse

    const active = ref(false)

    const menuItem = reactive({
        'menu-item': true,
        'menu-item-vertical': injectProps.vertical,
        'menu-item-isCollapse': computed(() => collapseModel.value && isCollapse.value),
        'menu-item-unCollapse': computed(() => collapseModel.value && !isCollapse.value),
        'menu-item-center': computed(() => !collapseModel.value && injectProps.center.value),
        'menu-disabled': computed(() => props.disabled),
        'menu-item-underict': unDerict,
        'menu-item-active': computed(() => active.value && !props.unRecord)
    })

    const isDerict = () => {
        unDerict.value = false
    }

    const id = Symbol()
    const { menuTree, treeState, treeClick } = inject(treeKey)
    const next = inject(nextKey)
    const isActive = () => {
        active.value = true
        if (next != null)
            next.isActive()
    }
    const unActive = () => {
        active.value = false
        if (next != null)
            next.unActive()
    }

    const clickEvent = () => {
        if (props.disabled) return
        treeClick(id)
    }

    watch(treeState, () => {
        if (treeState.value) {
            if (isDOM(root.value) && !isTarget(root.value.parentNode, 'menuSubItem')) {
                menuTree.set(id, {
                    isActive
                    , unActive
                })
            }
        }
    })

    onMounted(() => {
        if (isDOM(root.value)) {
            const parent = root.value.parentNode
            if (isTarget(parent, 'menu')) unDerict.value = false
        }
    })

    return { menuItem, collapseModel, isDerict, id, active, clickEvent }
}