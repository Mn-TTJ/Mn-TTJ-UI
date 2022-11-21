import { ref, watch, nextTick, createVNode, render, computed, onUnmounted, onMounted, onBeforeUnmount } from 'vue'
import Leaf from '../Leaf.vue'
export default function (props, leafNodes, branch, root) {
    // id标识
    const id = props.id
    // 加载标识
    const isLoad = ref(false)
    const loading = ref(false)
    // 展开标识
    const isExpend = ref(false)
    // 懒加载结果
    const lazyChildren = ref([])
    // 后代标识
    const hasChildren = computed(() => {
        let pNum = 0
        if (props.leaf.children) pNum = props.leaf.children.length
        let lNum = lazyChildren.value.length
        if (pNum + lNum + expChildrenSum.value > 0) return true
        return false
    })
    // 后代个数
    const childrenSum = computed(() => {
        if (hasChildren.value) {
            if (lazyChildren.value.length != 0) return lazyChildren.value.length
            if (props.leaf.children) return props.leaf.children.length
            return 0
        }
        return 0
    })
    // 后代拓展数
    let expChildrenSum = ref(0)
    // 拓展后代
    const map = new Map()
    // 手风琴标志
    const accordion = computed(() => props.injections.props.accordion)
    // 选中标志
    const isSelect = ref(0)
    // 后代选中数量
    const selChlSum = ref(0)
    // 未选中后代数量
    const unSelChlSum = ref(0)

    // 递归构建路径
    const findPath = () => {
        const path = props.injections.findPath()
        return [...path, { id, isExpend }]
    }

    // 手风琴设置路径
    const setPath = () => {
        if (!props.injections.props.accordion) return
        if (hasChildren.value) {
            const path = findPath()
            props.injections.setPath(path)
        }
    }

    // 选择函数
    const selecting = () => {
        if (props.leaf.selDisabled) return
        isSelect.value--
        isSelect.value = isSelect.value < 0 ? 1 : isSelect.value
        if (isSelect.value == 0) {
            selChlSum.value = 0
            unSelChlSum.value = 0
        } else if (isSelect.value == 1) {
            selChlSum.value = childrenSum.value + expChildrenSum.value
            unSelChlSum.value = 0
        }
        selectEvent()
    }

    // 选中事件
    const selectEvent = () => {
        props.injections.selectEvent({
            isSelect: isSelect.value,
            key: props.leaf.key,
            id,
            value: props.leaf.label,
            isExpend: isExpend.value,
            root: root.value,
        })
    }

    // 点击事件
    const clickEvent = () => {
        props.injections.clickEvent({
            isSelect: isSelect.value,
            key: props.leaf.key,
            id,
            value: props.leaf.label,
            isExpend: isExpend.value,
            root: root.value,
        })
    }

    // 增加子代选择函数
    const addSonNum = (flag, num) => {
        if (flag) selChlSum.value += num
        else unSelChlSum.value += num
    }

    // 展开函数
    const expend = (leaf) => {
        return new Promise((resolve, reject) => {
            if (props.leaf.expDisabled) resolve()
            if (!isLoad.value) {
                if (hasChildren.value) {
                    isLoad.value = true
                    isExpend.value = true
                    setPath()
                    resolve()
                }
                else if (leaf.lazy) {
                    try {
                        loading.value = true
                        leaf.lazy().then(children => {
                            lazyChildren.value = children
                            isLoad.value = true
                            isExpend.value = true
                            loading.value = false
                            setPath()
                            resolve()
                        }).catch(() => {
                            console.log('lazy function error')
                            loading.value = false
                            reject()
                        })
                    } catch (error) {
                        console.log('lazy function error')
                        loading.value = false
                        reject()
                    }
                }
                else resolve()
            } else {
                isExpend.value = !isExpend.value
                if (isExpend.value) setPath()
                resolve()
            }
        })
    }

    // 结点工厂
    const nodeCreate = (data, node, id = Symbol()) => {
        render(createVNode(Leaf, {
            id,
            leaf: data,
            injections: { ...Object.assign({ ...props.injections }, { findPath, allSelect: isSelect, addSonNum, pushChild, insertChild, removeChild }) },
            layer: props.layer + 1,
        }, props.injections.slot), node)
    }

    // 加载函数
    const load = () => {
        nextTick(() => {
            if (!leafNodes.value) return
            leafNodes.value.forEach((node, index) => {
                const data = props.leaf.lazy ? lazyChildren.value[index] : props.leaf.children[index]
                nodeCreate(data, node)
            })
        })
    }

    // 添加预处理
    const beforeAddChild = async (data, callBack, leaf) => {
        if (!isLoad.value) await expend(props.leaf)
        if (!isLoad.value) { isLoad.value = true, isExpend.value = true }
        const child = document.createElement('div')
        const id = Symbol()
        nextTick(() => callBack(data, child, id, leaf))
    }

    // 添加首节点
    const unshiftChild = async (newData) => {
        beforeAddChild(newData, (data, child, id) => {
            const firstChild = branch.value.firstElementChild
            branch.value.insertBefore(child, firstChild)
            nodeCreate(data, child, id)
            expChildrenSum.value++
            map.set(id, child)
        })
    }

    // 添加尾结点
    const pushChild = async (newData) => {
        beforeAddChild(newData, (data, child, id) => {
            branch.value.appendChild(child)
            nodeCreate(data, child, id)
            expChildrenSum.value++
            map.set(id, child)
        })
    }

    // 指定结点插入
    const insertChild = (newData, node) => {
        beforeAddChild(newData, (data, child, id, leaf) => {
            branch.value.insertBefore(child, leaf)
            nodeCreate(data, child, id)
            expChildrenSum.value++
            map.set(id, child)
        }, node)
    }
    // 指定前插
    const insertBefore = async (newData) => {
        props.injections.insertChild(newData, root.value.parentNode)
    }
    // 指定后插
    const insertAfter = async (newData) => {
        const brother = root.value.parentNode.nextElementSibling
        if (brother) props.injections.insertChild(newData, brother)
        else props.injections.pushChild(newData)
    }

    // 指定节点删除
    const removeChild = (dom, id) => {
        render(null, dom)
        branch.value.removeChild(dom)
        expChildrenSum.value--
        map.delete(id)
    }
    const remove = () => {
        props.injections.removeChild(root.value.parentNode, id)
    }

    const reload = async () => {
        if (leafNodes.value) leafNodes.value.forEach(node => render(null, node))
        for (let node of map.values()) {
            render(null, node)
            branch.value.removeChild(node)
        }
        map.clear()
        expChildrenSum.value = 0
        if (props.leaf.lazy) lazyChildren.value = await props.leaf.lazy()
        load()
    }

    // 节点方法
    const leafMethod = {
        reload, remove, insertBefore, insertAfter, unshiftChild, pushChild
    }

    watch(isLoad, () => {
        if (isLoad.value) load()
    })

    watch(accordion, () => isExpend.value = false)

    const allSelect = computed(() => {
        if (props.injections.allSelect) return props.injections.allSelect.value
        else return null
    })

    watch(allSelect, () => {
        if (allSelect.value == 1) isSelect.value = 1
        if (allSelect.value == 0) isSelect.value = 0
    }, {
        immediate: true
    })

    watch(isSelect, (newValue, oldValue) => {
        if (allSelect.value == newValue && allSelect.value != 2) return
        const addSonNum = props.injections.addSonNum ? props.injections.addSonNum : () => { }
        if (oldValue == 1) {
            addSonNum(true, -1)
        } else if (oldValue == 2) {
            addSonNum(false, -1)
        }
        if (newValue == 1) {
            addSonNum(true, 1)
        }
        else if (newValue == 2) {
            addSonNum(false, 1)
        }
    })

    watch([selChlSum, unSelChlSum], () => {
        if (childrenSum.value + expChildrenSum.value != 0) {
            if (selChlSum.value == (childrenSum.value + expChildrenSum.value)) isSelect.value = 1
            else if ((unSelChlSum.value + selChlSum.value) == 0) isSelect.value = 0
            else isSelect.value = 2
        }
    })

    watch([childrenSum, expChildrenSum], () => {
        if (isSelect.value == 1) selChlSum.value = childrenSum.value + expChildrenSum.value
    })

    onMounted(() => {
        const tree = props.injections.treeMap
        if (props.leaf.key) {
            if (tree.has(props.leaf.key)) console.log('one key can only be used by one leaf')
            else tree.set(props.leaf.key, {
                selectEvent,
                reload,
                unshiftChild,
                pushChild,
                insertBefore,
                insertAfter,
                remove
            })
            if (props.injections.preExpend.has(props.leaf.key)) expend(props.leaf)
            if (props.injections.preSelect.has(props.leaf.key)) {
                isSelect.value = 1
                selChlSum.value = childrenSum.value + expChildrenSum.value
            }
        }
    })

    onBeforeUnmount(() => {
        const addSonNum = props.injections.addSonNum ? props.injections.addSonNum : () => { }
        if (isSelect.value == 1) addSonNum(true, -1)
        else if (isSelect.value == 2) addSonNum(false, -1)
        if (leafNodes.value) leafNodes.value.forEach(node => render(null, node))
        for (let node of map.values()) {
            render(null, node)
        }
        map.clear()
    })

    onUnmounted(() => {
        const tree = props.injections.treeMap
        if (props.leaf.key) tree.delete(props.leaf.key)
    })

    return {
        isLoad,
        loading,
        isExpend,
        hasChildren,
        childrenSum,
        expend,
        injections: props.injections.props,
        isSelect,
        selecting,
        clickEvent,
        leafMethod
    }
}