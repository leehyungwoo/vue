<template>

  <v-content>
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
          sm8
          md4
        >
          <v-card class="elevation-12">
            <v-toolbar dark>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="id"
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="submit">Login</v-btn>
              <v-btn @click="signUp">SignUp</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
export default {
  data: () => ({
    drawer: null,
    id: "",
    password: ""
  }),

  props: {
    source: String
  },
  methods: {
    init() {
      this.id = "";
      this.password = "";
    },
    submit() {
      this.axios
        .post("/api/user/login", { id: this.id, password: this.password })
        .then(r => {
          this.init();
          console.log(r);
        })
        .catch(e => {
          console.log(e);
        });
    },
    signUp() {
      this.$router.push({ name: "signup" });
      this.init();
    }
  }
};
</script>