<template>
  <div id="app">
    <h1>Dynamic Component</h1>
    <navComponent :navigationMenu="navigationMenu"></navComponent>
    <viewComponent :componentView="this.componentView"></viewComponent>
  </div>
</template>

<script>
import eventBus from "./eventBus.js";
import navComponent from "./Components/NavComponent";
import viewComponent from "./Components/viewComponent";
export default {
  name: "app",
  created() {
    eventBus.$on("changeViewBus", this.viewRouter);
  },
  data() {
    return {
      navigationMenu: [
        { link: "k", menu: "home" },
        { link: "k", menu: "contact" },
        { link: "k", menu: "about" }
      ],
      componentView: "home"
    };
  },
  components: {
    navComponent,
    viewComponent
  },
  methods: {
    viewRouter(menu) {
      this.componentView = menu;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1 {
  background: orange;
}
</style>
