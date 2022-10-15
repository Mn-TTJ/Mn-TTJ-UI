<template>
  <div>
    <h4>按钮</h4>
    <ui-button type="success" disabled>禁用</ui-button>
    <ui-button type="success" word="world" round>world</ui-button>
    <ui-button word="disabled" disabled></ui-button>
    <ui-button type="success" round>1</ui-button>
    <ui-button type="" circle icon="xiajiantou" loading></ui-button>
    <ui-button size="large" loading>large11</ui-button>
    <ui-button type="" size="default" icon="rili">我们</ui-button>
    <ui-button type="">默认</ui-button>
    <ui-button type="" size="small" icon="duigoux">small</ui-button>
    <ui-button type="" color="#44bc87">11</ui-button>
    <ui-button type="" text>文字按钮</ui-button>
    <ui-button type="" icon="jiazai"></ui-button>
    <br />

    <h4>链接</h4>
    <ui-link text="link">default</ui-link>
    <ui-link text="link" :underline="true">underline</ui-link>
    <ui-link text="link" :disabled="true">noclick</ui-link>
    <ui-link :disabled="false" href="https://www.apple.com" color="#44bc87">
      apple
    </ui-link>
    <br />

    <h4>布局</h4>
    <div>
      <ui-container>
        <ui-header height="40px" bgc="#44bc87">Header</ui-header>
        <ui-container>
          <ui-aside width="100px" bgc="pink">aside</ui-aside>
          <ui-main>Main</ui-main>
        </ui-container>
        <ui-footer height="50px" bgc="#44bc87">footer</ui-footer>
      </ui-container>
      <br />

      <ui-container>
        <ui-header height="40px" bgc="#44bc87">Header</ui-header>
        <ui-main :height="200">Main</ui-main>
        <ui-footer height="50px" bgc="#44bc87">footer</ui-footer>
      </ui-container>
      <br />

      <ui-container>
        <ui-container>
          <ui-aside width="100px" bgc="pink">aside</ui-aside>
        </ui-container>

        <ui-main>Main</ui-main>
      </ui-container>
      <br />

      <ui-container>
        <ui-aside width="100px" bgc="pink">aside</ui-aside>
        <ui-container>
          <ui-header height="40px" bgc="#44bc87">Header</ui-header>

          <ui-main>Main</ui-main>
          <ui-footer height="50px" bgc="#44bc87">footer</ui-footer>
        </ui-container>
      </ui-container>
      <br />

      <ui-container>
        <ui-header>Header</ui-header>
        <ui-container>
          <ui-aside width="200px">Aside</ui-aside>
          <ui-container>
            <ui-main>Main</ui-main>
            <ui-footer>Footer</ui-footer>
          </ui-container>
        </ui-container>
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
    <ui-scrollbar :native="true" height="180" color="blue">
      <div :style="{ height: '1280px', backgroundColor: 'pink' }"></div>
    </ui-scrollbar>
    <ui-scrollbar height="200">
      <div :style="{ height: '1500px' }">133</div>
      <div :style="{ height: '100px' }">2222</div>
      <!-- <div :style="{ height: '300px' }">2222</div> -->
    </ui-scrollbar>

    <ui-scrollbar>
      <div :style="{ width: '1600px', height: '30px' }">111111</div>
    </ui-scrollbar>
    <h4>
      最大高度
      <button @click="arr.push(0)">add</button>
      <button @click="arr.pop()">del</button>
    </h4>
    <ui-scrollbar :maxHeight="150">
      <ul>
        <li v-for="(item, idx) in arr" :key="idx">{{ item }}</li>
      </ul>
    </ui-scrollbar>
    <h4>图标</h4>
    <ui-icon icon="jiazai" size="50" color="#44bc87"></ui-icon>
  </div>
</template>

<script>
import { reactive, onUpdated } from "vue";

export default {
  name: "tantt",
};
</script>
<script setup>
let arr = reactive(new Array(8).fill(0));
onUpdated(() => {
  console.log("父");
  console.log(arr);
});
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
