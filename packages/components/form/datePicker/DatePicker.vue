<template>
    <div class="date">
        <div class="date-show" :class="{ 'disabled': disabled }" @click="openPanel"><label>{{ mValue }}</label></div>
        <div class="date-picker" v-if="onPanel && !disabled" @click="isOnPanel">
            <header>
                <button @click="preYear">&#xe62d;</button><button v-show="state == 0"
                    @click="preMonth">&#xe61c;</button>
                <div>
                    <button v-show="state != 1" @click="selectYear">{{ year }}</button>
                    <button v-show="state != 1" @click="selectMonth">{{ MONTH[month - 1]}}</button>
                    <button v-show="state == 1">{{ yearRange+ 1}}--{{ yearRange+ 12}}</button>
                </div>
                <button v-show="state == 0" @click="nextMonth">&#xe699;</button><button
                    @click="nextYear">&#xe62e;</button>
            </header>
            <template v-if="state == 0">
                <section class="date-week" v-if="week">
                    <label :class="{ 'week-select': onWeek == index + 1 && weekState }" v-for="(weekDay, index) in WEEK"
                        :key="index">{{ weekDay }}</label>
                </section>
                <section class="date-day">
                    <label class="last" v-for="n in last[1]" :key="'last' + n" @click="selectDay(1, n + last[0])"
                        @mouseenter="onDay(n)" @mouseleave="unOnDay">{{ n+ last[0]}}</label>
                    <label v-for="n in now[1]" :key="'now' + n" @click="selectDay(2, n)"
                        @mouseenter="onDay(last[1] + n)" @mouseleave="unOnDay">{{ n }}</label>
                    <label class="next" v-for="n in next[1]" :key="'next' + n" @click="selectDay(3, n)"
                        @mouseenter="onDay(last[1] + now[1] + n)" @mouseleave="unOnDay">{{ n }}</label>
                </section>
            </template>
            <template v-if="state == 1">
                <section class="date-year">
                    <label v-for="n in 12" :key="n" @click="setYear(yearRange + n)">{{ yearRange+ n}}</label>
                </section>
            </template>
            <template v-if="state == 2">
                <section class="date-moonth">
                    <label v-for="n in 12" :key="n" @click="setMonth(n)">{{ MONTH[n - 1] }}</label>
                </section>
            </template>
        </div>
    </div>
</template>

<script>
import useProps from './hooks/useProps';
import useDays from './hooks/useDays'
import useOnpanel from './hooks/useOnpanel'
import useForm from '../hooks/useForm'
import { defineEmits, computed, ref, onMounted } from 'vue';
import { WEEK, MONTH } from './const/index'
export default {
    name: 'ui-datepicker'
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
if (!props.noForm) useForm(props.name, mValue, false)
const onPanel = ref(false)
const isOnPanel = useOnpanel(onPanel)
const year = ref(2022)
const month = ref(1)
const onWeek = ref(0)
const { last, now, next } = useDays(year, month)
const state = ref(0)
const weekState = ref(false)
const openPanel = async () => {
    if (props.disabled) return
    isOnPanel()
    onPanel.value = !onPanel.value
}
const selectYear = () => {
    state.value = 1
}
const selectMonth = () => {
    state.value = 2
}
const yearRange = ref(0)
onMounted(() => {
    const format = mValue.value.match(/[0-9]*/g).filter(i => i && i.trim())
    let defDate = ''
    if (format.length >= 1) {
        year.value = parseInt(format[0])
        defDate += format[0]
        if (format.length >= 2) {
            const defMonth = parseInt(format[1])
            if (defMonth >= 1 && defMonth <= 12) {
                month.value = defMonth
            }
            defDate += ('-' + month.value)
            if (format.length >= 3) {
                const defDay = parseInt(format[2])
                const endDay = new Date(year.value, month.value, 0).getDate()
                if (defDay >= 1 && defDay <= endDay) defDate += ('-' + defDay)
                else defDate += '-1'
            }
            else defDate += '-1'
        }
        else defDate += '-1-1'
    }
    else defDate = '2022-1-1'
    if (props.week) defDate += (' ' + WEEK[new Date(defDate).getDay()])
    mValue.value = defDate
    yearRange.value = year.value - 6
})
const selectDay = (sMonth, day) => {
    const nMonth = sMonth == 1 ? month.value - 1 : (sMonth == 2 ? month.value : month.value + 1)
    let nDate = year.value + '-' + nMonth + '-' + day
    if (props.week) nDate += (' ' + WEEK[onWeek.value - 1])
    mValue.value = nDate
    onPanel.value = false
}
const setYear = (value) => {
    year.value = value
    state.value = 2
}
const setMonth = (value) => {
    month.value = value
    state.value = 0
}
const nextMonth = () => {
    if (month.value == 12) {
        year.value++
        month.value = 1
    }
    else month.value++
}
const preMonth = () => {
    if (month.value == 1) {
        year.value--
        month.value = 12
    }
    else month.value--
}
const preYear = () => {
    if (state.value == 1) {
        yearRange.value -= 12
    }
    else year.value--
}
const nextYear = () => {
    if (state.value == 1) {
        yearRange.value += 12
    }
    else year.value++
}
const onDay = (n) => {
    if (!props.week) return
    onWeek.value = (n - 1) % 7 + 1
    weekState.value = true
}
const unOnDay = () => {
    if (!props.week) return
    weekState.value = false
}
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.date {
    position: relative;
    display: flex;
    width: 12rem;
}

.date-show {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
    border: 1px solid #409eff;
    border-radius: 0.2rem;
    width: 12rem;
    height: 2rem;
    background-color: white;

    label {
        width: 100%;
        text-align: center;
    }

    &::before {
        margin-right: 0.4rem;
        font-family: 'iconfont';
        content: '\e63a';
    }
}

.date-picker {
    position: absolute;
    top: calc(100% + 0.2rem);
    width: 20rem;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    background-color: white;
    z-index: 1;
}

header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &>div {
        flex: 1;
        text-align: center;
    }
}

button {
    margin: 0rem 0.2rem;
    font-family: 'iconfont';
    background-color: transparent;
    border: none;
    color: gray;

    &:hover {
        cursor: pointer;
        color: #409eff;
    }
}

section {
    padding: 0.5rem 1rem;
    display: grid;

    label {
        text-align: center;
    }
}

.date-week {
    grid-template-columns: repeat(7, 1fr);

    label {
        font-size: 0.8rem;
    }
}

.date-day {
    grid-template: repeat(6, 1fr)/repeat(7, 1fr);

    label {
        padding: 0.5rem 0rem;
        font-size: 0.8rem;

        &:hover {
            color: #409eff;
            cursor: pointer;
        }
    }
}

.last,
.next {
    opacity: 0.8;
}

.date-year,
.date-moonth {
    grid-template: repeat(3, 1fr)/repeat(4, 1fr);

    label {
        padding: 1rem 0rem;

        &:hover {
            color: #409eff;
            cursor: pointer;
        }
    }
}

.week-select {
    color: #409eff;
}

.disabled {
    border-color: #dcdfe6;
    color: gray;
    cursor: not-allowed;

    label {
        cursor: inherit;
    }
}
</style>