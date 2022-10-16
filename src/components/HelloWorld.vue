<template>
  <div class="e" ref="e">
    <div class="c"></div>
    <ui-backtop :root="e">
      heelo</ui-backtop>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const e = ref(null)
</script>

<style scoped>
.e {
  height: 30rem;
  width: 20rem;
  overflow: scroll;
}

.c {
  height: 60rem;
  width: 10rem;
  background-color: antiquewhite;
}
</style>