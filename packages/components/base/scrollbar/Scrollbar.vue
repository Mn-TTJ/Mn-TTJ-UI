<template>
  <div class="scrollbar" :style="{ height: `${height}px` }" ref="scrollbar">
    <slot></slot>
  </div>
</template>

<script>
import { defineProps, ref, onMounted, onUpdated } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-scrollbar",
  methods: {
    changeBgColor() {
      this.themeColor = "pink";
    },
  },
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const scrollbar = ref(null);
let height = ref(props.height);
onMounted(() => {
  if (scrollbar.value.clientHeight > props.maxHeight) {
    height.value = props.maxHeight;
  }
  // document.getElementsByTagName("body")[0].style.setProperty("--color", "pink");
});
onUpdated(() => {
  console.log("子", scrollbar.value.clientHeight);
  if (scrollbar.value.clientHeight > props.maxHeight) {
    height.value = props.maxHeight;
  }
});
</script>

<style lang="scss" scoped>
* {
  // 兼容火狐
  & {
    scrollbar-width: thin;
    // scrollbar-color: #44bc87 #b9d7ca;
    scrollbar-color: #44bc87;
    // scrollbar-color: v-bind("themeColor");
  }
}
.scrollbar {
  overflow-y: scroll;
  position: relative;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  // background-color: blue;
}
/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  // border-radius: 10px;
  // background-color: v-bind("themeColor");
  background-color: #44bc87;
}
// 滚动轨道 会遮住滚动条原本设置的bgc
::-webkit-scrollbar-track {
  // background-color: #b9d7ca;
}
</style>
