<template>
  <div class="a">
    <ui-tips ref="d"></ui-tips>
  </div>
  <button @click="e">hello</button>
  <div class="b">
    <div class="c"></div>
    <ui-line color="red" dashed vertical></ui-line>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const d = ref(null)
const ee = `<p>hello</p>`
const e = () => {
  console.log(ee.value)
}
</script>

<style scoped>
.a {
  padding: 1rem;
}

.b {
  display: flex;
}

.c {
  height: 80px;
}
</style>