<template>
  <div class="home">
    <HelloWorld v-if="false" />
    <!-- <tantt /> -->
    <!-- <Feedback /> -->
    <Data />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import tantt from "@/components/tantt";
// import Feedback from "@/components/Feedback";
import Data from "@/components/data.vue";
// import { ref, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    // tantt,
    // Feedback,
    Data,
  },
};
</script>

<script setup></script>
