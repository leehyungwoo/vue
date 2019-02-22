<template>
  <div>
    <input
      type="text"
      v-model="todo"
      @keypress.enter="abc"
    >
    <button
      v-if="index === null"
      @click="addTodo"
    >추가</button>
    <button
      v-else
      @click="updateTodo"
    >수정</button>
  </div>
</template>

<script>
import eventBus from "../util/eventBus.js";

export default {
  name: "todoList",
  data() {
    return {
      todo: "",
      index: null
    };
  },
  computed: {
    abc() {
      if (this.index === null) {
        return this.addTodo;
      } else {
        return this.updateTodo;
      }
    }
  },
  created() {
    eventBus.$on("updateTodo", (todo, index) => {
      this.todo = todo.todo;
      this.index = index;
    });
  },
  methods: {
    addTodo() {
      if (this.todo.trim() !== "") {
        this.$emit("createAdd", this.todo);
        this.todo = null;
      }
    },
    updateTodo() {
      this.$emit("updateTodo", this.todo, this.index);
    }
  }
};
</script>