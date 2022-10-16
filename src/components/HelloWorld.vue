<template>
  <div>
    <ui-dropdown btn onlyText :options="[{label:'hello',callBack:a},{label:'world'},{label:'ge'}]">
      click me
    </ui-dropdown>
  </div>
</template>

<script setup>
const a = (e) => {
  console.log(e)
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>