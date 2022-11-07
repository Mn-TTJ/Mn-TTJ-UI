<template>
    <div :class="menuSubRoot" ref="root">
        <div :class="menuSubShower" ref="shower" type="menuSubItem">
            <MenuItem :label="label" ref="item" :disabled="disabled">
            </MenuItem>
        </div>
        <div :class="menuSubItem" ref="panel" v-show="isOnPanel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { subItemProps } from './props'
import MenuItem from './MenuItem.vue'
import { ref } from 'vue';
import useMenuSubItem from './hooks/useMenuSubItem';
export default {
    name: 'ui-menu-sub-item',
    components: { MenuItem }
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(subItemProps);
const shower = ref(null)
const panel = ref(null)
const root = ref(null)
const item = ref(null)
const { isOnPanel, menuSubItem, menuSubRoot, menuSubShower } = useMenuSubItem(props, shower, panel, root, item)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './css/menuSubItem.scss';
</style>