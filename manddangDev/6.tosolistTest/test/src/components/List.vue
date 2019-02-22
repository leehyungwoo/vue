<template>
  <ul>
    <li
      :class="{doneTodo:todo.status==='done'}"
      v-for="(todo,index) in todoList"
      :key="index"
    >
      <p>{{todo.todo}}</p>
      <span>
        <button
          v-if="todo.status === 'created'"
          @click="todo.status='done'"
        >Done</button>
        <button
          v-else
          @click="todo.status='created'"
        >Don't</button>
        <button
          v-if="todo.status === 'created'"
          @click="updateTodo(todo,index)"
        >update</button>
        <button @click="deleteTodo(index)">delete</button>
      </span>
    </li>
  </ul>
</template>

<script>
import eventBus from "../util/eventBus.js";
export default {
  name: "todoList",
  props: {
    todoList: { type: Array, require: true }
  },
  methods: {
    updateTodo(todo, index) {
      eventBus.updateTodo(todo, index);
    },
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
  overflow: auto;
  transition: all 3s;
}
.doneTodo {
  background: skyblue;
}
.doneTodo p {
  text-decoration: line-through;
}
span {
  float: right;
}
</style>