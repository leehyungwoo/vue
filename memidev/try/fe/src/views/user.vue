<template>
  <div class="about">
    <v-container
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex
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
                flat
                color="orange"
                @click="getReq"
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
                flat
                color="orange"
                @click="postReq"
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
                flat
                color="orange"
                @click="putReq"
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
                flat
                color="orange"
                @click="delReq"
              >submit</v-btn>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
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
      delMd: ""
    };
  },
  mounted() {},
  methods: {
    getReq() {
      axios
        .get("http://localhost:3000/api/user", {
          params: { user: "getMan" } //보통 보내는값은 몇개의 데이터를 가져온다 ,어떤 데이터를 가져온다
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
        .post("http://localhost:3000/api/user", {
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
        .put("http://localhost:3000/api/user/_id", {
          // _id:수정될 대상,  뒤에 post로 전달하는 객체는 변경할것
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
        .delete("http://localhost:3000/api/user/_id")
        .then(r => {
          this.delMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.error(e.message);
        });
    }
  }
};
</script>