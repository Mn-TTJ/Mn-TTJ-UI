<template>
    <div @click="goTop" :style="ustyle">
        <slot></slot>
    </div>
</template>

<script>
import useProps from './hooks/useProps'
import useGoTop from './hooks/useGoTop';
export default {
    name: 'ui-backtop'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const goTop = useGoTop(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
</style>