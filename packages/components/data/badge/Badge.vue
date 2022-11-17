<template>
  <div class="badgeFather">
    <slot></slot>
    <div
      v-if="!isDot && !hidden"
      class="badge"
      :style="{ backgroundColor: bgc }"
    >
      {{ showValue }}
    </div>
    <div v-else-if="!hidden" class="dot"></div>
  </div>
</template>

<script>
import useProps from "./hooks/useProps";
import { defineProps, computed } from "vue";
export default {
  name: "ui-badge",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());

const showValue = computed(() => {
  if (props.value > props.max) {
    return props.max + "+";
  } else {
    return props.value;
  }
});
</script>

<style lang="scss" scoped>
.badgeFather {
  position: relative;
  display: inline-block;
  .badge {
    position: absolute;
    // transform: translateX(-50%);
    top: -40%;
    left: 80%;
    padding: 0.1rem 0.3rem;
    border-radius: 21.6px;
  }
  .dot {
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(50%, -25%);
  }
}
</style>
