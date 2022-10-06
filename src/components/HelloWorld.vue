<template>
  <div class="hello">
    <div class="con">
      <ui-autocompelete v-model="dd" :tips=tips panel>
      </ui-autocompelete>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dd: 666,
      tips: []
    }
  },
  watch: {
    dd() {
      this.tips.push(this.dd)
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
