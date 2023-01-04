<template>
    <slot name="template">
        <SkeletonItem></SkeletonItem>
    </slot>
    <slot></slot>
</template>

<script>
import SkeletonItem from './SkeletonItem.vue';
export default {
    name: 'ui-skeleton',
    components: { SkeletonItem }
}
</script>