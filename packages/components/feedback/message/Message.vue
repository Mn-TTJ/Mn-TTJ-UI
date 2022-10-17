<template>
  <transition>
    <div class="box" v-if="show"></div>
  </transition>
</template>

<script>
import { ref, defineProps, watch } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-message",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
let show = ref();
watch(
  () => props.showMessage,
  (n) => {
    show.value = n;
    setTimeout(() => {
      show.value = !show.value;
    }, 3000);
  }
);
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
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -100px);
  /* transform: translateX(-50%); */
}
</style>
