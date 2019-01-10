import Vue from 'vue'
import Vuex from 'vuex'
import Constants from '../constant.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        todolist:[]
    },
    actions:{
        [Constants.ADD_TODO]:(type,payload)=>{
            type.commit(Constants.ADD_TODO,payload)
        },
        [Constants.DELETE_TODO]:(type,payload)=>{
            type.commit(Constants.DELETE_TODO,payload)
        }
    },
    mutations:{
        [Constants.ADD_TODO]:(type,payload)=>{
           type.todolist.push({work:payload,done:false})
           console.log(type.todolist)
        },
        [Constants.DELETE_TODO]:(type,payload)=>{
            type.todolist.splice(payload.index,1)
        }
    }
})


export default store