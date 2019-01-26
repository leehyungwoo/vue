<template>
  <div class="board">
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
          v-for="(item,index) in list"
          :key="item.pk"
        >
          <th scope="row">{{index+1}}</th>
          <td
            class="title_hover"
            @click="detail(item.pk)"
          ><a href="#">{{item.title}}</a></td>
          <td><time>{{item.regDate}}</time></td>
          <td>나</td>
        </tr>

      </tbody>
    </table>

    <p class="title_over">affdsf</p>
    <button
      @click="board_insert"
      type="button"
      class="btn btn-secondary"
    >글쓰기</button>
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
import insert from "./insert";

export default {
  name: "list",
  components: {
    insert
  },
  data() {
    return { list: [] };
  },
  created() {
    this.$Bus.Post("/board/test", {}).then(res => {
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
    }
  }
};
</script>

 