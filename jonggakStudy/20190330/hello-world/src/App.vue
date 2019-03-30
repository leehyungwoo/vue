<template>
  <div id="app">
    <headerComponent></headerComponent>
    <bodyComponent></bodyComponent>
  </div>
</template>

<script>
import headerComponent from "./components/header.vue";
import bodyComponent from "./components/body.vue";

export default {
  name: "app",
  components: {
    headerComponent,
    bodyComponent
  }
};
</script>

<style>
label {
  width: 55px;
  display: inline-block;
}
</style>
