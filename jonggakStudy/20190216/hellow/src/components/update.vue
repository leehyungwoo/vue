<template>
  <div class="board">
        <table class="table">
            <colgroup>
                <col width="10%">
                <col width="90%">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" colspan="2">수정</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="col">제목</th>
                    <td><input type="text" class="form-control" v-model="item.title"/></td>
                </tr>
                <tr>
                    <th scope="col">내용</th>
                    <td><textarea class="form-control" v-model="item.content"></textarea></td>
                </tr>
            </tbody>
        </table>
        <div style="text-align:center">
          <button type="button" class="btn btn-primary" @click="board_update">수정</button>  
          <button type="button" class="btn btn-warning" @click="board_Reset">초기화</button> 
          <button type="button" class="btn btn-secondary" @click="board_back">돌아가기</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'update',
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
       if(!confirm("수정하시겠습니까?") ) return false;
       var update_date = {pk:this.item.pk ,title:this.item.title  , content:this.item.content  }
       this.$Bus.Post("/board/update",update_date).then((res) => {  
       if(res.data.code == "00"){
          alert("수정되었습니다");
          this.$Bus.currentView = "detail";
       }else {
         alert(res.data.msg)
       }
     })
    },
    board_Reset(){
      this.item = {title:'',content:''}
    },
    board_back() {
      this.$Bus.currentView = "detail";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn {margin-right: 5px;}
</style>