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
            <div>
              <h3 class="headline mb-0">get</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="getMd">

            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="getReq"
              flat
              color="orange"
            >submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm3
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">post</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="postMd">

            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="postReq"
              flat
              color="orange"
            >submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm3
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">put</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="putMd">

            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="putReq"
              flat
              color="orange"
            >submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm3
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">del</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="delMd">

            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="delReq"
              flat
              color="orange"
            >submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex> -->
      <v-flex
        xs12
        sm6
        md4
        v-for="(u,i) in users"
        :key="i"
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{u.name}}</h3>
              <div> {{ u.age }} </div>
            </div>
          </v-card-title>
          <v-card-actions>

            <v-btn
              @click="putDialog(u)"
              flat
              color="orange"
            >수정</v-btn>
            <v-btn
              @click="delUser(u._id)"
              flat
              color="orange"
            >삭제</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-btn
        @click="mdUp"
        color="pink"
        dark
        small
        absolute
        bottom
        right
        fab
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="400px"
    >
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex
                xs12
                sm12
              >
                <v-text-field
                  label="Legal first name"
                  required
                  v-model="userName"
                ></v-text-field>
              </v-flex>

              <v-flex
                xs12
                sm12
              >
                <v-select
                  :items="userAges"
                  label="Age*"
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
            v-if="this.putId"
          >수정</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="postUser"
            v-else
          >Save</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="dialog = false"
          >Close</v-btn>

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
export default {
  data() {
    return {
      users: null,
      getMd: "",
      postMd: "",
      putMd: "",
      delMd: "",
      dialog: false,
      userName: "",
      userAge: 0,
      userAges: [],
      snackbar: false,
      sbMsg: "",
      putId: null
    };
  },
  mounted() {
    for (let i = 10; i <= 40; i++) {
      this.userAges.push(i);
    }
    this.getUsers();
  },
  methods: {
    getReq() {
      this.axios
        .get(`${this.$apiRootPath}user`, {
          params: {
            user: "getman"
          }
        })
        .then(r => {
          this.getMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    postReq() {
      this.axios
        .post(`${this.$apiRootPath}user`, { name: "가정", age: 444 })
        .then(r => {
          this.postMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    putReq() {
      this.axios
        .put(`${this.$apiRootPath}user`, { user: "postman" })
        .then(r => {
          this.putMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    delReq() {
      this.axios
        .delete(`${this.$apiRootPath}user`)
        .then(r => {
          this.delMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    mdUp() {
      this.userName = "";
      this.userAge = "";
      this.dialog = true;
      this.putId = null;
    },
    postUser() {
      this.dialog = false;
      this.axios
        .post(`${this.$apiRootPath}user`, {
          name: this.userName,
          age: this.userAge
        })
        .then(r => {
          this.postMd = JSON.stringify(r.data);
          this.pop("사용자 등록 완료");
          this.getUsers();
        })
        .catch(e => {
          this.pop(e.message);
        });
    },
    getUsers() {
      this.axios
        .get(`${this.$apiRootPath}user`, {
          params: {
            user: "getman"
          }
        })
        .then(r => {
          console.log(r);
          this.users = r.data.users;
        })
        .catch(e => {
          this.pop(e.message);
        });
    },
    putDialog(user) {
      this.putId = user._id;
      this.dialog = true;
      this.userName = user.name;
      this.userAge = user.age;
    },
    putUser() {
      this.axios
        .put(`${this.$apiRootPath}user/${this.putId}`, {
          name: this.userName,
          age: this.userAge
        })
        .then(r => {
          this.putMd = JSON.stringify(r.data);
          this.pop("사용자 수정완료");
          this.getUsers();
          this.dialog = false;
        })
        .catch(e => {
          this.pop(e.message);
        });
    },
    delUser(id) {
      this.axios
        .delete(`${this.$apiRootPath}user/${id}`)
        .then(r => {
          console.log(r);
          this.pop("사용자 삭제완료");
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