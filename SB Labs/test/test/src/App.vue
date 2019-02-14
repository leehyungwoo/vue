<!-- App.vue -->

<template>
  <div id="app">
    <hello-world :msg="count"></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  created() {
    setInterval(this.test, 1000);
  },
  methods: {
    test() {
      return this.count++;
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- App.vue -->
 