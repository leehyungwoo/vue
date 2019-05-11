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

    <b-table
      id="my-table"
      :items="users"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >

    </b-table>
    <b-pagination
      align="fill"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <h2>찾기</h2>
    <input
      type="text"
      v-model="userSearch"
      @keyup="keySearch"
      placeholder="search"
    >
    <ul id="view">
      <li
        v-for="(user,index) in users"
        :key="user.no"
        :per-page="perPage"
        :current-page="currentPage"
        small
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
import { setTimeout } from "timers";
var timer;

export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
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
  computed: {
    rows() {
      return this.users.length;
    }
  },
  methods: {
    getUsers() {
      this.axios
        .get("/contacts")
        .then(r => {
          this.users = r.data.contacts;
        })
        .catch(e => {
          alert("getUsers 오류", e);
        });
    },
    addUser() {
      this.axios
        .post("/contacts/", {
          name: this.userName,
          tel: this.userTel,
          address: this.userAddress
        })
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert("addUser 오류", e);
        });
    },
    delUser(user) {
      this.axios
        .delete("/contacts/" + user.no)
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert("delUser 오류", e);
        });
    },

    keySearch() {
      if (!timer && this.userSearch.length > 1) {
        timer = setTimeout(
          function() {
            timer = null;
            this.axios
              .get("/contacts/search/" + this.userSearch)
              .then(r => {
                this.users = r.data;
              })
              .catch(e => {
                alert("searchUser 오류", e);
              });
          }.bind(this),
          600
        );
      }
      if (this.userSearch.length === 0) {
        this.getUsers();
      }
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
  padding-bottom: 10px;
}
.f:nth-last-of-type(1) {
  margin-bottom: 30px;
}

#view {
  /* column-gap: 10px; */
  /*column-width: 200px; */
}
#view li {
  float: left;
  width: 250px;
  height: 400px;
  overflow-y: hidden;
  list-style: none;
  border: 1px solid black;
  box-shadow: 4px 3px 0 #aaa;
  margin: 20px;
}
</style>