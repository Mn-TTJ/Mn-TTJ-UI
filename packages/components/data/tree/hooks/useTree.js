import Leaf from '../Leaf.vue'
import { nextTick, onMounted, createVNode, render, useSlots } from 'vue'
export default function (props, leafNodes, emit, root) {
    let path = []
    const findPath = () => []

    const preExpend = new Set(props.preExpend)

    const preSelect = new Set(props.preSelect)

    const treeMap = new Map()

    const map = new Map()

    const slot = useSlots()

    const setPath = (next) => {
        if (path.length != 0) {
            for (let i = 0; i < path.length && i < next.length; i++) {
                if (path[i].id != next[i].id) {
                    path[i].isExpend.value = false
                    break
                }
            }
        }
        path = next
    }

    const selectEvent = (key) => {
        emit('select', key)
    }

    const clickEvent = (key) => {
        emit('clickEvent', key)
    }

    const unshiftChild = (key, data) => {
        if (!treeMap.has(key)) return
        const node = treeMap.get(key)
        node.unshiftChild(data)
    }

    const pushChild = (key, data) => {
        if (!treeMap.has(key)) return
        const node = treeMap.get(key)
        node.pushChild(data)
    }

    const insertBefore = (key, data) => {
        if (!treeMap.has(key)) return
        const node = treeMap.get(key)
        node.insertBefore(data)
    }

    const insertAfter = (key, data) => {
        if (!treeMap.has(key)) return
        const node = treeMap.get(key)
        node.insertAfter(data)
    }

    const remove = (key) => {
        if (!treeMap.has(key)) return
        const node = treeMap.get(key)
        node.remove()
    }

    const removeChild = (dom, id) => {
        render(null, dom)
        root.value.removeChild(dom)
        map.delete(id)
    }

    const createNode = (newData, dom) => {
        const id = Symbol()
        render(createVNode(Leaf, {
            id,
            leaf: newData,
            injections,
            layer: 0,
        }, slot.default), dom)
        return id
    }

    const insertChild = (newData, node) => {
        const dom = document.createElement('div')
        root.value.insertBefore(dom, node)
        const id = createNode(newData, dom)
        map.set(id, dom)
    }

    const addFirstChild = (newData) => {
        const dom = document.createElement('div')
        const firstChild = root.value.firstElementChild
        root.value.insertBefore(dom, firstChild)
        const id = createNode(newData, dom)
        map.set(id, dom)
    }

    const addLastChild = (newData) => {
        const dom = document.createElement('div')
        root.value.appendChild(dom)
        const id = createNode(newData, dom)
        map.set(id, dom)
    }

    const injections = {
        props,
        treeMap,
        preExpend,
        preSelect,
        findPath,
        setPath,
        selectEvent,
        clickEvent,
        slot: slot.default,
        pushChild: addLastChild,
        removeChild,
        insertChild,
    }

    const load = () => {
        nextTick(() => {
            if (!leafNodes.value) return
            leafNodes.value.forEach((node, index) => {
                createNode(props.dataSet[index], node)
            })
        })
    }

    const reload = (key) => {
        const node = treeMap.get(key)
        if (node) node.reload()
    }

    const allReload = () => {
        if (leafNodes.value) leafNodes.value.forEach(node => render(null, node))
        for (let node of map.values()) {
            render(null, node)
            root.value.removeChild(node)
        }
        map.clear()
        load()
    }

    onMounted(load)

    return {
        reload,
        unshiftChild,
        pushChild,
        insertBefore,
        insertAfter,
        remove,
        addFirstChild,
        addLastChild,
        allReload
    }
}