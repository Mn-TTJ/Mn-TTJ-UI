<template>
    <span v-if="!check && destroy" class="ui-tag" :class="o" :style="{ '--color': props.color }">
        <label>
            <slot></slot>
            <button @click="close">&#xe747;</button>
        </label>
    </span>
    <span v-else class="ui-tag-check" :class="{ 'ui-tag-select': selected }" :style="{ '--color': props.color }"
        @click="select">
        <label>
            <slot></slot>
        </label>
    </span>
</template>

<script>
import useProps from './props/index'
import useTag from './hooks/tag'
import { defineEmits, ref } from 'vue';
export default {
    name: 'ui-tag',
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps);
const emits = defineEmits(['close', 'select'])
const { o, closeEvent, selectEvent } = useTag(props, emits)
const destroy = ref(true)
const selected = ref(props.isSelected)
const close = closeEvent(destroy)
const select = selectEvent(selected)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
@import '../../../css/main.css';
</style>