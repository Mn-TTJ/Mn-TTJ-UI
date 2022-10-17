<template>
  <div class="box">
    <div ref="box">
      <slot></slot>
    </div>
    <!-- <div class="tooltip" v-show="show">{{ content }}</div> -->
    <div class="tooltip" ref="tooltip">
      {{ content }}
      <div :class="placement.split('-').join(' ')"></div>
      <!-- <div class="top start"></div>
      <div class="top"></div>
      <div class="top end"></div>
      <div class="bottom start"></div>
      <div class="bottom"></div>
      <div class="bottom end"></div>
      <div class="left"></div>
      <div class="right"></div> -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted, defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-tooltip",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
let box = ref(null);
let show = ref(false);
let tooltip = ref(null);
onMounted(() => {
  box.value.onmouseover = () => {
    show.value = true;
    tooltip.value.style.opacity = 1;
  };
  box.value.onmouseout = () => {
    show.value = false;
    tooltip.value.style.opacity = 0;
  };
});
// onUnmounted(() => {});
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
  position: relative;
}
.tooltip {
  margin: 20px;
  position: absolute;
  left: 0;
  top: 0;
  // transform: translate(-50%, -50%);
  padding: 5px;
  background-color: #000;
  white-space: nowrap;
  border-radius: 3px;
  max-width: 400px;
  transition: all 0.5s;
  //   transform: translate(-50%, -200%);
  opacity: 0;
}
.top,
.bottom,
.left,
.right {
  position: absolute;
  border: 5px solid transparent;
}
.top {
  border-bottom-color: #000;
  left: 50%;
  top: -10px;
}
.bottom {
  border-top-color: #000;
  bottom: -10px;
  left: 50%;
}
.left {
  border-right-color: #000;
  left: -10px !important;
  top: 50%;
  transform: translateY(-50%);
}
.right {
  border-left-color: #000;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
}
.start {
  left: 22.5%;
}
.end {
  left: 77.5%;
}
</style>
