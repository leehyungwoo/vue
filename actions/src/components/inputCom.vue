<template>
  <div>
      <input type="text" v-model="val" @keyup.enter="addTodo"><button @click="addTodo">확인</button>
  </div>
</template>


<script>
import store from '../store/index.js'

    export default {
        name:'inputComponent',
        data() {
            return {val:''}
        },
        methods:{
            addTodo:function() { 
     
          
              this.$store.dispatch('actionAddTodo',this.val)
            }
        }
    }
</script>