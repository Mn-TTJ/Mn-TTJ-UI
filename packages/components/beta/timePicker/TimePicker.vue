<template>
    <div class="time-picker" :class="{ 'disabled': disabled }" @click.stop>
        <div class="time-input" :class="{ 'pick': timePickFlag }" @click="pick">
            <label>{{ hh }}</label><label>:</label><label>{{ mm }}</label><label>:</label><label>{{
                ss
            }}</label>
        </div>
        <div class="time-shower" v-if="timePickFlag">
            <div class="time-select" v-for="(site, index) in [hh, mm, ss]" :key="index">
                <button @click="setTime(index, true)">&#xeaf3;</button>
                <label>{{ site }}</label>
                <button @click="setTime(index, false)">&#xe60a;</button>
            </div>
        </div>
    </div>
</template>

<script>
import timePicker from './timePicker';
import Props from './props'
import useForm from '../../form/hooks/useForm';
import { computed } from 'vue';
export default {
    name: 'ui-timepicker'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
// eslint-disable-next-line
const emits = defineEmits(['update:modelValue'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
const { time, timePickFlag, setTime } = timePicker(props, mValue)
const pick = () => {
    if (props.disabled) return
    timePickFlag.value = true
}
const hh = computed(() => {
    if ((time.value[0] + '').length == 1) return '0' + time.value[0]
    else return '' + time.value[0]
})
const mm = computed(() => {
    if ((time.value[1] + '').length == 1) return '0' + time.value[1]
    else return '' + time.value[1]
})
const ss = computed(() => {
    if ((time.value[2] + '').length == 1) return '0' + time.value[2]
    else return '' + time.value[2]
})
if (!props.noForm) useForm(props.name, mValue, false)
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/timePicker.scss';
</style>