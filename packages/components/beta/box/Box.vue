<template>
    <div class="box"
        :style="{ '--margin': margin, '--padding': padding, '--width': width, '--height': height, '--color': color, '--display': flex ? 'flex' : 'block' }">
        <slot></slot>
    </div>
</template>

<script>
import Props from './props'
export default {
    name: 'ui-box'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/box.scss';
</style>
