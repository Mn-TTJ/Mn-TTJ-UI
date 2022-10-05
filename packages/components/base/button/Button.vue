<template>
  <button :class="{'round':round}">{{text}}</button>
</template>
  
<script>
export default {
  name: "ui-button",
};
</script>
<script setup>
import useProps from "./hooks/useProps"
// eslint-disable-next-line
const props = defineProps(useProps());
console.log(props)
</script>
  
<style lang="scss" scoped>
button {
  border: 1px solid #dcdfe6;
  border-radius: 0.2rem;
  background-color: transparent;
}

.round {
  border-radius: 20rem;
}
</style>