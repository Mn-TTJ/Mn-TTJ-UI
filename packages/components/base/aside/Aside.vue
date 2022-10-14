<template>
  <aside class="ui-aside" :style="{ width: width, backgroundColor: bgc }">
    <slot></slot>
  </aside>
</template>

<script>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-aside",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<style scoped lang="scss">
aside {
  display: inline-block;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 200px;
}
</style>
