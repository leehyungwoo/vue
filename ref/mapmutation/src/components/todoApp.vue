<template>
  <div>
    <inputComponent/>
    <listComponent/>
  </div>
</template>

<script>
import inputComponent from './todoApp/inputComponent'
import listComponent from './todoApp/listComponent'

export default {
  name: 'todoApp',
  components:{
    inputComponent,listComponent
  }
}
</script>
