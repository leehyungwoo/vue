<template>
  <div class="wrap">
    <div class="ui form">
      <div class="field">
        <label for="inputId">ID</label>
        <input type="text" name="inputId"  id="inputId" v-model="inputId" placeholder="ID">
      </div>
      <div class="field">
        <label for="inputPassword">Password</label>
        <input type="password"  name="last-name" id="inputPassword" v-model="inputPassword" placeholder="Password">
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" @click="apply()">Submit</button>
      <button class="ui button" @click="$router.go(-1)">back</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "join",
  data() {
    return {
      inputId: "",
      inputPassword: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    apply() {
      function check(re, what, message) {
        if (re.test(what.value)) {
          return true;
        }
        alert(message);
        what.value = "";
        what.focus();
        //return false;
      }
      var re = /^[a-zA-Z0-9]{4,12}$/;
      var id = document.getElementById("inputId");
      var pw = document.getElementById("inputPassword");
      if (this.inputId.trim() === "" && this.inputPassword.trim() === "") {
        alert("값이 비었습니다");
      } else if (
        !check(re, id, "아이디는 4~12자의 영문 대소문자와 숫자로만 입력")
      ) {
        return false;
      } else if (
        !check(re, pw, "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")
      ) {
        return false;
      } else {
        var that = this;
        this.axios
          .post("/api/join", {
            params: {
              id: this.inputId,
              password: this.inputPassword
            }
          })
          .then(function(res) {
            var code = JSON.parse(res.data.code);
            switch (code) {
              case 0:
                alert("성공");
                that.$router.push("login");
                break;
              case 50:
                alert("아이디중복");
                break;
              default:
                alert("실패");
            }
          })
          .catch(function(err) {
            alert("에러");
            alert(err);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blind {
  position: absolute;
  display: inline-block;
  text-indent: -999px;
}
.wrap {
  height:100%;
  display: table-cell;
  vertical-align: middle;
}

</style>
