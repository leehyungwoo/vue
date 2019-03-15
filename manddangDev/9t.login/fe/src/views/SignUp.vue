<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm6
      >

        <v-alert
          :value="true"
          type="error"
          v-if="signUpError"
        >
          This is a error alert.
        </v-alert>
        <v-alert
          :value="true"
          type="success"
          v-if="isSignUp"
        >
          This is a success alert.
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>signUp</v-toolbar-title>

          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="info.u_id"
                prepend-icon="person"
                name="id"
                label="id"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="info.u_ps"
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="info.u_name"
                id="name"
                prepend-icon="lock"
                name="name"
                label="name"
                type="text"
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              color="primary"
              @click="signUp()"
            >signUp</v-btn>
            <v-btn
              block
              color="primary"
              @click="$router.go(-1)"
            >cancel</v-btn>
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
      signUpError: false,
      isSignUp: false,
      info: {
        u_id: null,
        u_ps: null,
        u_name: null,
        u_email: null
      },
      items: ["naver.com", "b"]
    };
  },
  mounted() {},
  methods: {
    signUp() {
      console.log("1");
      this.$axios
        .post("/api/user", { info: this.info })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scope>
#email {
  width: 30px;
}
</style>