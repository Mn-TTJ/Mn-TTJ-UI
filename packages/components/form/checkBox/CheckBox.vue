<template>
    <div class="checkbox">
        <span :class="{'hasBorder':hasBorder,'selected-bgc':hasBorder&&allFlag,'disabled':disabled}" v-if="all"
            @click="selectAll">
            <label v-if="!hasBorder" class="select-box" :class="{'selected-box':allFlag}">&#xec9e;</label>
            <label :class="{'selected-label':allFlag}">全选</label>
        </span>
        <span :class="{'hasBorder':hasBorder,'selected-bgc':hasBorder&&selections[index],'disabled':disabled}"
            v-for="(label,index) in labels" :key="index">
            <input type="checkbox" :id=index v-model="mValue" :value=label :disabled="disabled" />
            <label v-if="!hasBorder" class="select-box" :class="{'selected-box':selections[index]}"
                :for=index>&#xec9e;</label>
            <label :class="{'selected-label':selections[index]}" :for=index>{{label}}</label>
        </span>
    </div>
</template>


<script>
import { watch, computed, reactive, defineEmits, ref } from 'vue';
import useProps from "./hooks/useProps"
import useForm from '../hooks/useForm'
export default {
    name: "ui-checkbox",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const emits = defineEmits(['update:modelValue'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
const selections = reactive([])
const allFlag = ref(false)
const selectAll = () => {
    if (props.disabled) return
    if (allFlag.value) {
        mValue.value = []
        allFlag.value = false
    } else {
        const set = new Set(mValue.value)
        for (let site of props.labels) {
            if (!set.has(site)) {
                set.add(site)
                mValue.value = [...set]
            }
        }
        allFlag.value = true
    }
}
useForm(props.name, mValue, false)
watch(mValue, () => {
    const set = new Set(mValue.value)
    for (let index in props.labels) {
        const label = props.labels[index]
        if (set.has(label)) selections[index] = true
        else selections[index] = false
    }
    if (mValue.value.length == props.labels.length) allFlag.value = true
    else allFlag.value = false
}, { immediate: true })
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.checkbox {
    position: relative;
}

span {
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    background-color: white;

    label {
        user-select: none;
        font-size: 1rem;
        line-height: 1rem;
        cursor: inherit;
    }

    &:hover {
        &>label:nth-last-child(2) {
            border: 1px solid #409eff;
        }

        &>label:nth-last-child(1) {
            color: #409eff;
        }
    }

    .selected-box {
        border: 1px solid #409eff;
        background-color: #409eff;
        color: white;
    }

    .selected-label {
        color: #409eff;
    }
}

input {
    position: absolute;
    width: 0rem;
    height: 0rem;
}

.select-box {
    margin-right: 0.4rem;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    font-family: iconfont;
    font-size: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    color: rgba($color: white, $alpha: 0);
    overflow: hidden;
}

.hasBorder {
    margin: 0rem 0.2rem;
    border: #409eff 1px solid;
    border-radius: 0.2rem;

    .selected-label {
        color: white;
    }
}

.selected-bgc {
    background-color: #409eff;

    &:hover {

        &>label:nth-last-child(1) {
            color: white;
        }
    }
}

.disabled {
    cursor: not-allowed;
    border-color: #a7a3a3;
    background-color: #f3f5f8;

    label {
        color: #a7a3a3 !important;
    }
}
</style>