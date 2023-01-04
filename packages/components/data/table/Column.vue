<template>
    <div :class="o" :style="{ 'max-width': width, 'min-width': width }" @mouseenter="hover.hoverEvent"
        @mouseleave="hover.unHoverEvent">
        <slot name="title" v-if="title" :label="label">
            <h4>{{ label }}</h4>
        </slot>
        <slot v-else :data="data[prop]">
            <p>{{ data[prop].label }}</p>
        </slot>
    </div>
</template>

<script>
import useColumn from './hooks/useColumn';
import { columnProps } from './props/index'
export default {
    name: 'ui-table-column'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(columnProps);
const { data, title, o, hover } = useColumn(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/column.scss';
</style>