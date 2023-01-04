<template>
    <div class="steps" type="steps" :class="{ 'steps-column': column && !simple, 'simple': simple }">
        <slot></slot>
    </div>
</template>

<script>
import { computed, provide } from 'vue';
import { stepsProps } from './props/index'
import { stepsKey } from './symbol/index'
export default {
    name: 'ui-steps'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(stepsProps);
provide(stepsKey, computed(() => props))
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/steps.scss';
</style>

