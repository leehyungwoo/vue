<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center mb-4">Todo 어플리케이션</h1>
        <input
          type="text"
          v-model="userInput"
          class="form-control mb-4"
          @keyup.enter="addNewTodo"
        >
        <div class="list-group">
          <template v-for="(todo,i) in todoList">
            <button
              class="list-group-item text-left"
              :key="i"
              :class="todo.state"
              @click="toggleTodoState(todo)"
            >
              {{todo.label}}
            </button>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      userInput: "",
      todoList: [],
      state: true
    };
  },
  methods: {
    addNewTodo() {
      this.todoList.push({
        label: this.userInput,
        state: ""
      });
      this.userInput = "";
    },
    toggleTodoState(todo) {
      if (todo.state === "") {
        todo.state = "active";
      } else if (todo.state === "active") {
        todo.state = "";
      }
    }
  }
};
</script>

<style>
h1 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 2rem;
}
</style>
