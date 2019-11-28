<template lang="html">
  <div class="ui form">
    <sui-form-field>
      <label>Id</label>
      <input placeholder="Id" v-model="signUpId" >
    </sui-form-field>
    <sui-form-field>
      <label>Password</label>
      <input placeholder="Password" v-model="signUpPassword">
    </sui-form-field>
    <sui-form-field>
      <sui-checkbox label="I agree to the Terms and Conditions" v-model="agreeChk"/>
    </sui-form-field>
    <sui-button @click="signUp()">Submit</sui-button>
    <sui-button @click="$router.push('home')">Cancel</sui-button>
  </div>
</template>

<script>
export default {
  name: 'FormExample',
  data(){
    return {
      signUpId:'',
      signUpPassword:'',
      agreeChk:false
    }
  },
  methods:{
    signUp(){
      if(this.agreeChk){
        this.axios.post('/join',{
          signUpId:this.signUpId,
          signUpPassword:this.signUpPassword
        }).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
      }else{
        alert('agree check plz')
      }
    }
  }
};
</script>