<template>
  <ul>
    <li
      v-for="(list,i) in navigationMenu"
      :key="i"
    >
      <a
        :href="list.link"
        @click.prevent="changeView(list.menu)"
      >{{list.menu}}</a>
    </li>
  </ul>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
  name: "Navcomponent",
  props: ["navigationMenu"],
  methods: {
    changeView(menu) {
      eventBus.$emit("changeViewBus", menu);
    }
  }
};
</script>

<style scope>
ul {
  background: black;
}
ul:after {
  content: "";
  display: block;
  clear: both;
}
li {
  list-style: none;
  float: left;
  padding: 10px;
  border: 1px solid black;
}
</style>