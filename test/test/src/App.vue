<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    gotoTest() {
      this.$router.push({ path: "/test" });
    },
    gotoAbc() {
      this.$router.push({ path: "/abc" });
    }
  }
};
</script>

<style>
</style>
