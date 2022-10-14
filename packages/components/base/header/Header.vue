<template>
  <header
    class="ui-header"
    :style="{ height: height, lineHeight: height, backgroundColor: bgc }"
  >
    <slot></slot>
  </header>
</template>

<script>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-header",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<style lang="scss" scoped>
.ui-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
