import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 

const store = new Vuex.Store({
    state:{
        todollist:[]
    },
    actions:{
        actionAddTodo:function(a,b){
            console.log(a,b)
        }
    },
    mutations:{

    }
})
 
export default store