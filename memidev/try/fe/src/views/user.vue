<template>
  <div class="about">
    <v-container
      grid-list-md
      text-xs-center
    >
      <v-layout>
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
              <v-textarea v-model="delMd"> </v-textarea>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="orange"
                @click="delReq"
              >Share</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex> -->
        <v-flex
          xs12
          sm6
          md4
          v-for="user in users"
          :key="user.name"
        >
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{user.name}}</h3>
                <div> {{ user.age}} </div>
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
                @click="delUser(user._id)"
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
        {{sbMsg}}
        <v-btn
          color="pink"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </div>
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
      delMd: "",
      userAges: [],
      dialog: false,
      userName: "",
      userAge: 0,
      snackbar: false,
      sbMsg: "",
      putId: ""
    };
  },
  mounted() {
    console.log(this.$apiRootPath);
    for (var i = 10; i <= 40; i++) {
      this.userAges.push(i);
    }
    this.getUsers();
  },
  methods: {
    getReq() {
      axios
        .get(`${this.$apiRootPath}/user`, {
          params: { user: "getMan" }
        })
        .then(r => {
          this.getMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.error(e.message);
        });
    },
    postReq() {
      axios
        .post(`${this.$apiRootPath}/user`, {
          name: "가정",
          age: 444
        })
        .then(r => {
          this.postMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.error(e.message);
        });
    },
    putReq() {
      axios
        .put(`${this.$apiRootPath}/user`, {
          user: "putMan"
        })
        .then(r => {
          this.putMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.error(e.message);
        });
    },
    delReq() {
      axios
        .delete(`${this.$apiRootPath}/user`)
        .then(r => {
          this.delMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.error(e.message);
        });
    },
    mdUp() {
      this.dialog = true;
    },
    postUser() {
      this.dialog = false;

      axios
        .post(`${this.$apiRootPath}/user`, {
          name: this.userName,
          age: this.userAge
        })
        .then(() => {
          this.pop("사용자 등록 완료");
          this.getUsers();
        })
        .catch(e => {
          this.pop(e.message);
        });
    },
    getUsers() {
      axios
        .get(`${this.$apiRootPath}/user`)
        .then(r => {
          this.users = r.data.users;
        })
        .catch(e => {
          console.error(e.message);
        });
    },
    putDialog(user) {
      this.putId = user.id;
      this.dialog = true;
      this.userName = user.name;
      this.userAge = user.age;
    },
    putUser() {
      this.dialog = false;
      axios
        .put(`${this.$apiRootPath}/user/${this.putId}`, {
          name: this.userName,
          age: this.userAge
        })
        .then(() => {
          this.pop("사용자 수정 완료");
          this.getUsers();
        })
        .catch(e => {
          this.pop(e.message);
        });
    },
    delUser(id) {
      axios
        .delete(`${this.$apiRootPath}/user/${id}`)
        .then(() => {
          this.pop("사용자 삭제 완료");
          this.getUsers();
        })
        .catch(e => {
          this.pop(e.message);
        });
    },
    pop(msg) {
      this.snackbar = true;
      this.sbMsg = msg;
    }
  }
};
</script>
 