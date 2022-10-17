<template>
  <div ref="box" class="box"><slot></slot></div>
  <!-- 确认框 -->
  <div class="confirm" ref="confirm">
    <p>{{ title }}</p>
    <ui-button size="small" @click="cancel" text>
      {{ cancelButtonText }}
    </ui-button>
    <ui-button color="#44bc87" size="small" @click="confirm12">
      {{ confirmButtonText }}
    </ui-button>
  </div>
</template>

<script>
import {
  defineProps,
  ref,
  onMounted,
  watch,
  defineEmits,
  onUpdated,
} from "vue";
import useProps from "./hooks/useProps";
import Button from "../../base/button/Button.vue";
export default {
  name: "ui-popconfirm",
  components: {
    Button,
  },
};
</script>
<script setup>
const props = defineProps(useProps());

let box = ref(null);
let btn = ref(null);
let target;
let show = ref(true);
let confirm = ref(null);
let width = ref(window.innerWidth);

const emit = defineEmits(["confirm", "cancel"]);
onUpdated(() => {
  console.log(window.innerWidth);
});
onMounted(() => {
  // 设置只显示第一个元素，且只绑定他
  for (let i = 1; i < box.value.childNodes.length - 1; i++) {
    if (box.value.childNodes[i].nodeName !== "#comment") {
      if (box.value.childNodes[i].nodeName === "#text") {
        let firstNode = box.value.childNodes[i];
        box.value.innerHTML = box.value.childNodes[i].data;
        break;
      } else {
        let firstNode = box.value.childNodes[i];
        box.value.innerHTML = box.value.childNodes[i].outerHTML;
        break;
      }
    }
  }
  box.value.onclick = () => {
    confirm.value.style.left = `${box.value.offsetLeft}px`;

    confirm.value.style.display = "block";
    if (confirm.value.style.opacity === "1") {
      confirm.value.style.opacity = 0;
      show.value = false;
    } else {
      confirm.value.style.opacity = 1;
      show.value = true;
    }
  };
  // div失焦
  document.addEventListener("click", (e) => {
    if (!box.value.contains(e.target)) {
      confirm.value.style.opacity = 0;
      show.value = false;
    }
  });
  window.addEventListener("resize", () => {
    confirm.value.style.left = `${box.value.offsetLeft}px`;
  });
});

const cancel = () => {
  // console.log("cancel");
  emit("cancel");
};
const confirm12 = () => {
  // console.log("confirm");
  emit("confirm");
};
// 待过渡动画执行完再设置display:none
watch(
  () => show.value,
  (n) => {
    if (n === true) {
      confirm.value.style.display = "block";
    } else {
      setTimeout(() => {
        confirm.value.style.display = "none";
      }, 300);
    }
  }
);
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
}
.confirm {
  display: none;
  position: absolute;
  // max-width: 200px;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px #ddd;
  margin: 10px 0;
  border-radius: 5px;
  animation: show 0.3s;
  transition: all 0.3s;
  p {
    margin-bottom: 10px;
  }
  &::before {
    content: "";
    border: 8px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -16px;
    left: 15px;
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
