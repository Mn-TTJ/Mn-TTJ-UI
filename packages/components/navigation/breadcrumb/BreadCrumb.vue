<template>
    <div class="bread-crumb">
        <template v-for="(nav,index) in navSet" :key="index">
            <span :class="{'separator':separator,'arrow':arrow}" @click="goPath(nav.path)" :separator="separator"><label
                    v-if="!custom">{{nav.label}}</label>
                <template v-else>
                    <slot name="crumb"></slot>
                </template></span>
        </template>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import useProps from './hooks/useProps'
export default {
    name: 'ui-breadcrumb'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const router = useRouter()
const goPath = (path) => {
    if (props.replace) router.replace(path)
    else router.push(path)
}
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.bread-crumb {
    padding: 0.5rem;
    display: flex;
    align-items: center;
}

span {
    display: inline-flex;
    align-items: center;

    &:hover {
        color: #409eff;
        cursor: pointer;
    }

    &:not(:last-child) {

        &::after {
            padding: 0rem 0.5rem;
            content: '/';
            font-family: iconfont;
            font-size: 0.8rem;
            color: #2c3e50;
            opacity: 0.9;
        }
    }
}

.separator:not(:last-child) {
    &::after {
        content: attr(separator);
    }
}

.arrow:not(:last-child) {
    &::after {
        content: '\e699';
    }
}
</style>