<template>
  <div>
    <ui-drawer v-model="a" bottom altitude="30%"></ui-drawer>
    <button @click="b">aaa</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const a = ref(false)
const b = () => {
  a.value = true
}
</script>