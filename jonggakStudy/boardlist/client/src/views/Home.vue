<template>
  <div class="home">
    <loginComponent></loginComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import loginComponent from '@/components/loginComponent.vue'

export default {
  name: 'home',
  components: {
    loginComponent
  }
}
</script>

<style>
.home{min-width:400px; width:600px; margin: 0 auto;margin-top:100px;}
</style>
