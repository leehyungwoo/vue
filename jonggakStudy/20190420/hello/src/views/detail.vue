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
      @change="test()"
      type="file"
      width="100"
    >

    <button @click="putUser">수정</button>

  </div>
</template>

<script>
let data = new FormData();
export default {
  data() {
    return {
      userName: "",
      userTel: "",
      userAddress: "",
      userNo: 0,
      userPhoto: "",
      file: null
    };
  },
  mounted() {
    const user = this.$route.params.user;
    this.userName = user.name;
    this.userTel = user.tel;
    this.userAddress = user.address;
    this.userPhoto = user.photo;
    this.userNo = user.no;
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
          this.$router.push({ name: "home" });
        })
        .catch(e => {
          alert("추가오류", e);
        });
      axios
        .post("/contacts/" + this.userNo + "/photo", {
          data
        })
        .then(r => {
          console.log("수정데이터", r);
          alert("수정 성공");
          this.$router.push({ name: "home" });
        })
        .catch(e => {
          alert("추가오류", e);
        });
    },
    test() {
      var file = event.target.files[0];
      data.append(file.name, file);
    }
  }
};
</script>