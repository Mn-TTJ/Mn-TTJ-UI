<template>
    <div class="bread-crumb">
        <template v-for="(crumb,index) in crumbs" :key="index">
            <span :class="{'separator':separator,'arrow':arrow}" :separator="separator" @click="jumpRoute(crumb)"><label
                    v-if="!custom">{{crumb.label}}</label>
                <template v-else>
                    <slot name="crumb"></slot>
                </template></span>
        </template>
    </div>
</template>

<script>
import useProps from './hooks/useProps'
import useCrumbs from './hooks/useCrumbs'
export default {
    name: 'ui-breadcrumb'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const { crumbs, jumpRoute } = useCrumbs(props)
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