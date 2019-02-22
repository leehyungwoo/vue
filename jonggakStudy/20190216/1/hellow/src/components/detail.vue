<template>
  <div class="board">
        <table class="table">
            <colgroup>
                <col width="20%">
                <col width="80%">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" colspan="2">{{item.title}}</th>
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
          <button type="button" class="btn btn-primary" @click="board_update">수정</button>
          <button type="button" class="btn btn-danger" @click="board_delete">삭제</button>   
          <button type="button" class="btn btn-secondary" @click="board_list">리스트</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {item:{}}
  },
  created () {
    if(!this.$Bus.pk || this.$Bus.pk == 0)  {
      this.$Bus.currentView = "list";
      alert("잘못된 접근입니다.");
      return false;
    }

    this.$Bus.Post("/board/detail",{pk:this.$Bus.pk}).then((res) => {  
       this.item = res.data[0];
     })
  }, 
  methods : { 
    board_update() {
      this.$Bus.currentView = "update";
    },
    board_list() {
      this.$Bus.currentView = "list";
    },
    board_delete() {
      if(!confirm("삭제하시겠습니까?") ) return false;

      this.$Bus.Post("/board/delete",{pk:this.$Bus.pk}).then((res) => {  
       if(res.data.code == "00"){
          alert("삭제되었습니다");
          this.$Bus.currentView = "list";
       }else {
         alert(res.data.msg)
       }
     })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn {margin-right: 5px;}
</style>