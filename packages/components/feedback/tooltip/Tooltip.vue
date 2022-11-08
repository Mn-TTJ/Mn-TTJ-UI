<template>
  <div class="father" @mouseover="show" @mouseout="hide" ref="father">
    <slot></slot>
    <transition>
      <div
        :class="`tooltip pos-${placement}`"
        v-show="showTooltip"
        ref="tooltip"
      >
        <p ref="p">{{ content }}</p>
        <div :class="`triangle ${placement}`" ref="triangle"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import useProps from "./hooks/useProps";
import { defineProps, ref, onMounted } from "vue";
export default {
  name: "ui-tooltip",
};
</script>
<script setup>
const props = defineProps(useProps());
const showTooltip = ref(false);
let tooltip = ref(null);
let triangle = ref(null);
let p = ref(null);
let father = ref(null);
const show = () => {
  showTooltip.value = true;
};
const hide = () => {
  showTooltip.value = false;
};
onMounted(() => {
  if (props.effect === "light") {
    tooltip.value.classList.add("light");
    setBorderColor("#fff");
  } else {
    tooltip.value.classList.add("dark");
    setBorderColor("#000");
  }
  // 是否作为HTML内容处理
  if (props.rawContent) {
    // 不直接覆盖全部是因为小三角形还要存在
    tooltip.value.removeChild(p.value);
    tooltip.value.innerHTML += props.content;
  }
  // 触发方式
  father.value.addEventListener(props.trigger, show);
});
const setBorderColor = (color) => {
  if (props.placement === "top") {
    triangle.value.style.borderTopColor = color;
  } else if (props.placement === "bottom") {
    triangle.value.style.borderBottomColor = color;
  } else if (props.placement === "left") {
    triangle.value.style.borderLeftColor = color;
  } else {
    triangle.value.style.borderRightColor = color;
  }
};
</script>

<style scoped lang="scss">
.father {
  position: relative;
  display: inline-block;
  color: #fff;

  .tooltip {
    position: absolute;
    // background-color: #000;
    padding: 7px 12px;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    box-shadow: 0px 0px 20px 5px #ddd;
    .triangle {
      position: absolute;
      border: 10px solid transparent;
    }
    .bottom {
      border-bottom-color: #000;
      right: 50%;
      transform: translateX(50%);
      top: -20px;
    }
    .top {
      border-top-color: #000;
      right: 50%;
      transform: translateX(50%);
      bottom: -20px;
    }
    .start {
      left: 30%;
      transform: translateX(-50%);
    }
    .end {
      right: 30%;
    }
    .left {
      border-left-color: #000;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
    }
    .right {
      border-right-color: #000;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .pos-top {
    top: -150%;
    left: 50%;
  }
  .pos-bottom {
    // bottom: -120%;
    top: 150%;
    left: 50%;
  }
  .pos-left {
    // left: -100%;
    // top: 50%;
    transform: translateX(-100%);
    left: -20px;
  }
  .pos-right {
    // left: 150%;
    transform: translateX(20px);
    left: 100%;
  }
}
.light {
  background-color: #fff;
  color: #000;
}
.dark {
  background-color: #000;
  color: #fff;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
