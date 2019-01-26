<template>
  <div class="board">
    <table class="table">
      <colgroup>
        <col width="20%">
        <col width="80%">
      </colgroup>
      <thead>
        <tr>
          <th
            scope="col"
            colspan="2"
          >{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">내용</th>
          <td>{{item.content}}</td>
        </tr>
        <tr>
          <th scope="col">작성일</th>
          <td>{{item.regDate}}</td>
        </tr>
        <tr>
          <th scope="col">수정일</th>
          <td>{{item.uptDate}}</td>
        </tr>
      </tbody>
    </table>

    <div style="text-align:center">
      <button
        @click="board_update(item)"
        type="button"
        class="btn btn-primary"
      >수정</button>
      <button
        @click="board_delete()"
        type="button"
        class="btn btn-danger"
      >삭제</button>
      <button
        @click="board_list()"
        type="button"
        class="btn btn-secondary"
      >리스트</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return { item: [] };
  },
  created() {
    if (!this.$Bus.pk || this.$Bus.pk === "0") {
      this.currentView = "list";
      alert("잘못된 접근입니다");
      return false;
    }
    this.$Bus.Post("/board/detail", { pk: this.$Bus.pk }).then(res => {
      console.log(res.data[0]);
      this.item = res.data[0];
    });
  },
  methods: {
    board_update(item) {
      this.$Bus.pk = item.pk;
      console.log(item.pk);
      this.$Bus.currentView = "update";
    },
    board_list(item) {
      this.$Bus.currentView = "list";
    },
    board_delete(item) {
      this.$Bus
        .Post("/board/delete", { pk: this.$Bus.pk })
        .then(res => {
          if (res.data.code === "00") {
            alert("삭제 성공");
            this.$Bus.currentView = "list";
          } else {
            alert("삭제 실패");
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.btn {
  margin-right: 5px;
}
</style>