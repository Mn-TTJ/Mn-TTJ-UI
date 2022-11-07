import { computed, provide, reactive, ref, onMounted, onUpdated } from "vue"
import { menuKey, nextKey, treeKey } from "../symbol"

export default function (props) {

    const isCollapse = ref(true)
    const collapseModel = computed(() => props.collapse && props.vertical)

    const menu = reactive({
        'menu': true,
        'menu-reverse': computed(() => props.left && !props.vertical),
        'menu-vertical': computed(() => props.vertical),
        'no-bottom': computed(() => props.noBorder),
        'menu-collapse': computed(() => isCollapse.value && collapseModel.value)
    })

    const menuBtns = reactive({
        'menu-btns': true,
        'menu-btns-reverse': computed(() => props.left && !props.vertical),
        'menu-btns-vertical': computed(() => props.vertical),
        'menu-btns-center': computed(() => !collapseModel.value && props.vertical && props.center)
    })

    const menuTitle = reactive({
        'menu-title': true,
        'menu-title-center': computed(() => !collapseModel.value && props.vertical && props.center)
    })

    const dark = {
        '--menu-bg-color': '#545c64',
        '--menu-text-color': 'white',
        '--menu-hover-color': '#434a50',
        '--menu-active-color': '#ffd04b'
    }

    const costom = reactive({
        '--menu-bg-color': computed(() => props.bgColor),
        '--menu-text-color': computed(() => props.textColor),
        '--menu-hover-color': computed(() => props.hoverColor),
        '--menu-active-color': computed(() => props.activeColor),
    })

    const uStyle = computed(() => {
        if (props.dark) return dark
        else return costom
    })

    const callCollapse = () => {
        isCollapse.value = !isCollapse.value
    }

    const menuTree = new Map()

    const treeState = ref(false)

    let activeNode = null

    const treeInit = () => {
        treeState.value = true
        setImmediate(() => treeState.value = false)
    }

    const treeClick = (id) => {
        if (menuTree.has(id)) {
            if (activeNode != null) {
                const oldLeft = menuTree.get(activeNode)
                oldLeft.unActive()
            }
            const newLeft = menuTree.get(id)
            newLeft.isActive()
            activeNode = id
        }
    }

    const setDefaultIndex = (id) => treeClick(id)

    onMounted(() => {
        treeInit()
    })

    onUpdated(() => {
        treeInit()
    })

    provide(menuKey, {
        vertical: computed(() => props.vertical),
        collapseModel,
        isCollapse,
        center: computed(() => props.center),
        left: computed(() => props.left)
    })

    provide(treeKey, { menuTree, treeState, treeClick })

    provide(nextKey, null)

    return { menu, menuBtns, menuTitle, uStyle, callCollapse, setDefaultIndex }
}