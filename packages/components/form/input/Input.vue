<template>
    <div class="input-base">
        <p v-if="min" :class="{'input-p-hidden':!lessInput}">*输入字符不足{{min}}个*</p>
        <div class="input-container">
            <span class="pre-span" v-if="pre">
                <slot name="pre"></slot>
            </span>
            <div class="input-box" :class="{'clearable':clearable}" @click="clearInput">
                <input :class="{'lessInput':lessInput,'pre-border':pre,'behind-border':behind,'disabled':disabled}"
                    :style="ustyle" v-model="mValue" :disabled="disabled" :placeholder="parser" :maxlength="max"
                    :type="password?'password':'text'" @focus="$emit('focus')" @blur="$emit('blur')" ref="input" />
            </div>
            <span class="behind-span" v-if="behind">
                <slot name="behind"></slot>
            </span>
        </div>
    </div>
</template>
    
<script>
import useProps from "./hooks/useProps"
import useMin from "../hooks/useMin"
import { defineEmits, computed } from "vue";
export default {
    name: "ui-input",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const emits = defineEmits(['update:modelValue', 'focus', 'blur'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
const lessInput = useMin(props)
const clearInput = (event) => {
    const target = event.srcElement ? event.srcElement : event.target;
    if (target.tagName != 'INPUT') {
        mValue.value = ''
    }
}
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.input-base {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 40rem;
}

.input-container {
    position: relative;
    display: flex;
}

.input-box {
    position: relative;
    flex: 1;
}

/*
输入框
*/
input {
    padding: 0.3rem 0.5rem;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    font-size: 1rem;
    height: 2rem;
    width: 100%;
    outline: none;
    caret-color: #409eff;
    background-color: white;
}

input:focus {
    border: 1px solid #409eff;
}

/*
最小字数预警
*/
.lessInput {
    border-color: red;

    &:focus {
        border-color: #409eff;
    }
}

p {
    padding: 0.1rem 0rem;
    font-size: 0.8rem;
    color: red;
    text-align: left;
    transition-duration: 0.3s;
}

.input-p-hidden {
    opacity: 0;
}

/*
清空按钮
*/
.clearable {
    pointer-events: none;

    input {
        padding-right: 2rem;
        pointer-events: auto;
    }

    &::after {
        content: '\e64d';
        font-family: 'iconfont';
        font-size: 1rem;
        position: absolute;
        right: 0.5rem;
        top: 50%;
        display: block;
        transform: translateY(-50%);
        color: #dcdfe6;
        cursor: pointer;
        pointer-events: auto;
    }

    &:hover:after {
        color: #409eff;
    }
}

/*

*/
span {
    display: inline-block;
    height: 2rem;
    overflow: hidden;
}

.pre-span {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
}

.behind-span {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
}

.pre-border {
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
}

.behind-border {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
}
</style>