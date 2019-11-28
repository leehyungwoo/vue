<template>
  <div class="login">
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
                <input type="text" name="inputId" placeholder="Id" v-model="inputId">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="inputPassword" placeholder="Password" v-model="inputPassword">
              </div>
            </div>
            <div class="ui fluid large teal submit button">Login</div>
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
  name: "loginComponent",
  data(){
    return {
      inputId:'',
      inputPassword:''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
