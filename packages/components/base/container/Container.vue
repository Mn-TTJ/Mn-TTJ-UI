<template>
  <section
    class="container"
    :style="{ flexDirection: isVertical ? 'column' : 'row' }"
  >
    <slot></slot>
  </section>
</template>

<script>
import { useSlots, computed } from "vue";
export default {
  name: "ui-container",
};
</script>
<script setup>
// eslint-disable-next-line
const slots = useSlots();
// 根据slot内容判断是上下布局还是左右布局
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

<style lang="scss" scoped>
.container {
  display: flex;
  flex-grow: 1;
}
</style>
