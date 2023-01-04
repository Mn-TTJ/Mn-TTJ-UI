<template>
    <div class="leaf" ref="root">
        <div class="leaf-node" :class="{
            'leaf-expend': isExpend && hasChildren,
            'leaf-expend-btn': (leaf.lazy && !isLoad) || hasChildren,
            'leaf-disabeld': leaf.expDisabled
        }" @click="expend(leaf); clickEvent()">
            <span>&#xeb6d;</span>
            <div v-if="injections.select" class="leaf-select-box"
                :class="{ 'leaf-select-disabled': leaf.selDisabled, 'leaf-select-bg-disabled': isSelect != 0 && leaf.selDisabled, 'leaf-all': isSelect == 1, 'leaf-part': isSelect == 2 }"
                @click.stop="selecting">
            </div>
            <div class="leaf-loading" v-if="loading">&#xe634;</div>
            <slot :label="leaf.label" :leafMethod="leafMethod"><label>{{ leaf.label }}</label></slot>
        </div>
        <div v-if="isLoad" v-show="isExpend" class="leaf-branch" ref="branch">
            <div ref="leafNodes" v-for="index in childrenSum" :key="index"></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { leafProps } from './props';
import useLeaf from './hooks/useLeaf'
export default {
    name: 'ui-leaf'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(leafProps);
const leafNodes = ref(null)
const branch = ref(null)
const root = ref(null)
const { isLoad,
    loading,
    isExpend,
    hasChildren,
    childrenSum,
    expend,
    injections,
    isSelect,
    selecting,
    clickEvent,
    leafMethod } = useLeaf(props, leafNodes, branch, root)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/index.scss'
</style>