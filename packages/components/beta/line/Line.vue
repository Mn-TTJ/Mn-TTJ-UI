<template>
    <div v-if="vertical" class="line-c" :class="{ 'len': len, 'line-c-dashed': dashed }"
        :style="{ '--thick': thick, '--color': color, '--space': space, '--len': len }">
    </div>
    <div v-else class="line-r" :class="{'line-r-dashed':dashed}"
        :style="{ '--thick': thick, '--color': color, '--space': space, '--len': len ? len : '100%' }"></div>
</template>

<script>
import Props from './props';
export default {
    name: 'ui-line'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/line.scss';
</style>