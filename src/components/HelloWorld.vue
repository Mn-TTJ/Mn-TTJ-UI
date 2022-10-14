<template>
  <div style="padding:1rem">
    <ui-form ref="form">
      <ui-upload name="one" text="hello" picture ref="files">
      </ui-upload>
      <ui-autocompelete name="ss" v-model="autocom" :tips="[1,2,3,4,54,2,34,5,667]"></ui-autocompelete>
      <ui-checkbox name="aa" v-model="check" :labels="['aa','xx','ww']" hasBorder></ui-checkbox>
      <ui-colorpicker name="dd" v-model="color" disabled></ui-colorpicker>
      <ui-datepicker name="cc" v-model="date"></ui-datepicker>
      <ui-radio name="xx" v-model="radio" group="he" :labels="['1','3','4']" btn full disabled></ui-radio>
      <ui-switch name="ff" v-model="swi" disabled></ui-switch>
      <button @click="getForm">click</button>
    </ui-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref(null)
const autocom = ref('')
const check = ref([])
const color = ref('')
const date = ref('2022-11-23')
const radio = ref('he')
const swi = ref(false)

const getForm = () => {
  form.value.getForm().then(dateForm => {
    dateForm.forEach((value, key) => console.log(key, value))
  }).catch(Err => {
    console.log(Err)
  })
}

</script>

<style scoped>
/* div {
  background-color: black;
} */
</style>