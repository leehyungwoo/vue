<template>
  <table>
    <caption></caption>

    <tr>
      <th><label for="u_ps">기존 비밀번호</label> </th>
      <td><input
          type="password"
          id="u_ps"
          v-model="u_ps"
        ></td>
    </tr>
    <tr>
      <th><label for="u_nps">바꿀 비밀번호</label> </th>
      <td><input
          type="text"
          id="u_nps"
          v-model="u_nps"
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
        <button @click="member_join">수정</button>
      </td>

    </tr>
  </table>
</template>

<script>
export default {
  name: "joinUs",
  data: function() {
    return {
      u_id: this.$Bus.u_id,
      u_nps: "",
      u_ps: "",
      u_name: this.$Bus.u_name
    };
  },
  methods: {
    gotoJoinUs: function() {
      event.preventDefault();
      this.$Bus.currentView = "joinUs";
    },
    member_join() {
      if (!confirm("수정하시겠습니까?")) return false;
      var insert_date = {
        uid: this.u_id,
        nps: this.u_nps,
        ps: this.u_ps,
        name: this.u_name
      };
      this.$Bus.Post("/member/update", insert_date).then(res => {
        if (res.data.code == "00") {
          alert("수정되었습니다");
          this.$Bus.currentView = "list";
        } else {
          alert(res.data.msg);
        }
      });
    }
  }
};
</script>