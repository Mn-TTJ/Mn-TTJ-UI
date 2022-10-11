<template>
  <div>
    <ui-button type="success" word="禁用" disabled></ui-button>
    <ui-button type="success" word="world" round></ui-button>
    <ui-button word="disabled" disabled></ui-button>
    <ui-button type="success" word="1" round></ui-button>
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

    <h4>混合布局</h4>

    <ui-row :gutter="20">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>
    <ui-row :gutter="20">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="12">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20">
      <ui-col :colCount="8">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="8">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="8">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20">
      <ui-col :colCount="16">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="8">
        <div class="item"></div>
      </ui-col>
    </ui-row>
    <ui-row :gutter="20">
      <ui-col :colCount="8">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="8">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="4">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="4">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20">
      <ui-col :colCount="4">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="16">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="4">
        <div class="item"></div>
      </ui-col>
    </ui-row>
    <h4>列偏移</h4>

    <ui-row :gutter="20">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6" :offset="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20">
      <ui-col :colCount="6" :offset="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6" :offset="6">
        <div class="item">222</div>
      </ui-col>
    </ui-row>
    <ui-row :gutter="20">
      <ui-col :colCount="12" :offset="6">
        <div class="item">3</div>
      </ui-col>
    </ui-row>
    <h4>对齐方式</h4>
    <ui-row :gutter="20">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>
    <ui-row :gutter="20" justify="center">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>
    <ui-row :gutter="20" justify="end">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20" justify="space-between">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20" justify="space-around">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <ui-row :gutter="20" justify="space-evenly">
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
      <ui-col :colCount="6">
        <div class="item"></div>
      </ui-col>
    </ui-row>
    <h4>响应式布局</h4>
    <ui-row :gutter="20">
      <ui-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
        <div class="item"></div>
      </ui-col>
      <ui-col :xs="4" :sm="6" :md="8" :lg="6" :xl="11">
        <div class="item"></div>
      </ui-col>
      <ui-col :xs="4" :sm="6" :md="8" :lg="6" :xl="11">
        <div class="item"></div>
      </ui-col>
      <ui-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
        <div class="item"></div>
      </ui-col>
    </ui-row>

    <h4>滚动条</h4>
    <ui-scrollbar height="300">
      <div :style="{ height: '300px' }"></div>
      <div :style="{ height: '300px' }"></div>
      <div :style="{ height: '100px', display: 'inline' }">1111</div>
    </ui-scrollbar>

    <ui-scrollbar>
      <div :style="{ width: '2300px', height: '30px' }">1</div>
    </ui-scrollbar>
  </div>
</template>

<script>
export default {
  name: "tantt",
};
</script>

<style scoped lang="scss">
.item {
  height: 30px;
  width: 100%;
  line-height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: pink;
}
</style>
