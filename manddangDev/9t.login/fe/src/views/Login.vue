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

        <v-alert
          :value="true"
          type="error"
          v-if="loginError"
        >
          This is a error alert.
        </v-alert>
        <v-alert
          :value="true"
          type="success"
          v-if="isLogin"
        >
          This is a success alert.
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userLogin.u_id"
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="userLogin.u_ps"
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              color="primary"
              @click="$store.dispatch('signUp',userLogin)"
            >Login</v-btn>
            <v-btn
              block
              color="primary"
              @click="$router.push({name:'signUp'})"
            >JoinUs</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      userLogin: { u_id: null, u_ps: null }
    };
  },
  components: {},
  mounted() {},
  computed: {
    ...mapState(["isLogin", "loginError"])
  },
  methods: {
    ...mapActions(["signUp"])
  }
};
</script>
