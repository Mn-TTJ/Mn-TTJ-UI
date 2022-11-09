<template>
    <div class="step" ref="step" v-if="!injectProps.simple"
        :class="{ 'step-column': injectProps.column, 'hasDone': id < injectProps.stage, 'isDoing': id == injectProps.stage, 'willdo': id > injectProps.stage }"
        :style=uStyle>
        <div class="step-icon" :class="{ 'center': injectProps.center && !injectProps.column, 'isLast': isLast }">
            <div :class="{ 'use-icon': injectProps.icon }">
                <slot name="icon"><span>{{ id }}</span></slot>
            </div>
        </div>
        <div class="step-text"
            :class="{ 'center': injectProps.center && !injectProps.column, 'column-center': injectProps.center && injectProps.column }">
            <div>
                <slot name="title">
                    <h3>{{ title }}</h3>
                </slot>
            </div>
            <div>
                <slot name="description">
                    <p>{{ description }}</p>
                </slot>
            </div>
        </div>
    </div>
    <div v-else class="simple-step" ref="step" :style=uStyle
        :class="{ 'simple-space': !isLast, 'hasDone': id < injectProps.stage, 'isDoing': id == injectProps.stage, 'willdo': id > injectProps.stage }">
        <slot name="icon"><label>{{ id }}</label></slot>
        <slot name="title">
            <h3>{{ title }}</h3>
        </slot>
    </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import { stepsKey } from './symbol/index'
export default {
    name: 'ui-step'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps({
    title: String,
    description: String
});
const injectProps = inject(stepsKey)
const step = ref(null)
const id = ref(0)
const isLast = ref(false)
let stepsFlag = true
onMounted(() => {
    const parent = step.value.parentNode;
    if (parent.getAttribute("type") !== "steps") stepsFlag = false
    getId(step.value, parent.childNodes)
})

const getId = (child, children) => {
    if (!stepsFlag) return
    children.forEach((element, index) => {
        if (element === child) id.value = index
    });
    if (id.value == children.length - 2) isLast.value = true
}

const uStyle = {
    'max-width': injectProps.value.column ? null : injectProps.value.space,
    'max-height': injectProps.value.column ? injectProps.value.space : null,
    '--done-color': injectProps.value.doneColor,
    '--doing-color': injectProps.value.doingColor,
    '--will-do-color': injectProps.value.willDoColor
}
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/step.scss'
</style>