<template>
  <v-container>
    <v-btn @click="headerSend">헤더 전송</v-btn>
    <v-btn @click="headerSend2">임의헤더 전송</v-btn>
    <v-btn @click="lsWrite">로컬스토리지 쓰기</v-btn>
    <v-btn @click="lsRead">로컬스토리지 읽기</v-btn>
    <v-btn @click="lsRemove">로컬스토리지 지우기</v-btn>
    <v-btn @click="lsClear">로컬스토리지 비우기</v-btn>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  methods: {
    headerSend() {
      axios
        .get(`${this.$apiRootPath}test`)
        .then(r => console.log(r))
        .catch(e => console.log(e));
    },
    headerSend2() {
      axios
        .get(`${this.$apiRootPath}test`, {
          headers: { Authorization: "fake token!" }
        })
        .then(r => console.log(r))
        .catch(e => console.log(e));
    },
    lsWrite() {
      localStorage.setItem("token", 123);
      localStorage.setItem("zzz", 333);
    },
    lsRead() {
      console.log(localStorage.getItem("token"));
    },
    lsRemove() {
      localStorage.removeItem("token");
    },
    lsClear() {
      console.log(localStorage.clear());
    }
  }
};
</script>