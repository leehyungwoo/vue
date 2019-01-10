<template>
  <div>
      <h1>연락처</h1>
      <div class="wrapper">
          <div class="box" v-for="c in contacts" :key="c.no">
               <router-link v-bind:to="'/contacts/'+c.no">{{c.name}}</router-link>
          </div>
      </div>
  </div>
</template>


<script>
import contactlist from '../Contactlist'
    export default{
        name:'Contacts',
        data(){
            return {contacts: contactlist.contacts}
        }
    }
</script>