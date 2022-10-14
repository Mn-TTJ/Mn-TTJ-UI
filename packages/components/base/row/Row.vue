<template>
  <div :style="{ justifyContent: justify }" class="row"><slot></slot></div>
</template>
<script>
import { defineProps, provide } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-row",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
provide("gutter", props.gutter); // 将列间距传给col组件
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
