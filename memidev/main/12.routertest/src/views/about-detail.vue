<template>
  <div>
    <h1>about-detail</h1>
    <h2>{{reciveData}} 님 안녕하세요</h2>
    <v-btn @click="edit()">edit</v-btn>
  </div>
</template>
<script>
export default {
  name: "about-detail",
  computed: {
    reciveData() {
      return this.$route.query.inpData;
    }
  },
  methods: {
    edit() {
      this.$router.push({
        path: `${this.reciveData}/edit`,
        params: { inputData: this.reciveData }
      });
    }
  }
};
</script>