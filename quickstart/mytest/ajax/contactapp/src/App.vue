<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <button @click="fetchContacts">1페이지 연락처 조회</button>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="name"
          placeholder="이름을 입력합니다"
        />
        <input
          type="text"
          v-model="tel"
          placeholder="전화번호를 입력합니다"
        />
        <input
          type="text"
          v-model="address"
          placeholder="주소를 입력합니다"
        />
        <button @click="addContact">연락처 1건 추가</button>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="no"
        /> <button @click="fetchContactOne">연락처 1건 조회</button>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="no"
        />
        <input
          type="text"
          v-model="name"
          placeholder="이름을 입력합니다"
        />
        <input
          type="text"
          v-model="tel"
          placeholder="전화번호를 입력합니다"
        />
        <input
          type="text"
          v-model="address"
          placeholder="주소를 입력합니다"
        />
        <button @click="updateContact">수정</button>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="no"
        /> <button @click="deleteContact">삭제</button>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="no"
        />
        <input
          type="file"
          ref="photofile"
          name="photo"
        />
        <button @click="changePhoto">파일 변경</button>
      </div>
    </div>
    <span>JSON 출력</span>
    <div
      id="result"
      class="container"
    >
      <xmp>{{result}}</xmp>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var api = "http://sample.bmaster.kro.kr/contacts";
export default {
  name: "app",
  data() {
    return {
      no: 0,
      name: "",
      tel: "",
      address: "",
      result: null
    };
  },
  methods: {
    fetchContacts: function() {
      axios
        .get(api + "?pageno=1")
        .then(response => {
          return response.data;
        })
        .then(data => {
          this.result = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addContact: function() {
      var name = this.name;
      var tel = this.tel;
      var address = this.address;

      axios
        .post(api + "?pageno=1", {
          name,
          tel,
          address
        })
        .then(response => {
          console.log("성공");
          this.result = response.data.message;
        })

        .catch(err => {
          console.log("실패");
          console.log(err);
        });
    },
    fetchContactOne: function() {
      axios
        .get(api + "/" + no)
        .then(response => {
          return response.data;
        })
        .then(data => {
          this.result = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateContact: function() {
      var no = this.no;
      var name = this.name;
      var tel = this.tel;
      var address = this.address;

      axios
        .put(api + "/" + no, {
          no,
          name,
          tel,
          address
        })
        .then(response => {
          return response.data;
        })
        .then(data => {
          this.result = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteContact: function() {
      var no = this.no;
      axios
        .delete(api + "/" + no)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePhoto: function() {
      var photofile = this.$refs.photofile;

      var no = this.no;
      var data = new FormData();

      data.append("photo", photofile.files[0]);

      axios
        .post(api + "/" + no + "/photo", data)
        .then(response => {
          console.log(response);
        })
        .catch(ex => {
          console.log("updatePhoto failed", ex);
        });
    }
  }
};
</script>

<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: solid 1px gray;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
}
#result {
  text-align: left;
  padding: 20px;
  border: solid 1px black;
}
.form-group {
  border: dashed 1px gray;
  padding: 5px 5px 5px 20px;
}
</style>