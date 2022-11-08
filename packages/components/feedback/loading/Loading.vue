<template>
  <transition>
    <div class="LoadingMask" v-show="loadingVisible">
      <div class="showbox">
        <div class="loader">
          <svg class="circular" viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, ref, defineProps } from "vue";
import useProps from "./hooks/useProps";
export default {
  name: "ui-loading",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
</script>

<style scoped lang="scss">
.LoadingMask {
  position: absolute;
  inset: 0px;
  background-color: rgba(151, 151, 151, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}
.loader {
  position: absolute;
  margin: auto;
  inset: 0;
  width: 30px;
  height: 30px;
}
.loading:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
  stroke: #000;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

body {
  background-color: white;
}
.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
