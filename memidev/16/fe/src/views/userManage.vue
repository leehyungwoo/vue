<template>
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
      </v-flex>
    </v-layout>
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
      delMd: ""
    };
  },
  mounted() {},
  methods: {
    getReq() {
      axios
        .get("http://localhost:3000/api/user", {
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
      axios
        .post("http://localhost:3000/api/user", {  name:'가정',age:444 })
        .then(r => {
          this.postMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    putReq() {
      axios
        .put("http://localhost:3000/api/user", {user: "postman" })
        .then(r => {
          this.putMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    delReq() {
      axios
        .delete("http://localhost:3000/api/user")
        .then(r => {
          this.delMd = JSON.stringify(r.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  }
};
</script>