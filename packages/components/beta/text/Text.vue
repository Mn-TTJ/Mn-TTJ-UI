<template>
    <pre class="text pre" v-if="pre"
        :style="{ '--fontSize': fontSize, '--fontWeight': fontWeight, '--color': color, '--align': align, '--row': row, '--hidden': ellipsis ? 'ellipsis' : 'clip' }">{{ text }}</pre>
    <p class="text p" v-else
        :style="{ '--fontSize': fontSize, '--fontWeight': fontWeight, '--color': color, '--align': align, '--row': row, '--hidden': ellipsis ? 'ellipsis' : 'clip', '--break': wrap ? 'break-all' : 'normal' }">
        {{ text }}</p>
</template>

<script>
import Props from './props'
export default {
    name: 'ui-text'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/text.scss';
</style>
