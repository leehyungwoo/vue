<template>
  <div>
      <inputcomponent></inputcomponent>
      <listcomponent></listcomponent>
  </div>
</template>


<script>
import inputcomponent from './components/inputcomponent.vue'
import listcomponent from './components/listcomponent.vue'
    export default {
        components:{
            inputcomponent,listcomponent
        }
    }
</script>