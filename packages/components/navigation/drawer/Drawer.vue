<template>
    <div class="drawer" :class="{ 'drawer-close': mValue }" v-if="mDrawer" @click="close">
        <div class="drawer-contianer drawer-contianer-close" :style="uStyle" @click.stop>
            <div class="drawer-header" v-if="!noHeader">
                <div class="drawer-title">
                    <slot name="title"></slot>
                </div>
                <button @click="close">&#xe747;</button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { drawerProps } from './props';
import { computed, defineEmits, ref, watch, reactive } from 'vue'
export default {
    name: 'ui-drawer'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(drawerProps);
const emits = defineEmits(['update:modelValue'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
const close = () => {
    mValue.value = false
}
const altitude = ref('0rem')
altitude.value = mValue.value ? props.altitude : '0rem'
const mDrawer = ref(mValue.value)
const uStyle = reactive({
    'width': computed(() => {
        if (props.bottom || props.top) return '100%'
        else return altitude.value
    }),
    'height': computed(() => {
        if (props.bottom || props.top) return altitude.value
        else return '100%'
    }),
    'background-color': computed(() => props.color),
    'left': computed(() => {
        if (props.right || props.bottom || props.top) return 'auto'
        else return '0rem'
    }),
    'right': computed(() => {
        if (props.right && !props.bottom && !props.top) return '0rem'
        else return 'auto'
    }),
    'bottom': computed(() => {
        if (props.bottom && !props.top) return '0rem'
        else return 'auto'
    }),
    'top': computed(() => {
        if (props.top) return '0rem'
        else return 'auto'
    })
})
watch(mValue, () => {
    if (mValue.value) {
        mDrawer.value = true
        setImmediate(() => {
            altitude.value = props.altitude
        })
    }
    else {
        setTimeout(() => {
            mDrawer.value = mValue.value
        }, 300)
        altitude.value = '0rem'
    }
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.drawer {
    position: fixed;
    left: 0rem;
    top: 0rem;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    transition-duration: 0.5s;
    z-index: 2001;
    animation: drawerOpen 0.5s;
}

.drawer-contianer {
    position: absolute;
    height: 100%;
    background-color: white;
    transition-duration: 0.5s;
    overflow: hidden;
}

.drawer-close {
    background-color: rgba(0, 0, 0, .5);
}

.drawer-header {
    padding: 1rem;
    display: flex;
}

.drawer-title {
    flex: 1;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: iconfont;
    font-size: 1.2rem;

    &:hover {
        color: #409eff;
    }
}

@keyframes drawerOpen {
    0% {
        background-color: rgba(0, 0, 0, 0);
    }

    100% {
        background-color: rgba(0, 0, 0, .5);
    }
}
</style>