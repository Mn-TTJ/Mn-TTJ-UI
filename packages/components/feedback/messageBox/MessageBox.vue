<template>
  <ui-dialog
    align-center
    :visible="dialogTableVisible"
    @close="close"
    :title="title"
    :width="800"
    :handleClose="handleClose"
    :modal="true"
    :center="center"
    :draggable="draggable"
  >
    <i class="iconfont icon-warning warning" v-if="hasCancel"></i>
    {{ text }}
    <div v-if="inputType">
      <input
        :type="inputType"
        v-if="inputType !== ''"
        :style="{ width: '100%' }"
        v-model="inputValue"
      />
    </div>
    <template #footer>
      <ui-button @click="cancel" v-if="hasCancel">取消</ui-button>
      <ui-button color="#44bc87" @click="submit">确定</ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import uiDialog from "../dialog/Dialog";
import uiButton from "../../base/button/Button.vue";
import uiInput from "../../form/input/Input.vue";

import useProps from "./hooks/props";
import { ref, defineProps } from "vue";

export default {
  name: "ui-messageBox",
  components: {
    uiDialog,
    uiButton,
    uiInput,
  },
};
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
let dialogTableVisible = ref(false);

setTimeout(() => {
  dialogTableVisible.value = true;
}, 10);

const handleClose = (done) => {
  dialogTableVisible.value = done();
};
const close = (v) => {
  console.log(v);
  dialogTableVisible.value = v;
  props.destroy();
  console.log(11);
  props.onClose(inputValue.value);
};
const submit = () => {
  dialogTableVisible.value = false;
  props.onClose(inputValue.value);
};
const cancel = () => {
  dialogTableVisible.value = false;
  props.onCancel();
};

// 输入框值
let inputValue = ref("");
</script>

<style scoped>
@import "../../../icon/iconfont.css";

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.warning {
  color: #fff;
  background-color: #e6a23c;
  border-radius: 50%;
}
</style>
