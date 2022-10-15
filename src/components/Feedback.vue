<template>
  <ui-alert></ui-alert>
  <button @click="dialogTableVisible = !dialogTableVisible">btn</button>
  <ui-dialog v-model="dialogTableVisible"></ui-dialog>
</template>

<script>
import { ref } from "vue";

export default {};
</script>
<script setup>
let dialogTableVisible = ref(false);
</script>

<style></style>
