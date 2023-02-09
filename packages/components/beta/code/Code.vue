<template>
    <div class="code" v-html=code></div>
</template>

<script>
export default {
    name: 'ui-code'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps({ code: String });
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.code {
    color: #2c3e50;
}
</style>