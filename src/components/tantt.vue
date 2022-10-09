<template>
  <div>
    <!-- <ui-button type="success" word="禁用" disabled></ui-button> -->
    <ui-button type="success" word="world" round></ui-button>
    <ui-button word="disabled" disabled></ui-button>
    <ui-button type="success" word="11111" round></ui-button>
    <ui-button type="" circle icon="xiajiantou" loading></ui-button>
    <ui-button word="large11" size="large" loading></ui-button>
    <ui-button type="" word="我们" size="default" icon="rili"></ui-button>
    <ui-button type="" word="默认"></ui-button>
    <ui-button type="" word="small" size="small" icon="duigoux"></ui-button>
    <ui-button type="" word="11" color="pink"></ui-button>
    <ui-button type="" word="文字按钮" text></ui-button>
    <ui-button type="" icon="jiazai"></ui-button>
    <br />
    <br />
    <ui-link text="link">default</ui-link>
    <ui-link text="link" :underline="true">underline</ui-link>
    <ui-link text="link" :disabled="true">noclick</ui-link>
    <ui-link :disabled="false" href="https://www.apple.com" color="#44bc87">
      apple
    </ui-link>
    <div>
      <ui-container>
        <ui-header height="40px" bgc="#44bc87">Header</ui-header>
        <ui-container>
          <ui-aside width="100px" bgc="pink">aside</ui-aside>
          <ui-main>Main</ui-main>
        </ui-container>
        <ui-footer height="50px" bgc="#44bc87">footer</ui-footer>
      </ui-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "tantt",
};
</script>
<!-- <script></script> -->

<style scoped lang="scss"></style>
