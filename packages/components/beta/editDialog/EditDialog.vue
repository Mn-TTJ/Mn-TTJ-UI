<template>
    <div class="dialog" :class="o" v-if="dialogFlag">
        <main :style="{ '--height': height, '--width': width, '--radius': radius, '--color': color }">
            <header>
                <p>{{ title }}</p><button @click="setDialog">&#xe747;</button>
            </header>
            <section>
                <slot></slot>
            </section>
        </main>
    </div>
</template>

<script>
import Props from './props'
import editDialog from './editDialog.js'
import { defineExpose } from 'vue'
export default {
    name: 'ui-edit-dialog'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(Props);
const { o, dialogFlag, setDialog } = editDialog(props)
defineExpose({ setDialog })
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';
@import './scss/editDialog.scss';
</style>
