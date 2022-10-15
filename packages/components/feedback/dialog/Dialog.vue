<template>
  <div v-if="modelValue">
    <div class="dialog">
      <slot></slot>
    </div>
    <div class="mask" @click="closedialog"></div>
  </div>
</template>

<script>
import { ref, defineProps, defineEmits } from "vue";
export default {
  name: "ui-dialog",
};
</script>
<script setup>
// 控制弹窗

// let dialogVisible = ref(true);
// eslint-disable-next-line
const props = defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
// 关闭弹窗
// const closedialog = () => {
//   props.modelValue = !props.modelValue;
// };
</script>

<style scoped lang="scss">
.dialog {
  height: 10%;
  width: 20%;
  background-color: #fff;
  z-index: 2;
  position: absolute;
  margin: auto;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(103, 103, 103, 0.5);
  z-index: 1;
}
</style>
