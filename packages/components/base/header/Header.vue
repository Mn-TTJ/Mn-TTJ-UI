<template>
  <header class="ui-header"><slot></slot></header>
</template>

<script>
export default {
  name: "ui-header",
};
</script>

<style lang="scss" scoped>
header {
  height: 64px;
  line-height: 64px;
  display: inline-block;
}
</style>
