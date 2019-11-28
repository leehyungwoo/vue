<template>
  <div class="home">
    <joinComponent></joinComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import joinComponent from '@/components/joinComponent.vue'

export default {
  name: 'home',
  components: {
    joinComponent
  }
}
</script>

<style>
.home{min-width:400px; width:600px; margin: 0 auto;margin-top:100px;}
</style>
