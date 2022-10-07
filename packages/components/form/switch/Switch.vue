<template>
    <template v-if="!custom">
        <div v-if="(!sm&&!lg)||(sm&&lg)" class="switch md" :class="{'switch-open-md':mValue}" @click="pressDown"
            :style="{'background-color':backgroundColor}">
            <span :style="{'background-color':sliderColor}"></span>
        </div>
        <div v-if="sm&&!lg" class="switch sm" :class="{'switch-open-sm':mValue}" @click="pressDown"
            :style="{'background-color':backgroundColor}">
            <span :style="{'background-color':sliderColor}"></span>
        </div>
        <div v-if="!sm&&lg" class="switch lg" :class="{'switch-open-lg':mValue}" @click="pressDown"
            :style="{'background-color':backgroundColor}">
            <span :style="{'background-color':sliderColor}"></span>
        </div>
    </template>

    <template v-if="custom">
        <div class="switch-custom" @click="pressDown">
            <slot name="switch"></slot>
        </div>
    </template>
</template>

<script>
import { computed, defineEmits } from 'vue'
import useProps from './hooks/useProps';
export default {
    name: 'ui-switch'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const emits = defineEmits(['update:modelValue'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
const pressDown = () => {
    mValue.value = !mValue.value
}
const backgroundColor = computed(() => {
    if (mValue.value) return props.onColor
    else return props.trackColor
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.switch {
    position: relative;
    display: inline-block;
    transition-duration: 0.2s;
}

span {
    position: absolute;
    display: inline-block;
    transition-duration: 0.2s;
}

.lg {
    height: 1.6rem;
    width: 3.5rem;
    border-radius: 0.8rem;

    span {
        top: 0.15rem;
        left: 0.15rem;
        height: 1.3rem;
        width: 1.3rem;
        border-radius: 0.8rem;
    }
}

.switch-open-lg {

    span {
        left: 2.05rem;
    }
}

.md {
    height: 1.4rem;
    width: 3rem;
    border-radius: 0.7rem;

    span {
        top: 0.15rem;
        left: 0.15rem;
        height: 1.1rem;
        width: 1.1rem;
        border-radius: 0.55rem;
    }
}

.switch-open-md {

    span {
        left: 1.75rem;
    }
}

.sm {
    height: 1.2rem;
    width: 2.5rem;
    border-radius: 0.6rem;

    span {
        top: 0.15rem;
        left: 0.15rem;
        height: 0.9rem;
        width: 0.9rem;
        border-radius: 0.45rem;
    }
}

.switch-open-sm {

    span {
        left: 1.45rem;
    }
}

.switch-custom {
    display: inline-block;
}
</style>