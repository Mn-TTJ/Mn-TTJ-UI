<template>
  <div
    class="col"
    :style="{
      width: width,
      padding: `5px ${gutter / 2}px`,
      marginLeft: `${marginLeft}px`,
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
import useProps from "./hooks/useProps";
import {
  defineProps,
  computed,
  inject,
  ref,
  onMounted,
  onUnmounted,
} from "vue";
export default {
  name: "ui-col",
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const gutter = inject("gutter"); //从row组件获取列间距

let span = ref(props.colCount); // 用于响应式布局
let windowWidth = ref(0); // 窗口宽度

let width = computed(() => {
  // 元素宽度
  return (span.value / 24) * 100 + "%";
});
const marginLeft = computed(() => {
  // 偏移量
  if (props.offset) {
    return (props.offset / 24) * windowWidth.value;
  }
  return 0;
});

const setSpanWidth = () => {
  windowWidth.value = window.innerWidth;
  if (props.colCount === undefined) {
    if (window.innerWidth > 1920) {
      span.value = props.xl;
    } else if (window.innerWidth > 1200) {
      span.value = props.lg;
    } else if (window.innerWidth > 992) {
      span.value = props.md;
    } else if (window.innerWidth > 768) {
      span.value = props.sm;
    } else {
      span.value = props.xs;
    }
  }
};

onMounted(() => {
  // 初始化 没有设置colCount（响应式布局）
  setSpanWidth();
  window.addEventListener("resize", setSpanWidth);
});
onUnmounted(() => {
  // 组件销毁，取消监听事件
  window.removeEventListener("resize", () => {
    setSpanWidth();
  });
});
</script>

<style lang="scss" scoped>
.col {
  display: inline-block;
  padding: 5px 0;
}
</style>
