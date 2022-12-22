<template>
    <div :class=o>
        <slot></slot>
    </div>
</template>

<script setup>
import { rowProps } from './props';
import useRow from './hooks/useRow'
// eslint-disable-next-line
const props = defineProps(rowProps);
const { o } = useRow(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/row.scss';
</style>