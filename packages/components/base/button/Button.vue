<template>
  <button
    :class="{ round: round, disabled: disabled, circle: circle }"
    :style="{
      height: size === 'large' ? '40px' : size === 'small' ? '20px' : '30px',
      fontSize: size === 'large' ? '20px' : size === 'small' ? '13px' : '16px',
      backgroundColor: color,
      backgroundColor: bgc,
      border: text === true ? 'none' : '1px solid #b8b8b8',
    }"
  >
    {{ word }}
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
import useProps from "./hooks/useProps";

const props = defineProps(useProps());

var bgc = computed(() => {
  return props.type === "success" ? "#44bc87" : props.color;
});
</script>

<script>
export default {
  name: "ui-button",
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid rgb(199, 199, 199);
  border-radius: 0.3rem;
  background-color: transparent;
  padding: 0px 10px;
  font-size: 16px;
  font-weight: 100;
  height: 30px;
  margin-right: 10px;
  transition: all 0.5s;
  &:hover {
    background-color: #ddd;
  }
}

.round {
  border-radius: 20rem;
}
.disabled {
  color: #d1b8b2;
  border-color: #d1b8b2;
  cursor: not-allowed;
}
.circle {
  border-radius: 50%;
}
</style>
