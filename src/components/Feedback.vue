<template>
  <ui-alert></ui-alert>
  <ui-button @click="dialogTableVisible = !dialogTableVisible">
    show dialog
  </ui-button>
  <div :style="{ height: '20vh' }"></div>

  <ui-dialog
    align-center
    draggable
    :visible="dialogTableVisible"
    @close="close"
    title="弹窗"
    :width="800"
    :handleClose="handleClose"
    :modal="true"
  >
    这是弹窗
    <template #footer>
      <ui-button @click="dialogTableVisible = !dialogTableVisible">
        取消
      </ui-button>
      <ui-button color="#44bc87" @click="submit">确定</ui-button>
    </template>
  </ui-dialog>

  <!-- show Loading -->
  <h4>加载</h4>
  <ui-button @click="showLoading">加载</ui-button>
  <ui-loading :loadingVisible="loadingVisible"></ui-loading>

  <h4>message消息提示</h4>
  <ui-button @click="mess = !mess">showmess</ui-button>
  <ui-message :showMessage="mess">11</ui-message>

  <h4>文字提示</h4>
  <ui-tooltip content="top left prompts info" placement="bottom">
    <ui-button>btn</ui-button>
  </ui-tooltip>

  <h4>气泡确认框</h4>
  <ui-popconfirm
    title="确认吗？"
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    @confirm="confirm"
    @cancel="cancel"
  >
    <ui-button>delete</ui-button>
    <ui-button>del</ui-button>
  </ui-popconfirm>
  <ui-popconfirm title="确认删除吗？" @confirm="confirm" @cancel="cancel">
    <ui-button>delete</ui-button>
    <ui-button>del</ui-button>
  </ui-popconfirm>
</template>

<script>
import { ref, defineExpose } from "vue";

export default {};
</script>
<script setup>
let dialogTableVisible = ref(false);
//
const close = (v) => {
  dialogTableVisible.value = v;
};
const submit = () => {};
const handleClose = (done) => {
  if (window.confirm("Are you sure to close this dialog?")) {
    dialogTableVisible.value = done();
  } else {
  }
};
let loadingVisible = ref(false);
const showLoading = () => {
  loadingVisible.value = true;

  setTimeout(() => {
    loadingVisible.value = false;
  }, 5000);
};
defineExpose({ dialogTableVisible });
// onMounted(() => {
//   window.confirm("11111");
// });
let mess = ref(false);

// 气泡确认框
const confirm = () => {
  console.log("fatherconfirm");
};
const cancel = () => {
  console.log("fathercancel");
};
</script>

<style></style>
