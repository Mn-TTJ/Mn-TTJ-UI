<template>
    <div :class=o>
        <div>
            <Row title>
                <slot>
                </slot>
            </Row>
        </div>
        <div class="table-body">
            <div class="table-body-container" :style="{ 'max-height': height }">
                <Row v-for="(item, index) in data" :key="index" :stripe="index % 2 == 1" :data="item">
                    <slot></slot>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
import useTable from './hooks/useTable';
import { tableProps } from './props/index'
import Row from './Row.vue'
// import Column from './Column.vue'
export default {
    name: 'ui-table',
    components: { Row }
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(tableProps);
const { o } = useTable(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/table.scss';
</style>