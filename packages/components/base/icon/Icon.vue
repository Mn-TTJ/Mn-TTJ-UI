<template>
  <i
    class="iconfont"
    :class="`icon-${icon}`"
    :style="{ fontSize: `${size}px`, color: color }"
  ></i>
</template>

<script>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-icon",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<style lang="scss" scoped>
@import "../../../icon/iconfont.css";
</style>
