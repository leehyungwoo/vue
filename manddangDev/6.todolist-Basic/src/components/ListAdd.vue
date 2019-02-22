<template>
  <div>
    <v-textarea
      outline
      v-model="memo"
      label="투두리스트를 입력해주세요"
      value=""
    ></v-textarea>
    <v-btn
      v-if="mode ==='add'"
      @click="listAdd"
    >리스트 추가</v-btn>
    <v-btn
      v-else
      @click="listEdit"
    >리스트 수정</v-btn>
  </div>
</template>

<script>
import eventBus from "../main.js";
export default {
  name: "todoAdd",
  data: function() {
    return {
      memo: null,
      index: null,
      mode: "add"
    };
  },
  created() {
    eventBus.$on("listEdit", (memo, index) => {
      this.memo = memo;
      this.index = index;
      this.mode = "edit";
    });
  },
  methods: {
    listAdd: function() {
      if (this.memo === null) {
        alert("할일을 입력해주세요");
        return false;
      }
      this.$emit("listAdd", this.memo);
      this.memo = null;
    },
    listEdit() {
      if (this.memo === null) {
        alert("할일을 입력해주세요");
        return false;
      }
      this.$emit("listEdit", this.memo, this.index);
      this.memo = null;
      this.mode = "add";
    }
  }
};
</script>