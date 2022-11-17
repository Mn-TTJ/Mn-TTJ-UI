<template>
  <div class="card" ref="card">
    <header ref="header">
      <slot name="header"></slot>
    </header>
    <div class="hr" v-if="separated"></div>
    <main :style="bodyStyle">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { defineProps } from "vue";

import useProps from "./hooks/useProps";
import { useSlots, onMounted, ref } from "vue";

export default {
  name: "ui-card",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const slots = useSlots();
const header = ref(null);
const card = ref(null);

// 没有header,就不需要分割线
let separated = ref(true);
onMounted(() => {
  if (slots.header) {
    header.value.classList.add("header");
  } else {
    separated.value = false;
  }
  if (props.shadow === "always") {
    card.value.style.boxShadow = "0px 0px 12px rgba(0, 0, 0, 0.12)";
  } else if (props.shadow === "hover") {
    // card.value.style.transition = "all .5s";
    card.value.onmouseover = () => {
      card.value.style.transition = "all .5s";
      card.value.style.boxShadow = "0px 0px 12px rgba(0, 0, 0, 0.12)";
    };
    card.value.onmouseout = () => {
      // card.value.style.transition = "all .5s";
      card.value.style.boxShadow = "none";
    };
  }
});
</script>

<style scoped lang="scss">
.card {
  // box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  .header,
  main {
    padding: 18px 20px;
  }
  .hr {
    height: 1px;
    background-color: #ddd;
  }
  // &:hover {
  //   box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  // }
}
</style>
