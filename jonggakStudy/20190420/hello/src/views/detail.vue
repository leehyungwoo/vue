<template>
  <div class="detail">
    디테일
    <input
      type="text"
      v-model="userName"
      placeholder="name"
    >
    <input
      type="text"
      v-model="userTel"
      placeholder="tel"
    >
    <input
      type="text"
      v-model="userAddress"
      placeholder="address"
    >
    <input
      type="image"
      :src="userPhoto"
      width="100"
    >
    수정할이미지
    <input
      @change="appendFormData()"
      type="file"
      width="100"
    >

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
      axios
        .put("/contacts/" + this.userNo, {
          name: this.userName,
          tel: this.userTel,
          address: this.userAddress
        })
        .then(r => {
          axios
            .post("/contacts/" + this.userNo + "/photo", data)
            .then(r => {
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