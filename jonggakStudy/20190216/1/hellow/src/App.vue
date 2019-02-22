<template>
  <div id="app">
    <button
      v-if="this.$Bus.currentView === 'list' && this.$Bus.isLogin === false "
      @click="gotoLogin"
    >로그인</button>
    <div v-if="this.$Bus.isLogin === true && this.$Bus.currentView !== 'userdetail' ">
      <span><a
          href="#"
          @click="userdetail"
        >{{this.$Bus.u_id}}</a>님 안녕하세요</span><br />
      <button @click="logout()">로그아웃</button>
    </div>
    <component v-bind:is="$Bus.currentView"></component>
  </div>
</template>

<script>
import list from "./components/list.vue";
import detail from "./components/detail.vue";
import insert from "./components/insert.vue";
import update from "./components/update.vue";
import login from "./components/login.vue";
import joinUs from "./components/joinUs.vue";
import userdetail from "./components/userdetail.vue";

export default {
  name: "app",
  components: {
    list,
    detail,
    insert,
    update,
    login,
    joinUs,
    userdetail
  },
  methods: {
    gotoLogin() {
      this.$Bus.currentView = "login";
    },
    logout() {
      this.$Bus.isLogin = false;
      this.$Bus.u_id = "";
      this.$Bus.u_name = "";
    },
    userdetail() {
      this.$Bus.currentView = "userdetail";
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
}
</style>
