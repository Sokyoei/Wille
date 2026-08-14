<!-- eslint-disable no-unused-vars -->
<template>
  <!-- <VueLearn /> -->
  <ElementPlusLearn/>
</template>

<script>
// import VueLearn from '@/components/VueLearn.vue';
import ElementPlusLearn from '@/components/ElementPlusLearn.vue';

export default {
  name: 'App',
  components: {
    // VueLearn,
    ElementPlusLearn
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
