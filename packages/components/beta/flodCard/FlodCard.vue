<template>
    <div class="flod-card" :class="o"
        :style="{ '--radius': radius, '--b-color': bColor, '--h-color': hColor, '--t-color': tColor }">
        <header>
            <p>{{ title }}</p><button :class="{ 'flod-btn': flodFlag }" @click="setFlod">&#xe699;</button>
        </header>
        <section :class="{ 'flod-panel': flodFlag }">
            <slot></slot>
        </section>
    </div>
</template>

<script>
import Props from './props'
import fladCard from './flodCard.js'
export default {
    name: 'ui-flod-card'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
const { o, flodFlag, setFlod } = fladCard(props)
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/flodCard.scss';
</style>
