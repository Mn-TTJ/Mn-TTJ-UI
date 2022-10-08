<template>
  <div>
    <ui-button type="success" word="禁用" disabled></ui-button>
    <ui-button type="success" word="world" round></ui-button>
    <ui-button type="" word="t" circle></ui-button>
    <ui-button type="" word="large" size="large"></ui-button>
    <ui-button type="" word="default" size="default"></ui-button>
    <ui-button type="" word="默认"></ui-button>
    <ui-button type="" word="small" size="small"></ui-button>
    <ui-button type="" word="11" color="pink"></ui-button>
    <ui-button type="" word="文字按钮" text></ui-button>
    <ui-link text="link"></ui-link>
    <ui-link text="link" underline="true"></ui-link>
    <ui-link text="link" disabled="true"></ui-link>
    <ui-link
      text="apple"
      :disabled="false"
      href="https://www.apple.com"
    ></ui-link>
    <div>
      <ui-container>
        <ui-header>Header</ui-header>
        <ui-main>Main</ui-main>
      </ui-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "tantt",
};
</script>
<script></script>

<style></style>
