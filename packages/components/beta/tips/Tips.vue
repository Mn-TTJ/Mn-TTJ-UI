<template>
    <transition name="tips">
        <div class="tips" v-if="tipsFlag" :style="{ '--color': tipsColor, '--width': tipsWidth }">
            <p>{{ tipsText }}</p>
            <button v-if="!tipsAuto" @click="closeTips">&#xe64d;</button>
        </div>
    </transition>
</template>

<script>
import tips from './tips.js'
import { defineExpose } from 'vue'
export default {
    name: 'ui-tips'
}
</script>

<script setup>
const { tipsColor, tipsWidth, tipsText, tipsFlag, tipsAuto, setTips, closeTips } = tips()
defineExpose({ setTips })
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/tips.scss';
</style>
