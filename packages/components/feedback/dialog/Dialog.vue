<template>
  <Transition>
    <!-- Transition里只能有一层div -->
    <div v-if="v" ref="root" class="root">
      <!-- 弹窗 -->
      <div
        class="dialog inner"
        ref="dialog"
        :class="{ positionCenter: alignCenter && !fullscreen }"
        :style="{
          width: `${width}px`,
          height: fullscreen ? '100%' : '',
          width: fullscreen ? '100%' : '',
        }"
      >
        <i class="iconfont close" @click.prevent="closedialog">&#xe747;</i>
        <h4 :class="{ center: center }" ref="header">{{ title }}</h4>
        <main>
          <slot>{{ text }}</slot>
        </main>
        <footer :class="{ buttonGroupCenter: center }">
          <slot name="footer"></slot>
        </footer>
      </div>
      <!-- 遮罩 -->
      <div class="mask" @click.prevent="closedialog" v-if="modal"></div>
    </div>
  </Transition>
</template>

<script>
import {
  ref,
  defineProps,
  defineEmits,
  onBeforeUpdate,
  computed,
  watch,
} from "vue";
import useProps from "./hooks/useProps";
import { useDraggable } from "./hooks/useDraggable";
export default {
  name: "ui-dialog",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const emit = defineEmits(["close"]);
const root = ref(null);
const dialog = ref(null);
const header = ref(null);

// 关闭弹窗
const closedialog = () => {
  if (props.handleClose) {
    props.handleClose(() => {
      return !props.visible;
    });
  } else {
    emit("close", !props.visible);
  }
};
// 拖动窗口
const draggable = computed(() => props.draggable);
useDraggable(dialog, header, draggable);
// 去除滚动条
watch(
  () => props.visible,
  (n) => {
    if (n && props.lockScroll) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "initial";
    }
  }
);
let v = ref(props.visible);
onBeforeUpdate(() => {
  // 延迟打开，延迟关闭
  if (props.visible) {
    setTimeout(() => {
      v.value = props.visible;
    }, props.openDelay);
  } else if (props.closeDelay) {
    setTimeout(() => {
      v.value = props.visible;
    }, props.closeDelay);
  } else {
    v.value = props.visible;
  }
});
</script>

<style scoped lang="scss">
@import "../../../css/main.css";
.root {
  position: absolute;
  inset: 0px;
}
.dialog {
  width: 40%;
  background-color: #fff;
  z-index: 2;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 5px 20px 5px #ddd;
  .close {
    position: absolute;
    right: 15px;
    color: rgb(162, 162, 162);
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  h4 {
    text-align: left;
  }
  main {
    margin: 10px 0;
  }
  footer {
    float: right;
    button {
      margin-left: 20px;
    }
  }
  .center {
    text-align: center;
  }
  .buttonGroupCenter {
    text-align: center;
    float: none;
  }
}
.positionCenter {
  top: 37.5%;
}
.mask {
  position: absolute;
  inset: 0px;
  background-color: rgb(103, 103, 103, 0.5);
  z-index: 1;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

// 整个动画阶段
.v-enter-active .inner,
.v-leave-active .inner {
  transition: all 0.3s ease;
}

// 进入动画前和结束后，窗口的动画
.v-enter-from .inner,
.v-leave-to .inner {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
