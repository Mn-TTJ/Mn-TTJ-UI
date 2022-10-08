<template>
    <div class="date">
        <div class="date-show">{{mValue}}</div>
    </div>
</template>

<script>
import useProps from './hooks/useProps';
import { defineEmits, computed } from 'vue';
export default {
    name: 'ui-datepicker'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const emits = defineEmits(['update:modelValue'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.date {
    display: inline-flex;
}

.date-show {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
    border: 1px solid #409eff;
    border-radius: 0.2rem;

    &::before {
        margin-right: 0.4rem;
        font-family: 'iconfont';
        content: '\e63a';
    }
}
</style>