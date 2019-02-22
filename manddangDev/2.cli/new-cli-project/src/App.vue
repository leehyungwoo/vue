<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count++">추가</button>
    <HomeComponent></HomeComponent>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
import HomeComponent from "./views/Home";
export default {
  name: "App",

  data() {
    return {
      title: "안녕하세요",
      count: 0
    };
  },
  components: {
    HomeComponent
  }
};
</script>
