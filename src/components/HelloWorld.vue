<template>
  <div class="hello">
    <div class="con">
      <ui-input parser="hello" v-model="dd" pre clearable>
        <template #pre>
          <div class="pre">hello</div>
        </template>
        <template #behind>
          <div class="behind">world</div>
        </template>
      </ui-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dd: 666
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.con {
  padding: 1rem;
  border: 1px solid #dcdfe6;
  text-align: left;
}

.pre {
  height: 100%;
  background-color: #dcdfe6;
}

.behind {
  height: 100%;
  background-color: #dcdfe6;
}
</style>
