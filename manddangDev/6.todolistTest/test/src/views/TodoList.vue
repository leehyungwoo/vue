<template>
  <div>

    <span>총합:{{todoList.length}},&nbsp;&nbsp;</span>
    <span>Done개수:{{doneLength}},&nbsp;&nbsp;</span>
    <span>Don't개수:{{todoList.length - doneLength}}</span>
    <ListAdd
      @createAdd="createAdd"
      @updateTodo="updateTodo"
    ></ListAdd>
    <List
      :todoList="todoList"
      @deleteTodo="deleteTodo"
    ></List>
  </div>
</template>

<script>
import List from "../components/List";
import ListAdd from "../components/ListAdd";

export default {
  name: "todoList",
  components: {
    List,
    ListAdd
  },

  data: function() {
    return {
      todoList: []
    };
  },
  computed: {
    doneLength() {
      return this.todoList.filter(function(todo) {
        return todo.status === "done";
      }).length;
    }
  },
  methods: {
    createAdd(todo) {
      this.todoList.push({ todo: todo, status: "created" });
    },
    updateTodo(todo, index) {
      this.todoList[index].todo = todo;
    },
    deleteTodo(index) {
      console.log(index);
      this.todoList.splice(index, 1);
    }
  }
};
</script>