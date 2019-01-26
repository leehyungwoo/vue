<template>
  <div id="app">

    <component v-bind:is="$Bus.currentView"></component>
  </div>
</template>

<script>
import insert from "./components/insert.vue";
import list from "./components/list.vue";
import detail from "./components/detail.vue";
import update from "./components/update.vue";

export default {
  name: "app",
  components: {
    list,
    detail,
    insert,
    update
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