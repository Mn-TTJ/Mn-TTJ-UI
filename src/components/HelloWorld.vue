<template>
  <div>
    <ui-tree :dataSet="dataSet" :accordion="accordion" select @clickEvent="ee" ref="tree" :preExpend="[2, 5, 4, 7]"
      :preSelect="[2, 5, 4, 7]">
    </ui-tree>
    <button @click="aa">aaa</button>
    <button @click="bb">bbb</button>
    <button @click="cc">ccc</button>
    <button @click="dd">ddd</button>
    <button @click="ff">fff</button>
    <input v-model="value" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const value = ref(0)

const tree = ref(null)

const accordion = ref(true)

const lazy2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([]), 1000)
  })
}
const lazy = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ label: '1111', children: [{ label: '1111' }, { label: '222' }, { label: '33333' }] }, { label: '222' }, { label: '33333', lazy }])
    }, 2000)
  })
}
const dataSet = reactive([{ label: '1111', key: 1, selDisabled: true, children: [{ label: '1111', key: 2, children: [{ label: '222', key: 5 }] }, { label: '222', key: 3 }, { label: '33333' }] }, { label: '222', lazy: lazy2, key: 4 }, { label: '33333', lazy, key: 7 }])
const aa = () => {
  tree.value.remove(+value.value)
}
const bb = () => {
  console.log(value.value)
  tree.value.pushChild(+value.value, { label: '22234' })
}
const cc = () => {
  tree.value.reload(+value.value)
}
const dd = () => {
  console.log(+value.value)
  tree.value.insertBefore(+value.value, { label: 'c' })
}
const ee = (a) => {
  console.log(a)
}
const ff = () => {
  tree.value.insertAfter(5, { label: 'b' })
}
</script>