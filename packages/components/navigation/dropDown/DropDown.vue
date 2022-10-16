<template>
    <div class="dropdown">
        <div class="dropdown-shower"
            :class="{'is-shower':isOnPanel,'is-btn':btn,'only-text':onlyText, 'is-sm-show':sm,'is-lg-show':lg}"
            :style="showerStyle" ref="shower">
            <label>
                <slot></slot>
            </label>
        </div>
        <div class="dropdown-panel" :class="{'is-panel':isOnPanel,'is-sm-panel':sm,'is-lg-panel':lg}" ref="panel">
            <ul :class="{'is-shadow':shadow}" :style="panelStyle">
                <li v-for="(option,index) in options" :key="index" @click="option.callBack(index)">{{option.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import useProps from './hooks/useProps'
import useOnPanel from './hooks/useOnPanel'
import useStyle from './hooks/useStyle'
import { ref } from 'vue';
export default {
    name: 'ui-dropdown'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const shower = ref(null)
const panel = ref(null)
const isOnPanel = useOnPanel(props, shower, panel)
const { showerStyle, panelStyle } = useStyle(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import '../../../css/animation/animation.css';
@import './scss/dropDown.scss'
</style>