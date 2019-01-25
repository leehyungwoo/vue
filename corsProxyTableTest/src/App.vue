<template>
  <div id="app">

  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$axios
      .get("/api", {
        headers: {
          "X-Naver-Client-Id": "IvtgwulYsReU5CoRSoNK",
          "X-Naver-Client-Secret": "rTQblxId2g"
        },
        params: {
          query: "starwars"
        }
      })
      .then(json => console.log(json))
      .catch(error => {
        console.log(error);
      });
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
