<template>
  <a
    :style="{
      textDecoration: underline ? 'underline' : '',
      color: color,
    }"
    :class="{ disabled: disabled }"
    :href="href"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<script>
export default {
  name: "ui-link",
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: blue;
  }
}
.disabled {
  color: #d1b8b2;
  border-color: #d1b8b2;
  cursor: not-allowed;
  &:hover {
    text-decoration: none;
    color: #d1b8b2;
  }
}
</style>
