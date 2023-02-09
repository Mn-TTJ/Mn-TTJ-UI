<template>
    <div class="date-range">
        <ui-datePicker v-model="date[0]" :week="week" :disabled="disabled" no-form></ui-datePicker>
        <label>to</label>
        <ui-datePicker v-model="date[1]" :week="week" :disabled="disabled" no-form></ui-datePicker>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import UiDatePicker from '../../form/datePicker/DatePicker.vue'
import Props from './props'
import useForm from '../../form/hooks/useForm';
export default {
    name: 'ui-dateRange',
    components: { UiDatePicker }
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
// eslint-disable-next-line
const emits = defineEmits(['update:modelValue'])
const date = ref(props.modelValue)

watch(() => date.value[0], () => {
    if (date.value[1] != '') {
        const pre = new Date(date.value[0]).getTime()
        const last = new Date(date.value[1]).getTime()
        if (pre > last) date.value[0] = date.value[1]
    }
    emits('update:modelValue', date.value)
})
watch(() => date.value[1], () => {
    if (date.value[0] != '') {
        const pre = new Date(date.value[0]).getTime()
        const last = new Date(date.value[1]).getTime()
        if (pre > last) date.value[1] = date.value[0]
    }
    emits('update:modelValue', date.value)
})

watch(() => props.modelValue, () => {
    date.value = props.modelValue
})

useForm(props.name, date.value, false)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/dateRange.scss';
</style>
