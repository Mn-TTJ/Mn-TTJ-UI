<template>
  <div class="hello">
    <div class="con">
      <ui-datepicker v-model="dd"></ui-datepicker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dd: '2022-11-24'
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
</style>
