<template>
    <div v-if="circular" class="ui-skeleton-circular" :class="{ 'ui-skeleton-animation': load }"
        :style="{ '--radius': radius }"></div>
    <div v-else-if="rect" class="ui-skeleton-rect" :class="{ 'ui-skeleton-animation': load }"
        :style="{ '--height': height ? height : '1rem', '--width': width ? width : '100%' }">
    </div>
    <div v-else-if="image" class="ui-skeleton-image" :class="{ 'ui-skeleton-animation': load }"
        :style="{ '--height': height ? height : '12rem', '--width': width ? width : '16rem' }">
        <label>&#xec7f;</label>
    </div>
    <template v-else>
        <div v-for="(items, index) in text" :key="index" class="ui-skeleton-text-row"
            :style="{ '--width': items instanceof Array ? '10' : items }">
            <template v-if="(items instanceof Array)">
                <div v-for="(item, index) in items" :key="index" class="ui-skeleton-col"
                    :class="{ 'ui-skeleton-animation': load }"
                    :style="{ '--width': item, '--space': items.length - 1 }">
                </div>
            </template>
            <div v-else class="ui-skeleton-col" :class="{ 'ui-skeleton-animation': load }"
                :style="{ '--width': items, '--space': 0 }"></div>
        </div>
    </template>
</template>

<script>
import { skeletonItemProps } from './props/index'
import useSkeletonItem from './hooks/skeletonItem'
export default {
    name: 'ui-skeleton-item'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(skeletonItemProps);
useSkeletonItem(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/index.scss'
</style>