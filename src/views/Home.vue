<template>
  <div class="home">
    <HelloWorld />
    <tantt />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import tantt from "@/components/tantt";

export default {
  name: "Home",
  components: {
    HelloWorld,
    tantt,
  },
};
</script>
