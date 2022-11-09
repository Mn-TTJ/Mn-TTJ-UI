<template>
    <div @click="backTop" :style="ustyle">
        <slot></slot>
    </div>
</template>

<script>
import { backTopProps } from './props/index'
import useGoTop from './hooks/useBackTop';
export default {
    name: 'ui-backtop'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(backTopProps);
const backTop = useGoTop(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
</style>