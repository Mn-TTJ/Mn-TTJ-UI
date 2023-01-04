<template>
    <div class="progress" :style="s">
        <template v-if="circle || dashboard">
            <div class="progress-circle" ref="circleSvg">
                <svg v-if="circle" :width="`${2 * c.radius}`" :height="`${2 * c.radius}`">
                    <circle :class="{ 'progress-transition': c.init }" :cx="c.radius" :cy="c.radius" :r="c.radius - 8"
                        fill="none" stroke="#ebeef5" stroke-width="8" stroke-linecap="round"></circle>
                    <circle :class="{ 'progress-transition': c.init }" :cx="c.radius" :cy="c.radius" :r="c.radius - 8"
                        fill="none" :stroke="s['--slider-color']" stroke-width="8" stroke-linecap="round"
                        :stroke-dasharray="`${c.perimeter * percentage / 100},${c.perimeter}`"
                        :transform="`rotate(-90, ${c.radius}, ${c.radius})`"></circle>
                </svg>
                <svg v-else :width="`${2 * c.radius}`" :height="`${2 * c.radius}`">
                    <circle :class="{ 'progress-transition': c.init }" :cx="c.radius" :cy="c.radius" :r="c.radius - 8"
                        fill="none" stroke="#ebeef5" stroke-width="8" stroke-linecap="round"
                        :stroke-dasharray="`${c.perimeter * 75 / 100},${c.perimeter}`"
                        :transform="`rotate(135, ${c.radius}, ${c.radius})`"></circle>
                    <circle :class="{ 'progress-transition': c.init }" :cx="c.radius" :cy="c.radius" :r="c.radius - 8"
                        fill="none" :stroke="s['--slider-color']" stroke-width="8" stroke-linecap="round"
                        :stroke-dasharray="`${c.perimeter * percentage * 75 / 10000},${c.perimeter}`"
                        :transform="`rotate(-225, ${c.radius}, ${c.radius})`"></circle>
                </svg>
                <div class="progress-circle-text">
                    <slot>
                        <p v-if="status == 'success'">&#xec9e;</p>
                        <p v-else-if="status == 'warning'">&#xea76;</p>
                        <p v-else-if="status == 'danger'">&#xe747;</p>
                        <p v-else>{{ percentage + '%' }}</p>
                    </slot>
                </div>
            </div>
        </template>

        <template v-else>
            <div :style="{ 'height': height }" class="progress-track" :class="{ 'progress-inside': inside }">
                <div class="progress-slider" :style="{ 'width': percentage + '%' }">
                    <slot v-if="inside">
                        <p v-if="status == 'success'">&#xec9e;</p>
                        <p v-else-if="status == 'warning'">&#xea76;</p>
                        <p v-else-if="status == 'danger'">&#xe747;</p>
                        <p v-else>{{ percentage + '%' }}</p>
                    </slot>
                </div>
            </div>
            <slot v-if="!inside">
                <p v-if="status == 'success'" class="progress-status">&#xebe5;</p>
                <p v-else-if="status == 'warning'" class="progress-status">&#xe609;</p>
                <p v-else-if="status == 'danger'" class="progress-status">&#xe64d;</p>
                <p v-else>{{ percentage + '%' }}</p>
            </slot>
        </template>
    </div>
</template>

<script>
import { Props } from './props/index'
import useProgress from './hooks/useProgress'
import { ref } from 'vue';
export default {
    name: 'ui-progress'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
const circleSvg = ref(null)
const { s, c } = useProgress(props, circleSvg)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/progress.scss';
</style>