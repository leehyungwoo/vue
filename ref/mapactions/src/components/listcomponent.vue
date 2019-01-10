<template>
    <ul>
        <li v-for="(con,index) in todolist" :key="con.work" :class="{checked:con.done}" @click="con.done = !con.done" >{{con.work}}<a href="#" @click.stop="deleteTodo({index:index})">X</a></li>
    </ul>
</template>

<script>
import Constants from '../constant.js'
import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
       computed:mapState([
           'todolist'
       ]),
       methods:mapActions([
           Constants.DELETE_TODO
       ])
    }
</script>

<style scope>
.checked{background:orange;}
a{float:right;}
</style>
