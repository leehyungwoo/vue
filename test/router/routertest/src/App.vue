<template>
  <div id="app">
    <div id="nav">
      <button @click="home">Home</button> |
      <button @click="about">About</button>
    </div>
    <router-view />
  </div>
</template>
 

 <script>
export default {
  methods: {
    home() {
      //   console.log("홈실행");
      this.$router.push({ name: "home", params: { test: "params" } });
    },
    about() {
      //   console.log("어바웃실행");
      this.$router.push({ path: "about", query: { test: "query" } });
    }
  }
};
</script>