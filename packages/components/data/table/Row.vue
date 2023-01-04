<template>
    <div class="table-row" @click="expandEvent">
        <div class="table-row-left" v-if="slot.left">
            <slot name="left"></slot>
        </div>
        <div class="table-row-fixed">
            <slot></slot>
        </div>
        <div class="table-row-right" v-if="slot.right">
            <slot name="right"></slot>
        </div>
    </div>
    <div :class=o v-if="slot.expand && isExpand">
        <slot name="expand"></slot>
    </div>
</template>

<script setup>
import { rowProps } from './props';
import useRow from './hooks/useRow'
// eslint-disable-next-line
const props = defineProps(rowProps);
const { o, slot, isExpand, expandEvent } = useRow(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/row.scss';
</style>