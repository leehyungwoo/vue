<template>
  <div id="app">
    <alluserComponent :users="users"></alluserComponent>
    <signUp @addUser="addList"></signUp>
  </div>
</template>

<script>
import alluserComponent from "./components/users/alluserComponent";
import signUp from "./components/users/signUp";
export default {
  name: "app",
  components: {
    alluserComponent,
    signUp
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    addList(userInfo) {
      this.users.push(userInfo);
    }
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
  overflow: hidden;
}
</style>
