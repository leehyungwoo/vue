<template>
    <div>
        <input type="text" v-model.trim="val" @keyup.enter="addTodo"> <button @click="addTodo">확인</button>
    </div>
</template>


<script>
import Constants from '../constant.js'

    export default {
        name:'inputcomponent',
        data(){
            return {val:''}
        },
        methods:{
            addTodo(){
                if(this.val) {
                    this.$store.dispatch(Constants.ADD_TODO,this.val)
                    this.val="";
                } else{
                    return false;
                }
            }
        }        
    }  
</script>