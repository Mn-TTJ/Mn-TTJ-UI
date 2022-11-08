<template>
  <Transition @before-leave="onClose" @after-leave="destroy">
    <div :style="Style" class="box" ref="box" v-show="render">
      {{ text }}
    </div>
  </Transition>
</template>

<script>
import { defineProps, computed, ref, onMounted } from "vue";
import useProps from "./hooks/useProps";

export default {
  name: "ui-message",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
let box = ref(null);
// 三种类型
let bgc = computed(() => {
  switch (props.type) {
    case "success":
      return "#70c59b";
    case "error":
      return "#fef0f0";
    case "warn":
      return "#f9feb4";
  }
});
let color = computed(() => {
  switch (props.type) {
    case "success":
      return "green";
    case "error":
      return "red";
    case "warn":
      return "orange";
  }
});
const render = ref(false);
onMounted(() => {
  startTimer();
  render.value = true;
});
function startTimer() {
  setTimeout(() => {
    close();
  }, 3000);
}

const Style = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex,
  backgroundColor: bgc.value,
  color: color.value,
}));
function close() {
  render.value = false;
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 50px;
  background-color: #ddd;
  border-radius: 5px;
  transition: all 0.5s;
  text-align: center;
  padding: 15px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -100px);
}
</style>
