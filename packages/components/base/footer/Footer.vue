<template>
  <footer
    class="ui-footer"
    :style="{ height: height, lineHeight: height, backgroundColor: bgc }"
  >
    <slot></slot>
  </footer>
</template>
<script>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-footer",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<style lang="scss" scoped>
footer {
  // height: 64px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 64px;
}
</style>
