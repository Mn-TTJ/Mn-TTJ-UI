<template>
  <div class="hello">
    <div class="con">
      <ui-switch v-model="dd" sm></ui-switch>
      <ui-switch v-model="dd"></ui-switch>
      <ui-switch v-model="dd" lg></ui-switch>
      <ui-switch v-model="dd" custom>
        <template #switch>
          hello
        </template>
      </ui-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dd: true,
      labels: ['hello', 'world', 'yes?']
    }
  },
  watch: {
    dd() {
      console.log(this.dd)
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

.red {
  color: red;
}
</style>
