<template>
  <button
    :class="{
      round: round,
      circle: circle,
      noBorder: text,
      large: size === 'large',
      small: size === 'small',
      disabled: disabled || loading,
    }"
    :style="{
      backgroundColor: bgc,
    }"
  >
    <div class="loading">
      <i
        v-if="loading"
        class="iconfont icon-jiazai loading"
        :style="{
          lineHeight:
            size === 'large' ? '40px' : size === 'small' ? '15px' : '28px',
        }"
      ></i>
    </div>

    {{ word }}
    <i
      v-if="icon !== undefined && loading !== true"
      class="iconfont"
      :class="`icon-${icon}`"
      :style="{
        lineHeight:
          size === 'large' ? '40px' : size === 'small' ? '15px' : '28px',
      }"
    ></i>
  </button>
</template>

<script>
import { defineProps, computed } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-button",
};
</script>

<script setup>
const props = defineProps(useProps());
var bgc = computed(() => {
  return props.type === "success" ? "#44bc87" : props.color;
});
</script>

<style lang="scss" scoped>
@import "../../../icon/iconfont.css";
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
  vertical-align: middle;

  &:hover {
    background-color: #ddd;
  }
}

.round {
  border-radius: 15px;
}
.disabled {
  color: #d1b8b2;
  border-color: #d1b8b2;
  cursor: not-allowed;
}
.circle {
  border-radius: 50%;
  padding: 0 6px;
}
.loading {
  display: inline-block;
  animation: rotating 2s infinite;
  // opacity: 0.3;
  // background-color: #ddd;
}
.noBorder {
  border: none;
}
.large {
  height: 40px;
  font-size: 20px;
}
.default {
  height: 30px;
  font-size: 16px;
}
.small {
  height: 20px;
  font-size: 13px;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
