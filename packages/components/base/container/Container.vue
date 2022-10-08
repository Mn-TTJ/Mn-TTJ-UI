<template>
  <section
    class="container"
    :style="{ flexDirection: isVertical ? 'column' : 'row' }"
  >
    <slot></slot>
  </section>
</template>

<script setup>
import { useSlots, computed } from "vue";
const slots = useSlots();
let isVertical = computed(() => {
  if (slots && slots.default) {
    const vNodes = slots.default();
    return vNodes.some((vNode) => {
      const tag = vNode.type.name;
      return tag === "ui-header" || tag === "ui-footer";
    });
  } else {
    return false;
  }
});
</script>

<script>
export default {
  name: "ui-container",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  // display: inline-block;
}
</style>
