<template>
  <div class="a">
    <ui-row justify="center">
      <ui-col :colCount="data.colCount1">
        <div>hello</div>
      </ui-col>
      <ui-col :colCount="data.colCount2">
        <div>hello</div>
      </ui-col>
    </ui-row>
    <button @click="a">hello</button>
    <ui-radio :labels="['a', 'b', 'c']" :values="[1, 2]" group="ad" v-model="c"></ui-radio>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
const data = reactive({
  colCount1: 5,
  colCount2: 5
})
const a = () => {
  data.colCount1++
}
const c = ref('2')
watch(c, () => {
  console.log(c.value)
})
</script>

<style scoped>
.a {
  padding: 1rem;
}
</style>