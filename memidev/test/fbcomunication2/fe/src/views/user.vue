<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
      fill-height
    >
      <v-flex
        xs6
        sm4
        v-for="(user,index) in users"
        :key="index"
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{user.name}}</h3>
              <div>{{user.age}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              flat
              color="orange"
              @click="putDialog(user)"
            >수정</v-btn>
            <v-btn
              flat
              color="error"
              @click="delUser(user)"
            >삭제</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-btn
      color="pink"
      dark
      small
      absolute
      bottom
      right
      fab
      @click="dialog=true"
    >
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          입력창
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="userName"
            :counter="10"
            label="name"
            required
          ></v-text-field>
          <v-select
            :items="userAges"
            label="age"
            v-model="userAge"
          ></v-select>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="postUser()"
          >
            등록
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="putUser()"
          >
            수정
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="dialogInit()"
          >
            취소
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar">
      {{ this.sbMsg }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userAges: [],
      userName: "",
      userAge: 0,
      putUserId: null,
      users: [{ name: "lee", age: 30 }],
      dialog: false,
      snackbar: false,
      sbMsg: null
    };
  },
  mounted() {
    for (var i = 10; i <= 50; i += 1) {
      this.userAges.push(i);
    }
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get(`${this.apiRootPath}/user`)
        .then(r => {
          this.users = r.data.users;
        })
        .catch(e => {
          this.sbFunc(e);
        });
    },
    postUser() {
      this.dialog = false;
      axios
        .post(`${this.apiRootPath}/user`, {
          name: this.userName,
          age: this.userAge
        })
        .then(r => {
          if (r.data.success) {
            this.sbFunc(r.data.msg);
            this.getUsers();
          } else {
            this.sbFunc("중복되었거나 잘못된 name값입니다");
          }
          this.dialogInit();
        })
        .catch(e => {
          this.sbFunc(e);
        });
    },
    putDialog(user) {
      this.dialog = true;
      this.userName = user.name;
      this.userAge = user.age;
      this.putUserId = user._id;
    },
    putUser() {
      axios
        .put(`${this.apiRootPath}/user`, {
          name: this.userName,
          age: this.userAge,
          _id: this.putUserId
        })
        .then(r => {
          if (r.data.success) {
            this.sbFunc(r.data.msg);
            this.getUsers();
          } else {
            this.sbFunc("이미있거나 잘못된 name값입니다");
          }
          this.dialogInit();
        })
        .catch(e => {
          this.sbFunc(e);
        });
    },
    delUser(user) {
      axios
        .delete(`${this.apiRootPath}/user`, { params: { _id: user._id } })
        .then(r => {
          if (r.data.success) {
            this.sbFunc(r.data.msg);
            this.getUsers();
          } else {
            this.sbFunc("잘못된 값입니다");
          }
        })
        .catch(e => {
          this.sbFunc(e);
        });
    },
    sbFunc(arg) {
      this.snackbar = true;
      this.sbMsg = arg;
    },
    dialogInit() {
      this.dialog = false;
      this.userName = "";
      this.userAge = 0;
    }
  }
};
</script>
