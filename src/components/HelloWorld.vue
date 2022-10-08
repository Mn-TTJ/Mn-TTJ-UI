<template>
  <div class="hello">
    hello world
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
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

header {
  background-color: #ddd;
}

.ui-header,
.ui-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.ui-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.ui-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
