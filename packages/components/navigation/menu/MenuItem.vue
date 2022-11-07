<template>
    <div :class=menuItem ref="root" type="menuItem" @click="clickEvent(id)">
        <template v-if="collapseModel">
            <span>
                <slot>&#xe69e;</slot>
            </span>
        </template>
        <template v-else>
            <slot name="icon">
            </slot>
        </template>
        <label>{{ label }}</label>
    </div>
</template>

<script>
import { ref, defineExpose } from 'vue';
import useMenuItem from './hooks/useMenuItem';
import { itemProps } from './props'
export default {
    name: 'ui-menu-item'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(itemProps);
const root = ref(null)
const { menuItem, collapseModel, isDerict, id, active, clickEvent } = useMenuItem(props, root)
defineExpose({ isDerict, id, active })
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './css/menuItem.scss';
</style>

<style lang="scss">
.menu-item {
    p {
        font-size: 1.4rem;
        padding-right: 0.5rem;
    }
}
</style>