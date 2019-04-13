<template>
  <div style="padding-top:30px;width:600px;padding-left:30px;">
    <div style="font-weight: bold;margin-bottom: 3px;">회원 수 : {{ctodos.length}}</div>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>상태</th>
          <th>가입시간</th>
          <th>업데이트시간</th>
          <th>탈퇴시간</th>
          <th>기능</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo,index) in ctodos"
          @click="detail(todo);"
          :key="todo.pk"
        >
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>
            <span v-if="todo.state == 0">탈퇴</span>
            <span v-if="todo.state == 1">정상</span>
            <span v-if="todo.state == 2">수정</span>
          </td>
          <td>{{ todo.RegTime }}</td>
          <td>{{ todo.updateTime }}</td>
          <td>{{ todo.WdTime }}</td>
          <td>
            <button
              v-if="todo.state == 1 || todo.state == 2"
              v-on:click="withdraw(todo)"
            >탈퇴</button>
            <button
              v-else
              v-on:click="detailpoparray(index)"
            >삭제</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import Bus from "@/bus";

export default {
  name: "bodyCom",
  data() {
    return {
      ctodos: Bus.todos
    };
  },
  mounted() {
    Bus.$on("changeInfo", obj => {
      this.ctodos.forEach(ctodo => {
        if (ctodo.id === obj.preVal.id) {
          ctodo.id = obj.chVal.id;
          ctodo.name = obj.chVal.name;
          ctodo.state = 2;
          ctodo.updateTime = new Date().toLocaleTimeString();
        }
      });
    });
  },
  methods: {
    detail(obj) {
      if (event.target.nodeName == "BUTTON") return false;
      Bus.updatearray(obj);
      Bus.$emit("test", obj);
    },
    detailpoparray(idx) {
      Bus.todos.splice(idx, 1);
    },

    withdraw(obj) {
      Bus.withdraw(obj);
    }
  }
};
</script>
 