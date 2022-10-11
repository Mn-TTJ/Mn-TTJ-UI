<template>
  <div class="scrollbar" :style="{ height: `${height}px` }" ref="scrollbar">
    <div class="container" ref="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineProps, onMounted, ref } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-scrollbar",
};
</script>

<script setup>
const props = defineProps(useProps());
let scrollbar = ref(null);
let container = ref(null);
onMounted(() => {
  let width = container.value.clientWidth;
  let height = container.value.clientHeight;
  if (height > props.height) {
    scrollbar.value.classList.add("overflowY");
  }
  if (width > window.outerWidth) {
    scrollbar.value.classList.add("overflowX");
  }
});
</script>

<style lang="scss" scoped>
.scrollbar {
  background-color: pink;
}
.overflowY {
  overflow-y: scroll;
}
.overflowX {
  overflow-x: scroll;
}
/* 整个滚动条 */
::-webkit-scrollbar {
  width: 5px;

  //   background-color: transparent;
  background-color: blue;
}

/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;

  background-color: #44bc87;
}
// 滚动轨道 会遮住滚动条原本设置的bgc
::-webkit-scrollbar-track {
  background-color: #b9d7ca;
}
.container {
  display: inline-block;
}
</style>
