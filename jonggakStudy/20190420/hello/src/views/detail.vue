<template>
  <div class="detail">

    디테일<br />
    <input
      type="text"
      v-model="userName"
      placeholder="name"
    ><br />
    <input
      type="text"
      v-model="userTel"
      placeholder="tel"
    ><br />
    <input
      type="text"
      v-model="userAddress"
      placeholder="address"
    ><br />
    <input
      type="image"
      :src="userPhoto"
      width="100"
    ><br />
    수정할이미지<br />
    <input
      @change="appendFormData()"
      type="file"
      width="100"
    ><br />

    <button @click="putUser">수정</button>
    <button @click="$router.go(-1)">뒤로가기</button>

  </div>
</template>

<script>
let data = null;

export default {
  data() {
    return {
      userNo: 0,
      userName: "",
      userTel: "",
      userAddress: "",
      userPhoto: ""
    };
  },
  mounted() {
    const user = this.$route.params.user;
    this.userNo = user.no;
    this.userName = user.name;
    this.userTel = user.tel;
    this.userAddress = user.address;
    this.userPhoto = user.photo;
  },
  methods: {
    putUser() {
      this.axios
        .put("/contacts/" + this.userNo, {
          name: this.userName,
          tel: this.userTel,
          address: this.userAddress
        })
        .then(() => {
          this.axios
            .post("/contacts/" + this.userNo + "/photo", data)
            .then(() => {
              this.$router.push({ name: "home" });
            })
            .catch(e => {
              alert("putUser 오류2", e);
            });
        })
        .catch(e => {
          alert("putUser 오류", e);
        });
    },
    appendFormData() {
      data = new FormData();
      var file = event.target.files[0];
      data.append("photo", file);
    }
  }
};
</script>

<style>
.detail {
  width: 400px;
  margin: 0 auto;
  border: 1px solid black;
  box-shadow: 4px 3px 0 #aaa;
}
</style>