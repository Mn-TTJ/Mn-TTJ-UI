<template>
    <div class="textarea-base">
        <div class="text-input" :class="{'disabled':disabled,'resizable':resizable,'lessInput':lessInput}"
            :contenteditable="!disabled" @input="inputEvent" ref="tArea" :placeholder="parser" :style="ustyle"></div>
        <textarea class="hidden-input" v-model="mValue"></textarea>
        <p v-if="min" :class="{'input-p-hidden':!lessInput}">*输入字符不足{{min}}个*</p>
    </div>
</template>

<script>
import useProps from "./hooks/useProps"
import useMin from "../hooks/useMin"
import { computed, defineEmits, onMounted, ref, watch } from "vue";
export default {
    name: "ui-textarea",
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
const lessInput = useMin(props)
const tArea = ref(null)
const inputEvent = () => {
    let text = tArea.value.innerHTML
    if (props.max && text.length > props.max) {
        text = text.substr(0, props.max)
        tArea.value.innerHTML = text
        tArea.value.blur()
    }
    mValue.value = text
}
onMounted(() => {
    if (mValue.value)
        tArea.value.innerHTML = mValue.value
    if (props.minRow)
        tArea.value.style.minHeight = `${1 + props.minRow}rem`
    if (props.maxRow)
        tArea.value.style.maxHeight = `${1 + props.maxRow}rem`

})
watch(mValue, () => {
    if (mValue.value && (tArea.value.innerHTML != mValue.value))
        tArea.value.innerHTML = mValue.value
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.textarea-base {
    position: relative;
}

.text-input {
    padding: 0.4rem;
    min-height: 2rem;
    width: 100%;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    outline: none;
    line-height: 1rem;
    font-size: 1rem;
    overflow: auto;
    background-color: white;

    &:focus {
        border-color: #409eff;
        caret-color: gray;
    }

    &:empty::before {
        content: attr(placeholder);
        color: #bbb;
    }

    &::-webkit-scrollbar {
        display: none;
    }
}

.hidden-input {
    position: absolute;
    height: 0rem;
    width: 0rem;
    border: 0rem;
    overflow: hidden;
}

.resizable {
    resize: vertical;
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
    position: absolute;
    font-size: 0.75rem;
    color: red;
    text-align: left;
    transition-duration: 0.3s;
}

.input-p-hidden {
    opacity: 0;
}
</style>