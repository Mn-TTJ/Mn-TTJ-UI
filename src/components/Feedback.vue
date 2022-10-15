<template>
  <ui-alert></ui-alert>
  <button @click="dialogTableVisible = !dialogTableVisible">btn</button>
  <div :style="{ height: '200vh' }"></div>

  <ui-dialog
    :visible="dialogTableVisible"
    @close="close"
    title="弹窗"
    align-center
    draggable
    :width="800"
    :modal="true"
    :handleClose="handleClose"
  >
    这是弹窗
    <template #footer>
      <ui-button @click="dialogTableVisible = !dialogTableVisible">
        取消
      </ui-button>
      <ui-button color="#44bc87" @click="submit">确定</ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import { ref, onMounted } from "vue";

export default {};
</script>
<script setup>
let dialogTableVisible = ref(true);
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
// onMounted(() => {
//   window.confirm("11111");
// });
</script>

<style></style>
