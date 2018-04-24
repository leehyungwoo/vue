<template>
  <div>
    <div class="header">
      
    </div>
    <nav>
      <ul>
        <li>
           <router-link to="/home">Go to home</router-link>
        </li>
        <li>
           <router-link to="/about">Go to about</router-link>
        </li>
        <li>
           <router-link to="/contacts">Go to contacts</router-link>
        </li>
      </ul>
    </nav>


    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import Home from './components/Home'
  import About from './components/About'
  import Contacts from './components/Contacts'
  import ContactByNo from './components/ContactByNo'
  import VueRouter from 'vue-router'

  const router = new VueRouter({
    routes:[
      {path:'/',component:Home},
      {path:'/home',component:Home},
      {path:'/about',component:About},
      {path:'/contacts',component:Contacts},
      {path:'/contacts/:no',component:ContactByNo}
    ]
  })

export default {
  name:'app',
  router
}

</script>

