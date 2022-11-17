<template>
  <!-- <div> -->
  <img
    v-if="src || srcset"
    ref="img"
    :src="src"
    :alt="alt"
    :style="{ width: `${size}px`, height: `${size}px`, objectFit: fit }"
    class="avatar"
    :class="shape === 'circle' ? 'circle' : ''"
    :srcset="srcset"
  />
  <i :class="`iconfont icon-${icon}`" class="avatar" v-if="icon && !src"></i>
  <div
    v-if="src === undefined && icon === undefined"
    class="avatar"
    ref="img"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      lineHeight: `${size}px`,
    }"
  >
    <slot></slot>
  </div>

  <!-- </div>  -->
</template>

<script>
import useProps from "./hooks/useProps";
import { computed, defineProps, ref, onMounted } from "vue";
export default {
  name: "ui-avatar",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const img = ref(null);

// size有large,default,small(string),number两种类型
let size = computed(() => {
  if (typeof props.size === "number") {
    return props.size;
  } else {
    if (props.size === "large") {
      return 36;
    } else if (props.size === "small") {
      return 24;
    } else {
      return 30;
    }
  }
});
onMounted(() => {
  img.value.style.width = img.value.clientHeight - 10 + "px";
  img.value.style.lineHeight = img.value.clientHeight - 10 + "px";
});
</script>

<style lang="scss" scoped>
@import "../../../icon/iconfont.css";

.avatar {
  box-sizing: content-box;
  background-color: #ddd;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
.circle {
  border-radius: 50%;
}
</style>
