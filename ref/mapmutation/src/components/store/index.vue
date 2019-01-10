
<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    todolist:[
      {work:'영화보기',done:false},
      {work:'es스크립트',done:true},
      {work:'운동하기',done:false},
      {work:'식사하기',done:false}
    ]
  },
  mutations:{
    /* 추가, 수정, 제거 */
    addTodo:function(state,payload){
        state.todolist.push({work:payload.plan,done:false})
    },
    removeTodo:function(state,payload){
        //mapMutations removeTodo 인덱스를 받아와서 제거
        state.todolist.splice(payload.index,1)
    },
    toggleTodo:function(state,payload){
        state.todolist[payload.index].done = !state.todolist[payload.index].done
    }



  }

})


export default store
</script>