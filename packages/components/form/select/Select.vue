<template>
    <div class="selector">
        <template v-if="shower">
            <slot name="shower" :onSelect="onPanel" :lazy="lazy"></slot>
        </template>
        <div v-if="!shower" class="selector-show"
            :class="{'on-selector':onPanel,'disabled':disabled,'lazy':lazy&&!onPanel}" :style="uStyle"
            @click="openPanel">
            <label>{{mValue}}</label>
        </div>
        <div v-if="!disabled" class='select-panel' :class="{'on-panel':onPanel}">
            <ul v-if="!multiple">
                <li v-for="(value,index) in dataSet" :key="index" @click="setValue(value)">
                    <div v-if="!panel" class="panel-defalut">{{value}}</div>
                    <template v-if="panel">
                        <slot name="panel" :item="value"></slot>
                    </template>
                </li>
            </ul>
            <template v-if="multiple">
                <ul v-for="(group,gIndex) in multipleDate" :key="gIndex">
                    <li v-for="(site,index) in group" :key="index" @click="setMultipleValue(gIndex+1,index,site)">
                        <div v-if="!panel" class="panel-defalut"
                            :class="{'hasChild':site.hasChild,'hadSelected':multiplePath[gIndex]==index,'lazy':lazy&&site.hasChild&&(gIndex+1)==multiplePath.length&&multiplePath[gIndex]==index}">
                            {{site.value}}
                        </div>
                        <template v-if="panel">
                            <slot name="panel" :item="value" :hasChild="hasChild"
                                :hadSelected="multiplePath[gIndex]==index"></slot>
                        </template>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
import { ref, defineEmits, computed } from 'vue'
import useProps from './hooks/useProps';
import useOnpanel from './hooks/useOnpanel'
import useMultiple from './hooks/useMultiple'
import useForm from '../hooks/useForm'
export default {
    name: 'ui-select'
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
useForm(props.name, mValue, false)
const onPanel = ref(false)
const isOnPanel = useOnpanel(onPanel)
const openPanel = async () => {
    if (props.disabled) return
    isOnPanel()
    if (props.lazy && multipleDate.value.length == 0) await setMultipleValue(-1, -1, null)
    onPanel.value = !onPanel.value
}
const setValue = (value) => {
    mValue.value = value
}
const { multipleDate, multiplePath, lazy, setMultipleValue } = useMultiple(props, isOnPanel, mValue)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.selector {
    position: relative;
    display: inline-block;
}

.selector-show {
    padding: 0rem 2rem 0rem 0.5rem;
    display: flex;
    align-items: center;
    height: 2rem;
    width: 12rem;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    background-color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::after {
        content: '\e6cc';
        position: absolute;
        right: 0.5rem;
        font-family: iconfont;
    }

    &:hover {
        cursor: pointer;
        border-color: #409eff;

        &::after {
            color: #409eff;
        }
    }
}

.on-selector {
    border-color: #409eff;

    &::after {
        color: #409eff;
    }
}

.select-panel {
    position: absolute;
    display: none;
    width: 100%;
    z-index: 1;
}

.on-panel {
    display: flex;
    align-items: flex-start;
}

ul {
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    width: 100%;
    list-style: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: white;
    overflow: hidden;
    border-radius: 0.2rem;
    flex-shrink: 0;
    overflow: hidden;

    li {
        position: relative;
    }
}

.panel-defalut {
    padding: 0.5rem;

    &:hover {
        background-color: #f4f5f8;
        color: #409eff;
    }
}

.hasChild {
    padding-right: 1.5rem;

    &::after {
        content: '\e699';
        position: absolute;
        right: 0.5rem;
        font-family: iconfont;
    }
}

.hadSelected {
    color: #409eff;
}

.disabled {
    cursor: not-allowed !important;
    border: 1px solid #dcdfe6 !important;
    color: #dcdfe6 !important;

    label {
        cursor: not-allowed !important;
    }

    &::after {
        color: #dcdfe6 !important;
    }
}

.lazy {
    &::after {
        content: '\e634';
        animation: lazy 2s infinite;
    }
}

@keyframes lazy {
    0% {
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
}
</style>