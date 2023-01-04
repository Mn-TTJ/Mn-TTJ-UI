<template>
    <div class="affix" :class="{'target':target}" :style="ustyle">
        <slot></slot>
    </div>
</template>

<script>
import { affixProps } from './props/index'
export default {
    name: 'ui-affix'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(affixProps);
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.affix {
    position: fixed;
}

.target {
    position: sticky;
}
</style>