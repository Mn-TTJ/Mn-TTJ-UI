<template>
    <div :class=o>
        <div class="table-title">
            <Row title>
                <template #left v-if="slot.left">
                    <Column v-if="expand">
                    </Column>
                    <slot name="left"></slot>
                </template>
                <slot>
                </slot>
                <template #right v-if="slot.right">
                    <slot name="right"></slot>
                </template>
            </Row>
        </div>
        <div class="table-body">
            <div class="table-body-container" :style="{ 'max-height': height }">
                <Row v-for="(item, index) in data" :key="index" :stripe="index % 2 == 1" :data="item"
                    :last="index + 1 == data.length">
                    <template #left v-if="slot.left">
                        <column v-if="expand">
                            <span>&#xe699;</span>
                        </column>
                        <slot name="left"></slot>
                    </template>
                    <slot>
                    </slot>
                    <template #right v-if="slot.right">
                        <slot name="right"></slot>
                    </template>
                    <template #expand>
                        <slot name="expand" v-if="slot.expand"></slot>
                    </template>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
import useTable from './hooks/useTable';
import { tableProps } from './props/index'
import Row from './Row.vue'
import Column from './Column.vue'
export default {
    name: 'ui-table',
    components: { Row }
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(tableProps);
const { o, slot } = useTable(props)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/table.scss';
</style>