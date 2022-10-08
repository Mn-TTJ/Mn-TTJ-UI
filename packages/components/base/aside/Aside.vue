<template>
  <aside class="ui-aside">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "ui-aside",
};
</script>

<style scoped lang="scss">
aside {
  display: inline-block;
}
</style>
