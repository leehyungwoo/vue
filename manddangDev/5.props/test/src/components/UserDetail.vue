<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <v-list dense>
      <v-list-title dark>
        <v-list-title-contnet>이름:</v-list-title-contnet>
        <v-list-title-contnet class="align-end'">{{name}}</v-list-title-contnet>
      </v-list-title>
      <v-list-title>
        <v-list-title-contnet>주소:</v-list-title-contnet>
        <v-list-title-contnet class="align-end'">{{address}}</v-list-title-contnet>
      </v-list-title>
      <v-list-title>
        <v-list-title-contnet>전화번호:</v-list-title-contnet>
        <v-list-title-contnet class="align-end'">{{phone}}</v-list-title-contnet>
      </v-list-title>
      <v-list-title>
        <v-list-title-contnet>반려견유무:</v-list-title-contnet>
        <v-list-title-contnet class="align-end'">{{hasDogKr}}</v-list-title-contnet>
      </v-list-title>
    </v-list>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    name: { type: String },
    address: { type: String },
    hasDog: { type: Boolean }
  },
  computed: {
    hasDogKr: function() {
      return this.hasDog ? "있음" : "없음";
    }
  }
};
</script>
 