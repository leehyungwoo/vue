<template>
  <div class="hello">
    <template v-if="!templateFlag">
      <div>
        <ul>
          <li
            v-for="(con,index) in models"
            :key="index"
          >
            {{con}}
            <button @click="modify(index)">수정버튼</button>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div>

        <input
          type="text"
          v-model="form.id"
        >
        <button @click="modi()">수정</button>
        <button @click="goback()">뒤로가기</button>
      </div>
    </template>
  </div>
</template>

<script>
var models = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default {
  name: "HelloWorld",
  data() {
    return {
      templateFlag: false,
      models,
      form: {
        index: null,
        id: ""
      }
    };
  },
  methods: {
    formInit() {
      this.form.id = "";
      this.form.index = null;
    },
    modify(index) {
      this.formInit();
      this.form.id = this.models[index];
      this.form.index = index;
      this.templateFlag = !this.templateFlag;
    },
    modi() {
      this.models[this.form.index] = this.form.id;
      this.formInit();
      this.templateFlag = !this.templateFlag;
    },
    goback() {
      this.formInit();
      this.templateFlag = !this.templateFlag;
    }
  }
};
</script>
 <style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>