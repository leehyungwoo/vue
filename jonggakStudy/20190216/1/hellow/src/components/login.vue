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
      <td>
        <button @click="join()">접속</button>
      </td>
      <td>
        <a
          href="#joinUs"
          @click="gotoJoinUs()"
        >회원가입</a>
      </td>
    </tr>
  </table>

</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      u_id: "",
      u_ps: ""
    };
  },
  methods: {
    gotoJoinUs: function() {
      event.preventDefault();
      this.$Bus.currentView = "joinUs";
    },
    join: function() {
      if (!confirm("접속하시겠습니까?")) return false;
      var insert_date = {
        title: this.u_id,
        content: this.u_ps
      };
      this.$Bus.Post("/member/list", insert_date).then(res => {
        if (res.data.length !== 0) {
          alert("로그인되었습니다");

          this.$Bus.isLogin = true;
          this.$Bus.u_id = res.data[0].id;
          this.$Bus.u_name = res.data[0].name;
          this.$Bus.currentView = "list";
        } else {
          alert("확인하세요");
        }
      });
    }
  }
};
</script>