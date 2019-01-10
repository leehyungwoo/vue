<template>
<div>
    <input type="text" v-model="plan" @keyup.enter="addTodo({plan:plan});init()"">
    <button @click="addTodo({plan:plan});init()">추 가</button>
</div>
</template>
<script>
import _ from "lodash";
import { mapMutations } from "vuex";
export default {
  data() {
    return { plan: "" };
  },
  methods: _.extend({
      init(){
          this.plan=""
      }
  }, mapMutations(["addTodo"]))
};
</script>