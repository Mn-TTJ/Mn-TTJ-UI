<template>
  <div class="a">
    <ui-tips ref="d"></ui-tips>
  </div>
  <button @click="e">hello</button>
  <div class="b">
    <div class="c"></div>
    <ui-line color="red" dashed vertical></ui-line>
  </div>
  <ui-textarea v-model="ee"></ui-textarea>
  <div class="e">
    <ui-counter :disabled="false"></ui-counter>
  </div>
  <ui-dropdown :options="options" hasBorder text="hello"></ui-dropdown>
</template>

<script setup>
import { ref } from 'vue';
const a = () => { console.log(0) }
const options = [{ label: 'hello', callBack: a }, { label: 'world' }, { label: 'ge' }]

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

.e {
  cursor: not-allowed;
}
</style>