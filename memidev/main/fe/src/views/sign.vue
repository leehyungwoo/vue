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
        sm8
        md6
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/wyYVVj"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
                v-model="form.id"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="form.pwd"
              ></v-text-field>
              <v-checkbox
                label="암호 기억하기(최대 7일간 보관됩니다)"
                v-model="form.remember"
              >
              </v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="signIn()"
            >Login</v-btn>
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
      form: { id: "", pwd: "", remember: false }
    };
  },
  methods: {
    signIn() {
      this.$axios
        .post(`${this.$apiRootPath}sign/in`, this.form)
        .then(r => {
          console.log(r);
          if (!r.data.success) return console.error(r.data.msg);
          localStorage.setItem("token", r.data.token);
          this.$store.commit("getToken");
          this.$router.push("/");
          // location.href = '/header'
        })
        .catch(e => console.error(e.message));
    }
  }
};
</script>