<template>
    <div v-html=code></div>
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