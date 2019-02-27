<template>
  <div class="jc">
    <p><input
        v-model="userInfo.userId"
        type="text"
        placeholder="아이디"
      ></p>
    <p><input
        v-model="userInfo.userPs"
        type="password"
        placeholder="비밀번호"
      ></p>
    <p><input
        v-model="userInfo.userName"
        type="text"
        placeholder="이름"
      ></p>
    <p><input
        v-model="userInfo.userAddress"
        type="text"
        placeholder="주소"
      ></p>
    <button @click="addUser()">등록</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        userId: "",
        userPs: "",
        userName: "",
        userAddress: ""
      }
    };
  },
  methods: {
    addUser() {
      const conditionChk =
        this.userInfo.userId &&
        this.userInfo.userPs &&
        this.userInfo.userName &&
        this.userInfo.userAddress &&
        this.userInfo.userId.trim() !== "" &&
        this.userInfo.userPs.trim() !== "" &&
        this.userInfo.userName.trim() !== "" &&
        this.userInfo.userAddress.trim() !== "";

      if (conditionChk) {
        this.$emit("addUser", {
          userId: this.userInfo.userId,
          userPs: this.userInfo.userPs,
          userName: this.userInfo.userName,
          userAddress: this.userInfo.userAddress
        });
      } else {
        alert("값이 잘못되었습니다");
      }
      this.clearForm();
    },
    clearForm() {
      this.userInfo.userId = null;
      this.userInfo.userPs = null;
      this.userInfo.userName = null;
      this.userInfo.userAddress = null;
    }
  }
};
</script>

<style>
.jc {
  float: left;
}
</style>