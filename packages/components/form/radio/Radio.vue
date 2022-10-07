<template>
    <div v-if="!custom">
        <span :class="{'selected':selected==index,'btn':btn,'selected-full':full&&selected==index}"
            v-for="(label,index) in labels" :key="index" @click="selecteRadio(index)">
            <input type="radio" :id="index+group" :name="group" :value="label" v-model="mValue">
            <label :for="index+group" class="square" v-if="!btn"
                :class="{'circular':circular,'noBorder':noBorder,'tick':tick}"></label>
            <label :for="index+group" class="text">{{label}}</label><br>
        </span>
    </div>
    <!-- 自定义模式 -->
    <div v-if="custom">
        <span v-for="(label,index) in labels" :key="index" @click="selecteRadio(index)">
            <input type="radio" :id="index+group" :name="group" :value="label" v-model="mValue">
            <label :for="index+group">
                <slot name="btn" :selected="selected==index" :label="label"></slot>
            </label>
        </span>
    </div>
</template>

<script>
import useProps from './hooks/useProps';
import { defineEmits, computed, ref, onMounted } from 'vue';
export default {
    name: 'ui-radio'
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
const selected = ref(-1)
const selecteRadio = (index) => {
    selected.value = index
}
onMounted(() => {
    for (let index in props.labels) {
        if (mValue.value == props.labels[index]) selected.value = index
    }
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

span {
    margin: 0rem 0.2rem;
    display: inline-flex;
    align-items: center;

    &:hover {
        .text {
            color: #409eff;
        }
    }
}

input {
    position: absolute;
    width: 0rem;
    height: 0rem;
}

.square {
    margin: 0.2rem;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #409eff;
}

.circular {
    border-radius: 1rem;
}

.noBorder {
    border: none;
}

.selected {
    color: #409eff;

    .square {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            width: 0.8rem;
            height: 0.8rem;
            background-color: #409eff;
            transform: translate(-50%, -50%);
        }
    }

    .circular {
        &::after {
            border-radius: 0.8rem;
        }
    }

    .tick {
        &::after {
            content: '\ec9e';
            font-family: 'iconfont';
            font-size: 0.8rem;
            line-height: 0.8rem;
            background-color: transparent;
            color: #409eff;
        }
    }
}

.btn {
    padding: 0.2rem 0.4rem;
    border: #409eff 1px solid;
    border-radius: 0.2rem;
}

.selected-full {
    background-color: #409eff;
    color: white;

    &:hover {
        .text {
            color: white;
        }
    }
}
</style>