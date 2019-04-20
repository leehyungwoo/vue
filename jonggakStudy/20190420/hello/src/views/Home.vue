<template>
  <div class="home">
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
    <button @click="addUser">추가</button>
    <ul>
      <li
        v-for="user in users"
        :key="user.no"
      >
        {{user}}
        <img
          :src="user.photo"
          width="100"
        >
        <button @click="$router.push({ name: 'detail', params: { user}})"> detail</button>
        <button @click="delUser(user)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      userName: "",
      userTel: "",
      userAddress: ""
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("/contacts" + "?pageno=0&pagesize=10")
        .then(r => {
          console.log(r);
          this.users = r.data.contacts;
        })
        .catch(e => {
          console.log(e);
        });
    },
    addUser() {
      axios
        .post("/contacts/", {
          name: this.userName,
          tel: this.userTel,
          address: this.userAddress
        })
        .then(r => {
          console.log(r);
          this.getUser();
        })
        .catch(e => {
          alert("추가오류", e);
        });
    },
    delUser(user) {
      axios
        .delete("/contacts/" + user.no)
        .then(r => {
          console.log("제거성공", r);
          this.getUser();
        })
        .catch(e => {
          alert("제거오류", e);
        });
    }
  }
};
</script>