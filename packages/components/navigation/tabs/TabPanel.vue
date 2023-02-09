<template>
    <div type="tabPanel" ref="panel" :label="label" v-show="active == id">
        <slot></slot>
    </div>
</template>

<script>
import { panelProps } from './props/index'
import { tabsKey } from './symbol/index'
import { isDOM } from '../../../utils/utils'
import { inject, onBeforeUpdate, ref } from 'vue';
export default {
    name: 'ui-tab-panel'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(panelProps);
const panel = ref(null)
const active = inject(tabsKey)
const id = ref(-1)
const getIndex = () => {
    const parent = panel.value.parentNode
    if (parent.getAttribute('type') != 'tabs') return -1
    const children = parent.childNodes
    let index = 0
    for (let node of children) {
        if (node === panel.value) return index
        else if (isDOM(node) && node.getAttribute('type') == 'tabPanel') index++
    }
}

onBeforeUpdate(() => {
    id.value = getIndex()
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
</style>

