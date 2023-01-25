<template>
    <div class="ui-col" :style="{ width: (colCount) * 100 / 24 + '%', marginLeft: (colOffset) * 100 / 24 + '%' }">
        <slot></slot>
    </div>
</template>

<script>
import Props from './props/index'
import { defineProps } from 'vue';
export default {
    name: 'ui-col'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
</style>