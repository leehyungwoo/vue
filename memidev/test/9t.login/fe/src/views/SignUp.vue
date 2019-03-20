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
                v-model.trim="info.u_id"
                prepend-icon="person"
                name="id"
                label="id"
                type="text"
              ></v-text-field>
              <v-btn @click="idChecker">중복확인</v-btn>
              <v-alert
                :value="isIdChecker"
                v-if="idCheckAlert"
                type="success"
              >
                사용가능
              </v-alert>
              <v-alert
                :value="isIdChecker"
                v-else
                type="error"
              >
                사용불가
              </v-alert>
              <v-text-field
                v-model="info.u_ps"
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model.trim="info.u_name"
                id="name"
                prepend-icon="lock"
                name="name"
                label="name"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model.trim="info.u_email"
                id="email"
                prepend-icon="lock"
                name="email"
                label="email"
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
      idCheckAlert: false,
      isIdChecker: false,
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
    idChecker() {
      this.$axios
        .get("/api/signUp/check", { params: { u_id: this.info.u_id } })
        .then(res => {
          this.isIdChecker = true;
          this.idCheckAlert = res.data.success;
        })
        .catch(err => console.log(err));
    },
    signUp() {
      if (!this.isIdChecker) {
        alert("아이디 체크를 해주세요");
      }
      if (this.isIdChecker && this.idCheckAlert) {
        var regExp = /[0-9]/;
        var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if (!this.info.u_id || this.info.u_id.trim() === "") {
          alert("아이디 부분을 확인해주세요");
        } else if (!this.info.u_ps) {
          alert("비밀번호가 비어있습니다");
        } else if (
          !this.info.u_name ||
          this.info.u_name.trim() === "" ||
          regExp.test(this.info.u_name)
        ) {
          console.log(regExp.test(this.info.u_name));
          alert("이름부분을 확인해주세요");
        } else if (!exptext.test(this.info.u_email)) {
          alert("이메일을 확인해주세요");
        } else {
          this.$axios
            .post("/api/signUp/in", { info: this.info })
            .then(res => {
              alert(res.data.msg);
              this.$router.push({ name: "login" });
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    }
  }
};
</script>
<style scope>
#email {
  width: 30px;
}
</style>