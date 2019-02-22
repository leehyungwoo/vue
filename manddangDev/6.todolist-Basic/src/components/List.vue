<template>
  <div>
    <v-card
      :class="{'done':list.status ==='done'}"
      class="pa-3 mb-3"
      v-for="(list,index) in todoList"
      :key="index"
    >
      <p>{{list.memo}}</p>
      <v-btn
        v-if="list.status==='created'"
        fab
        flat
        small
        color="green"
        @click="$emit('statusControl',index,'done')"
      ><i class="fas fa-check"></i></v-btn>
      <v-btn
        v-else
        fab
        flat
        small
        color="blue"
        @click="$emit('statusControl',index,'created')"
      ><i class="fas fa-redo-alt"></i></v-btn>
      <v-btn
        fab
        flat
        small
        color="red"
        @click="$emit('listDelete',index)"
      ><i class="fas fa-trash-alt"></i></v-btn>

      <v-btn
        v-if="list.status ==='created'"
        fab
        flat
        small
        color="yellow"
        @click="listEdit(list.memo,index)"
      ><i class="fas fa-edit"></i></v-btn>
    </v-card>
  </div>
</template>

<script>
import eventBus from "../main.js";
export default {
  name: "todoList",
  props: {
    todoList: { type: Array }
  },
  methods: {
    listEdit(memo, index) {
      eventBus.listEdit(memo, index);
    }
  }
};
</script>

<style scoped>
.done {
  background: gray;
}
.done p {
  text-decoration: line-through;
}
</style>