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
        <div class="list-group mb-4">
          <template v-for="todo in activeTodoList">
            <Todo
              :label="todo.label"
              @componentClick="toggleTodoState(todo)"
            ></Todo>
          </template>

        </div>
        <div class="text-right">
          <button
            class="btn btn-sm"
            @click="changeCurrentState('active')"
          >할일</button>
          <button
            class="btn btn-sm"
            @click="changeCurrentState('done')"
          >완료</button>
          <button
            class="btn btn-sm"
            @click="changeCurrentState('all')"
          >전체</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./components/todo";

export default {
  name: "app",
  data() {
    return {
      userInput: "",
      todoList: [],
      currentState: "active"
    };
  },
  components: {
    Todo
  },
  computed: {
    activeTodoList() {
      return this.todoList.filter(todo => {
        return this.currentState === "all" || todo.state === this.currentState;
      });
    }
  },
  methods: {
    changeCurrentState(state) {
      this.currentState = state;
    },
    addNewTodo() {
      this.todoList.push({
        label: this.userInput,
        state: "active"
      });
      this.userInput = "";
    },
    toggleTodoState(todo) {
      if (todo.state === "done") {
        todo.state = "active";
      } else if (todo.state === "active") {
        todo.state = "done";
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
