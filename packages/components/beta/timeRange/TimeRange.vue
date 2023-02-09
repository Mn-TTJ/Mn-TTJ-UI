<template>
    <div class="time-range">
        <ui-timepicker v-model="time[0]" :max="max[0] > time[1] ? time[1] : max[0]" :min="min[0]" :disabled="disabled"
            no-form></ui-timepicker>
        <label>to</label>
        <ui-timepicker v-model="time[1]" :max="max[1]" :min="min[1] < time[0] ? time[0] : min[1]" :disabled="disabled"
            no-form></ui-timepicker>
    </div>
</template>

<script>
import UiTimepicker from '../timePicker/TimePicker.vue'
import Props from './props'
import useForm from '../../form/hooks/useForm';
import { ref, watch } from 'vue'
export default {
    name: 'ui-timeRange',
    components: { UiTimepicker }
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
// eslint-disable-next-line
const emits = defineEmits(['uptime:modelValue'])
const time = ref(props.modelValue)

watch(() => props.modelValue, () => {
    time.value = props.modelValue
})

useForm(props.name, time.value, false)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/timeRange.scss';
</style>
