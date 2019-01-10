<template>
<ul>
    <li v-for="(con,index) in todolist" :key="con.work" @click="toggleTodo({index:index})" :class="{check:todolist[index].done}">{{con.work}}<a href="#" @click.stop="removeTodo({index:index})">x</a></li>
</ul>
</template>


<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState(["todolist"]),
  methods: mapMutations(["removeTodo", "toggleTodo"])
};
</script>

<style scoped>
.check {
  background: red;
}
a {
  float: right;
}
</style>
