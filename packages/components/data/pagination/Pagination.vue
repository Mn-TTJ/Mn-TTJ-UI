<template>
    <div :class="{ 'page': true, 'page-xl': xl, 'page-sm': sm }" v-if="total > 0"
        v-show="!(onlyPageHidden && p.sum == 1)">
        <p v-if="showTotalList">{{ 'total ' + total }}</p>
        <ul :class="{ 'page-bg': background }">
            <li @click="prePage">&#xe61c;</li>
            <li v-if="p.page[0] != 1" @click="goPage(1)">1</li>
            <li class="page-pre" v-if="p.page[0] > 2" @click="preGroup"></li>
            <li :class="{ 'page-now': p.page[0] + n - 1 == now }" v-for="n in p.page[1]" :key="p.page[0] + n - 1"
                @click="goPage(p.page[0] + n - 1)">{{
                        p.page[0] + n - 1
                }}</li>
            <li class="page-next" v-if="p.page[0] + p.page[1] < p.sum" @click="nextGroup"></li>
            <li v-if="p.page[0] + p.page[1] != p.sum + 1" @click="goPage(p.sum)">{{ p.sum }}</li>
            <li @click="nextPage">&#xe699;</li>
        </ul>
        <div class="page-jump" v-if="jumpBtn">
            <input v-model="jumpPage" />
            <button @click="goSelectPage(jumpPage)">go</button>
        </div>
    </div>
</template>

<script>
import { Props } from './props/index';
import usePagination from './hooks/usePagination'
import { defineEmits, ref } from 'vue'
export default {
    name: 'ui-pagination'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
const emits = defineEmits(['update:modelValue', 'pageChage'])
const jumpPage = ref(1)
const { p, now, goPage, prePage, nextPage, preGroup, nextGroup, goSelectPage } = usePagination(props, emits)
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/pagination.scss';
</style>