<template>
  <div>
    <keep-alive>
      <component :is="this.componentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import home from "./home";
import contact from "./contact";
import about from "./about";

export default {
  name: "viewComponent",
  props: ["componentView"],
  components: {
    home,
    contact,
    about
  },
  created() {
    console.log(this.componentView);
  }
};
</script>