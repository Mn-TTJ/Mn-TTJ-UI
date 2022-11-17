<template>
  <!-- <div
    :style="{
      height: '20px',
    }"
  ></div> -->
  <ui-avatar
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    size="large"
    shape="circle"
    alt="11111"
    fit="contain"
    icon="jiazai"
  >
    1111
  </ui-avatar>
  <ui-badge :value="value" :max="99" bgc="#44bc87" hidden>
    <ui-button @click="add">btn</ui-button>
  </ui-badge>

  <!-- <ui-card class="box-card" shadow="always">always</ui-card>
  <ui-card class="box-card" shadow="hover">always</ui-card>
  <ui-card class="box-card" shadow="never">always</ui-card> -->
  <ui-card class="box-card" shadow="never" :body-style="{ padding: 0 }">
    always
  </ui-card>
</template>

<script setup>
import { ref } from "vue";
const src = require("../assets/logo.png");

const value = ref(90);

const add = () => {
  value.value++;
};
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-around;
}
.box-card {
  // width: 480px;
  background-color: #44bc87;
}
</style>
