<template>
    <div :class="menu" :style="uStyle">
        <div :class="menuTitle" v-if="!vertical">
            <slot name="title"></slot>
        </div>
        <div :class="menuBtns" type="menu" ref="root">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineExpose } from 'vue'
import { menuProps } from './props';
import useMenu from './hooks/useMenu'
export default {
    name: 'ui-menu',
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(menuProps);
const { menu, menuBtns, menuTitle, uStyle, callCollapse, setDefaultIndex } = useMenu(props)
defineExpose({ callCollapse, setDefaultIndex })
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './css/menu.scss'
</style>>