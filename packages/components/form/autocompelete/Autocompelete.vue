<template>
    <div class="autocompelete">
        <uiInput v-model="mValue" :parser="parser" :disabled="disabled" :clearable="clearable" :ustyle="ustyle"
            @focus="onFocus" @blur="onBlur" :pre="pre" :behind="behind">
            <template v-if="pre" #pre>
                <slot name="pre"></slot>
            </template>
            <template v-if="behind" #behind>
                <slot name="behind"></slot>
            </template>
        </uiInput>
        <div class="auto-panel" v-if="tips&&panelSwitch" v-show="tips.length!=0">
            <slot name="other"></slot>
            <ul v-if="!panel">
                <li v-for="(tip,index) in tips" :key="index" @click="selectTip(tip)">{{tip}}</li>
            </ul>
            <slot name="panel"></slot>
        </div>
    </div>
</template>

<script>
import useProps from "./hooks/useProps"
import uiInput from "../input/Input.vue"
import { defineEmits, computed, ref } from "vue";
export default {
    name: "ui-autocompelete",
    components: [uiInput]
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
const panelSwitch = ref(false)
const onFocus = () => {
    panelSwitch.value = true
}
const onBlur = () => {
    setTimeout(() => {
        panelSwitch.value = false
    }, 100)
}
const selectTip = (tip) => {
    mValue.value = tip
}
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.autocompelete {
    position: relative;
    max-width: 40rem;
}

.auto-panel {
    position: absolute;
    top: calc(100% + 0.1rem);
    width: 100%;
    background-color: white;
    border: 1px solid #dcdfe6;
    border-radius: 0.1rem;
    overflow: hidden;

    ul {
        list-style: none;

        li {
            padding: 0.2rem 0.5rem;
        }

        li:hover {
            background-color: #f6f7f9;
        }
    }
}
</style>