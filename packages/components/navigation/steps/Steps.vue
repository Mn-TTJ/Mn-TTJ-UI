<template>
    <div class="steps" type="steps" :class="{'steps-column':column&&!simple,'simple':simple}">
        <slot></slot>
    </div>
</template>

<script>
import { computed, provide } from 'vue';
import useProps from './hooks/useProps'
import { stepsKey } from './symbol/index'
export default {
    name: 'ui-steps'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
provide(stepsKey, computed(() => props))
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.steps {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
}

.steps-column {
    flex-direction: column;
}

.simple {
    background-color: #f5f7fa;
    border-radius: 0.2rem;
}
</style>

