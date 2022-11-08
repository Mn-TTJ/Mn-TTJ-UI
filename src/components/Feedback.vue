<template>
  <ui-button @click="dialogTableVisible = !dialogTableVisible">
    show dialog
  </ui-button>

  <ui-dialog
    align-center
    draggable
    :visible="dialogTableVisible"
    @close="close"
    title="弹窗"
    :width="800"
    :handleClose="handleClose"
    :modal="true"
    :center="true"
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
  <ui-button @click="show">showmess</ui-button>

  <h4>文字提示</h4>
  <ui-tooltip
    content="<h1>11111</h1>"
    placement="left"
    :raw-content="true"
    effect="light"
    trigger="click"
  >
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

  <h4>消息弹出框</h4>
  <ui-button @click="open">消息弹出框</ui-button>
  <div :style="{ height: '1000px' }"></div>
</template>

<script>
import { ref, defineExpose } from "vue";
import UIMessage from "../../packages/components/feedback/message/hooks/UIMessage";
import UIMessageBox from "../../packages/components/feedback/messageBox/hooks/uiMessageBox";

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

// 气泡确认框
const confirm = () => {
  console.log("fatherconfirm");
};
const cancel = () => {
  console.log("fathercancel");
};
const show = () => {
  UIMessage({ text: "test1111" });
};

const open = () => {
  UIMessageBox.prompt({
    title: "title",
    text: "alert",
    draggable: true,
  })
    .then((v) => {
      if (v) {
        UIMessage({ text: `${v}`, type: "success" });
      }
    })
    .catch(() => {
      UIMessage({
        type: "info",
        text: "Input canceled",
      });
    });
};
</script>
