<template>
    <div class="color-contianer">
        <label v-if="show" :style="{'color':mValue,'margin':'0rem 0.2rem'}">{{mValue}}</label>
        <span class="color-picker">
            <span class="color-show" :class="{'disabled':disabled}" :style="{'background-color':mValue}"
                @click="getColor"></span>
            <input type="color" v-model="mValue" ref="picker" />
        </span>
    </div>
</template>

<script>
import { ref, watch, computed, defineEmits, onMounted } from 'vue'
import useProps from "./hooks/useProps"
import useForm from '../hooks/useForm'
export default {
    name: 'ui-colorpicker'
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
const picker = ref(null)
const getColor = () => {
    if (props.disabled) return
    picker.value.click()
}
const checkColor = () => {
    const patte = /^[#][0-9a-f]{6}/
    if (!patte.test(mValue.value)) mValue.value = '#000000'
}
useForm(props.name, mValue, false)
onMounted(() => {
    checkColor()
})
watch(mValue, () => {
    checkColor()
})
</script>

<style scoped>
@import '../../../css/main.css';

.color-contianer {
    display: flex;
    align-items: center;
}

.color-picker {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 1.5rem;
}

input {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    height: 0rem;
    width: 0rem;
    border: 0rem;
    visibility: hidden;
}

.color-show {
    display: inline-block;
    width: 4rem;
    height: 1.5rem;
}

.disabled {
    cursor: not-allowed;
}
</style>
