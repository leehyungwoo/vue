<template>
  <div class="board">
    <div align="right">
      <button
        type="button"
        class="btn btn-secondary"
        @click="board_insert"
      >추가</button>
    </div>
    <table class="table">
      <colgroup>
        <col width="10%">
        <col width="50%">
        <col width="20%">
        <col width="20%">
      </colgroup>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">제목</th>
          <th scope="col">작성일</th>
          <th scope="col">작성자</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in list"
          :key="item.pk"
        >
          <th scope="row">{{index+1}}</th>
          <td @click.prevent="detail(item.pk);loginCheck()"><a href="#">{{item.title}}</a></td>
          <td><time>{{item.regDate}}</time></td>
          <td></td>
        </tr>

      </tbody>
    </table>

    <nav
      class="paginationWrap"
      aria-label="Page navigation example"
    >
      <ul class="pagination">
        <li class="page-item"><a
            class="page-link"
            href="#"
          >Previous</a></li>
        <li class="page-item"><a
            class="page-link"
            href="#"
          >1</a></li>
        <li class="page-item"><a
            class="page-link"
            href="#"
          >2</a></li>
        <li class="page-item"><a
            class="page-link"
            href="#"
          >3</a></li>
        <li class="page-item"><a
            class="page-link"
            href="#"
          >Next</a></li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return { list: [] };
  },
  created() {
    this.$Bus.Post("/board/list", {}).then(res => {
      this.list = res.data;
    });
  },
  methods: {
    detail(pk) {
      this.$Bus.currentView = "detail";
      this.$Bus.pk = pk;
    },
    board_insert() {
      this.$Bus.currentView = "insert";
    },
    loginCheck() {
      this.$Bus.loginCheck();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

