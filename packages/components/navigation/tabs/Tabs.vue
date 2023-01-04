<template>
    <div class="tabs">
        <div class="tabs-btn">
            <button :class="{ 'tabs-select': selected == index }" v-for="(tab,index) in tabs" :key="tab"
                @click="chooseTab(index)">{{ tab }}</button>
            <span></span>
        </div>
        <div class="tabs-panel-container" :style="{ 'height': height, 'width': width }" ref="root" type="tabs">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, provide, onBeforeUpdate, nextTick } from 'vue';
import { tabsProps } from './props/index'
import { tabsKey } from './symbol/index'
import { isDOM } from '../../../utils/utils'
export default {
    name: 'ui-tabs'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(tabsProps);
const root = ref(null)
const tabs = ref([])
const selected = ref(props.active)
let lock = false
provide(tabsKey, selected)

const getTabs = () => {
    tabs.value = []
    const children = root.value.childNodes
    for (let i = 0; i < children.length; i++) {
        if (isDOM(children[i])) {
            if (children[i].getAttribute('type') == 'tabPanel') {
                const label = children[i].getAttribute('label')
                tabs.value.push(label.length == 0 ? `窗口${+tabs.value.length + 1}` : label)
            }
            else {
                root.value.removeChild(children[i])
                i--
            }
        }
    }
}

const chooseTab = (index) => {
    selected.value = index
}

onBeforeUpdate(() => {
    if (!lock) nextTick(() => {
        getTabs()
        lock = true
    })
    else lock = false
})

onMounted(() => {
    getTabs()
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/tabs.scss'
</style>