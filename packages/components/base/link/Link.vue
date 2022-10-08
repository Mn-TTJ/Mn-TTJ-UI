<template>
  <a :style="{
    textDecoration:underline?'underline':''
  }" :class="{disabled:disabled}" :href="href"  target="_blank">{{text}}</a>
</template>

<script setup>
import { defineProps } from "vue";
import useProps from "./hooks/useProps";

const props = defineProps(useProps());
console.log(props);
</script>

<script>
export default {
    name: "ui-link",
};
</script>

<style lang="scss" scoped>
a{
    &:hover{
        text-decoration: underline;
    }
}
.disabled{
color: #d1b8b2;
  border-color: #d1b8b2;
  cursor: not-allowed;
  &:hover{
    text-decoration: none;
  }
}
</style>