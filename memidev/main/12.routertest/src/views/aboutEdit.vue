<template>
  <div>
    <h1>about-editPage</h1>
    {{receiveData.id}}
  </div>
</template>
<script>
export default {
  name: "about-detail",
  computed: {
    receiveData() {
      return this.$route.params;
    }
  },
  methods: {}
};
</script>