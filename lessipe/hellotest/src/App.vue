<template>
  <div id="app">
    <input
      type="text"
      v-model="userInput"
      @keyup.enter="addTodo"
    >
    <ul>

      <listComponent
        :todo="todo"
        @clickComponent="toggleClass(todo)"
        v-for="(todo,i) in filterValue"
        :key="i"
      ></listComponent>

    </ul>
    <button @click="changeView('all')">전체</button>
    <button @click="changeView('none')">안한일</button>
    <button @click="changeView('active')">한일</button>
  </div>
</template>

<script>
import listComponent from "./components/listComponent";
export default {
  name: "app",
  data() {
    return {
      count: 0,
      userInput: "",
      todoList: [],
      currentVal: "active"
    };
  },
  components: {
    listComponent
  },
  computed: {
    filterValue() {
      return this.todoList.filter(todo => todo.state === this.currentVal);
    }
  },
  methods: {
    addTodo() {
      this.todoList.push({
        label: this.userInput,
        state: "active",
        count: this.count++
      });
      this.userInput = "";
    },
    toggleClass(todo) {
      if (todo.state === "active") {
        todo.state = "none";
      } else if (todo.state === "none") {
        todo.state = "active;";
      }
    },
    changeView(val) {
      this.currentVal = val;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
