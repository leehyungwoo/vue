<template>
<div class="wrap">
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" id="inputId" v-model="inputId"  name="inputId" placeholder="ID">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" id="inputPassword" v-model="inputPassword" name="inputPassword" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large teal submit button" @click="login()">Login</div>
      </div>
      <div class="ui error message"></div>
    </form>
    <div class="ui message">
      New to us? <a href="join" @click="$router.push('join')">Sign Up</a>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "login",
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
    login() {
      if (this.inputId.trim() === "" && this.inputPassword.trim() === "") {
        alert("값이 비었습니다");
      } else {
        var that = this;
        this.$axios.post("/api/login", {
          params: {
            id: this.inputId,
            password: this.inputPassword
          }
        }).then(function(res){
          var code =res.data.code;
          if(code ===0){
            alert(res.data.info);   //로그인 성공  
            that.$router.push({ name: 'board', params: { userId: res.data.results }})
          }else{
            alert('로그인실패'); 
          }
        }).catch(function(err){
          alert(err)
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

</style>
