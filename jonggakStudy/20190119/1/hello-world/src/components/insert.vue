<template>
  <div class="board">
    <table class="table">
      <colgroup>
        <col width="10%">
        <col width="90%">
      </colgroup>
      <thead>
        <tr>
          <th
            scope="col"
            colspan="2"
          >등록</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">제목</th>
          <td><input
              type="text"
              v-model="item.title"
            /></td>
        </tr>
        <tr>
          <th scope="col">내용</th>
          <td><textarea v-model="item.content"></textarea></td>
        </tr>
      </tbody>
    </table>
    <div style="text-align:center">
      <button
        type="button"
        class="btn btn-primary"
        @click="board_update"
      >등록</button>
      <button
        type="button"
        class="btn btn-secondary"
        @click="board_back"
      >돌아가기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "insert",
  data() {
    return { item: { title: "", content: "" } };
  },
  created() {},
  methods: {
    board_update() {
      if (!confirm("등록하시겠습니까?")) return false;
      var insert_date = { title: this.item.title, content: this.item.content };
      this.$Bus.Post("/board/insert", insert_date).then(res => {
        if (res.data.code == "00") {
          alert("등록되었습니다");
          this.$Bus.currentView = "list";
        } else {
          alert(res.data.msg);
        }
      });
    },
    board_back() {
      this.$Bus.currentView = "list";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-right: 5px;
}
</style>