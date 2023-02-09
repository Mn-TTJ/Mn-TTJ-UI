<template>
  <button :class="{
    round: round,
    circle: circle,
    noBorder: text,
    large: size === 'large',
    small: size === 'small',
    disabled: disabled || loading,
  }" class="ui-button" :style="{
  backgroundColor: color,
}" @click="submit">
    <div class="loading">
      <!-- 加载图标 -->
      <i v-if="loading" class="iconfont icon-jiazai loading" :style="{
        lineHeight:
          size === 'large' ? '40px' : size === 'small' ? '15px' : '28px',
      }"></i>
    </div>

    <slot>{{ label }}</slot>
    <!-- 图标 -->
    <i v-if="icon !== undefined && loading !== true" class="iconfont" :class="`icon-${icon}`" :style="{
      lineHeight:
        size === 'large' ? '40px' : size === 'small' ? '15px' : '28px',
    }"></i>
  </button>
</template>

<script>
import { defineProps, inject } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-button",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());

// 表单
if (props.submit) {
  const submitEvent = inject("submit");
  const submit = (success, error) => {
    submitEvent()
      .then((formDate) => success(formDate))
      .catch((Err) => error(Err));
  };
}
</script>

<style lang="scss" scoped>
@import "../../../icon/iconfont.css";

.ui-button {
  padding: 0px 10px;
  font-size: 16px;
  font-weight: 100;
  height: 30px;
  transition: all 0.5s;
  border-radius: 0.3rem;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid rgb(199, 199, 199);
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
}

.ui-button+.ui-button {
  margin-left: 12px;
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
