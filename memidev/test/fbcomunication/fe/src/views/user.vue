<template>
  <v-container
    grid-list-md
    text-xs-center
  >
    <v-layout
      row
      wrap
    >
      <!-- <v-flex
            xs12
            sm3
        >
            <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">get</h3>
                <v-textarea v-model="getMd">
                </v-textarea>
            </v-card-title>
            <v-card-actions>
                <v-btn
                flat
                color="orange"
                @click="getReq"
                >Share</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex
            xs12
            sm3
        >
            <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">post</h3>
                <v-textarea v-model="postMd"> </v-textarea>
            </v-card-title>
            <v-card-actions>
                <v-btn
                flat
                color="orange"
                @click="postReq"
                >Share</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex
            xs12
            sm3
        >
            <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">put</h3>
                <v-textarea v-model="putMd"> </v-textarea>
            </v-card-title>
            <v-card-actions>
                <v-btn
                flat
                color="orange"
                @click="putReq"
                >Share</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex
            xs12
            sm3
        >
            <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">delete</h3>
                <v-textarea v-model="deleteMd"> </v-textarea>
            </v-card-title>
            <v-card-actions>
                <v-btn
                flat
                color="orange"
                @click="deleteReq"
                >Share</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex> -->

      <v-flex
        xs12
        sm4
        v-for="user in users"
        :key="user.name"
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{user.name}}</h3>
              <div> {{ user.age }} </div>
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

      <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="pink"
        @click="mdUp"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >

      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  label="Legal first name*"
                  required
                  v-model="userName"
                ></v-text-field>
              </v-flex>

              <v-flex
                xs12
                sm6
              >
                <v-select
                  :items="userAges"
                  label="Age"
                  required
                  v-model="userAge"
                ></v-select>
              </v-flex>

            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            flat
            @click="putUser"
          >수정</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="dialog = false"
          >Close</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="postUser"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar">
      {{ sbMsg }}
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
      users: [],
      getMd: "",
      postMd: "",
      putMd: "",
      deleteMd: "",
      dialog: false,
      userAges: [],
      userName: "",
      userAge: 0,
      snackbar: false,
      sbMsg: "",
      putUserid: 0
    };
  },
  mounted() {
    for (let i = 10; i < 40; i++) {
      this.userAges.push(i);
    }
    this.getUsers();
  },
  methods: {
    getReq() {
      axios
        .get("http://localhost:3000/api/user", {
          params: {
            user: "테스트"
          }
        })
        .then(r => {
          const d = r.data;
          d.success
            ? (this.getMd = JSON.stringify(d.users))
            : (this.getMd = "에러");
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    postReq() {
      axios
        .post("http://localhost:3000/api/user", {
          user: "postMan"
        })
        .then(r => {
          const d = r.data;
          d.success
            ? (this.postMd = JSON.stringify(d.msg))
            : (this.postMd = "에러");
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    putReq() {
      axios
        .put("http://localhost:3000/api/user", {
          user: "putMan"
        })
        .then(r => {
          const d = r.data;
          d.success
            ? (this.putMd = JSON.stringify(d.msg))
            : (this.putMd = "에러");
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    deleteReq() {
      axios
        .delete("http://localhost:3000/api/user")
        .then(r => {
          const d = r.data;
          d.success
            ? (this.deleteMd = JSON.stringify(d.msg))
            : (this.deleteMd = "에러");
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    mdUp() {
      this.dialog = true;
    },
    postUser() {
      this.dialog = false;
      axios
        .post("http://localhost:3000/api/user", {
          name: this.userName,
          age: this.userAge
        })
        .then(r => {
          const d = r.data;
          if (d.success) {
            this.pop("등록성공");
          } else {
            this.pop("등록실패");
          }
          this.getUsers();
          this.userName = "";
          this.userAge = "";
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    getUsers() {
      axios
        .get("http://localhost:3000/api/user")
        .then(r => {
          const d = r.data;
          d.success ? (this.users = d.users) : (this.users = "에러");
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    putDialog(user) {
      this.dialog = true;
      this.putUserid = user._id;
      this.userName = user.name;
      this.userAge = user.age;
    },
    putUser() {
      axios
        .put("http://localhost:3000/api/user", {
          name: this.userName,
          age: this.userAge,
          id: this.putUserid
        })
        .then(r => {
          const d = r.data;
          if (d.success) {
            this.pop("수정 성공");
            this.getUsers();
          } else {
            this.pop("수정 실패");
          }
          this.dialog = false;

          this.userName = "";
          this.userAge = "";
          this.putUserid = null;
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    delUser(user) {
      console.log(user);
      axios
        .delete("http://localhost:3000/api/user/" + user._id)
        .then(r => {
          const d = r.data;
          if (d.success) {
            this.pop("제거 성공");
          } else {
            this.pop("제거 성공");
          }
          this.dialog = false;
          this.getUsers();
        })
        .catch(e => {
          this.sbMsg = e.message;
        });
    },
    pop(msg) {
      this.snackbar = true;
      this.sbMsg = msg;
    }
  }
};
</script>