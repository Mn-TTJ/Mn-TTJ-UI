<template>
  <main
    class="ui-main"
    :style="{ backgroundColor: bgc, height: `${height}px` }"
  >
    <slot></slot>
  </main>
</template>
<script>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-main",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<style scoped lang="scss">
.ui-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 100%;
}
</style>
