<template>
  <div class="hello">
    <div class="con">
      <ui-select v-model="dd" :dataSet="labels" disabled></ui-select>
      <ui-select v-model="dd" :dataSet="ilabels" multiple></ui-select>
      <ui-select v-model="dd" multiple lazy :callBack="lazyEvent"></ui-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dd: 'hello',
      labels: ['hello', 'world', '??'],
      ilabels: [{ value: 'hello', hasChild: true, children: [{ value: 'he', hasChild: false, children: [] }, { value: 'llo', hasChild: false, children: [] }, { value: 'heo', hasChild: true, children: [{ value: 'he', hasChild: false, children: [] }] }] }, { value: 'world', hasChild: true, children: [{ value: '???', hasChild: false, children: [] }] }]
    }
  },
  watch: {
    dd() {
      console.log(this.dd)
    }
  },
  methods: {
    lazyEvent(value, gIndex, index) {
      return new Promise((resolve) => {
        if (value == null && gIndex == null && index == null) {
          setTimeout(() => {
            const date = [{ value: 'hello', hasChild: true }, { value: 'world', hasChild: true }, { value: 'hello', hasChild: false }]
            resolve(date)
          }, 4000)
        } else {
          setTimeout(() => {
            const date = [{ value: 'hello', hasChild: true }, { value: 'world', hasChild: true }, { value: 'hello', hasChild: false }]
            resolve(date)
          }, 4000)
        }
      })
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
