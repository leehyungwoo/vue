<template>
  <table>
    <caption></caption>
    <tr>
      <th><label for="u_id">아이디</label> </th>
      <td><input
          type="text"
          id="u_id"
          v-model="u_id"
        ></td>
    </tr>
    <tr>
      <th><label for="u_ps">비밀번호</label> </th>
      <td><input
          type="password"
          id="u_ps"
          v-model="u_ps"
        ></td>
    </tr>
    <tr>
      <th><label for="u_name">이름</label> </th>
      <td><input
          type="text"
          id="u_name"
          v-model="u_name"
        ></td>
    </tr>
    <tr>
      <td colspan="2">
        <button @click="member_join">가입</button>
      </td>

    </tr>
  </table>
</template>

<script>
export default {
  name: "joinUs",
  data: function() {
    return {
      u_id: "",
      u_ps: "",
      u_name: ""
    };
  },
  methods: {
    gotoJoinUs: function() {
      event.preventDefault();
      this.$Bus.currentView = "joinUs";
    },
    member_join() {
      if (!confirm("등록하시겠습니까?")) return false;
      var insert_date = {
        title: this.u_id,
        content: this.u_ps,
        name: this.u_name
      };
      this.$Bus.Post("/member/insert", insert_date).then(res => {
        if (res.data.code == "00") {
          alert("등록되었습니다");
          this.$Bus.currentView = "list";
        } else {
          alert(res.data.msg);
        }
      });
    }
  }
};
</script>