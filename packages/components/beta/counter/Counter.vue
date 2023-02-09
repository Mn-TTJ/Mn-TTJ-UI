<template>
    <div class="counter" :class="o">
        <button @click="subEvent">&#xe60a;</button>
        <input v-model="mValue" ref="input" />
        <button @click="addEvent">&#xeaf3;</button>
    </div>
</template>

<script>
import Props from './props'
import counter from './counter.js'
import { computed, ref } from 'vue';
import useForm from '../../form/hooks/useForm'
export default {
    name: 'ui-counter'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
// eslint-disable-next-line
const emits = defineEmits(['update:modelValue'])
const { o, filter, add, sub } = counter(props)
const input = ref(null)
const filterValue = filter(input)
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', filterValue(val))
})
const addEvent = add(mValue)
const subEvent = sub(mValue)
useForm(props.name, mValue, false)
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/counter.scss';
</style>
