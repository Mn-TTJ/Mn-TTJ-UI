<template>
    <div class="ui-row" :style="{ justifyContent: justify, alignItems: align }">
        <slot></slot>
    </div>
</template>

<script>
import Props from './props/index'
import { defineProps } from 'vue';
export default {
    name: 'ui-row'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.ui-row {
    display: flex;
}
</style>
