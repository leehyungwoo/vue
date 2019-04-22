<template>
  <div class="home">
    <div class="f">
      <h2>추가</h2>
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

    </div>
    <div class="f">
      <h2>찾기</h2>
      <input
        type="text"
        v-model="userSearch"
        @keyup="keySearch"
        placeholder="search"
      >

    </div>
    <ul>
      <li
        v-for="(user,index) in users"
        :key="user.no"
      >
        <p><b>{{index}}</b></p>
        <p>no: {{user.no}}</p>
        <p>name: {{user.name}}</p>
        <p>tel: {{user.tel}}</p>
        <p>address: {{user.address}}</p>
        <br />
        <img
          :src="user.photo"
          width="100"
        >
        <br />
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
      userAddress: "",
      userSearch: ""
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("/contacts")
        .then(r => {
          this.users = r.data.contacts;
        })
        .catch(e => {
          alert("getUsers 오류", e);
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
          this.getUsers();
        })
        .catch(e => {
          alert("addUser 오류", e);
        });
    },
    delUser(user) {
      axios
        .delete("/contacts/" + user.no)
        .then(r => {
          this.getUsers();
        })
        .catch(e => {
          alert("delUser 오류", e);
        });
    },

    keySearch(e) {
      console.log(e.target.value);
      //널이면 전체랜더링
      axios
        .get("/contacts/search/" + this.userSearch)
        .then(r => {
          this.users = r.data;
        })
        .catch(e => {
          alert("searchUser 오류", e);
        });
    }
  }
};
</script>

<style>
.f {
  width: 200px;
  margin: 0 auto;
  list-style: none;
  border: 1px solid black;
  box-shadow: 4px 3px 0 #aaa;
}
li {
  float: left;
  width: 200px;
  height: 400px;
  list-style: none;
  border: 1px solid black;
  box-shadow: 4px 3px 0 #aaa;
  margin: 20px;
}
</style>