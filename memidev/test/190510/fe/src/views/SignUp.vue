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
              <v-toolbar-title>signUp form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="id"
                  v-validate="'required|max:10|min:3'"
                  :counter="10"
                  :error-messages="errors.collect('id')"
                  label="id"
                  data-vv-name="id"
                  required
                ></v-text-field>

                <v-text-field
                  type="password"
                  v-model="password"
                  v-validate="'required|max:10|min:3'"
                  :counter="10"
                  :error-messages="errors.collect('password')"
                  label="password"
                  data-vv-name="password"
                  ref="password"
                  required
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="passwordChk"
                  v-validate="'required|confirmed:password|max:10|min:3'"
                  :counter="10"
                  :error-messages="errors.collect('passwordChk')"
                  label="passwordChk"
                  data-vv-name="passwordChk"
                  required
                ></v-text-field>

                <v-checkbox
                  v-model="checkbox"
                  v-validate="'required'"
                  :error-messages="errors.collect('checkbox')"
                  value="1"
                  label="agree"
                  data-vv-name="checkbox"
                  type="checkbox"
                  required
                ></v-checkbox>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="submit">SignzUp</v-btn>
              <v-btn @click="clear">cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>
<script>
export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    id: "",
    password: "",
    passwordChk: "",
    checkbox: null,
    dictionary: {
      attributes: {
        // password: "E-mail Address"
        // custom attributes
      },
      custom: {
        id: {
          required: () => "이름을 입력해주세요",
          min: "3글자 이상",
          max: "10글자를 넘기지 말아주세요"
          // custom messages
        },
        password: {
          required: () => "비밀번호를 입력해주세요",
          min: "3글자 이상",
          max: "10글자를 넘기지 말아주세요"
          // custom messages
        },
        passwordChk: {
          required: () => "비밀번호를 확인해주세요",
          min: "3글자 이상",
          max: "10글자를 넘기지 말아주세요",
          confirmed: "비밀번호를 확인해주세요"
          // custom messages
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("ko", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
      this.axios
        .post("/api/user/signUp", {
          id: this.id,
          password: this.password
        })
        .then(r => {
          console.log(r);
        })
        .catch(e => {
          console.log(e);
        });
    },
    clear() {
      this.id = "";
      this.password = "";
      this.passwordChk = "";
      this.select = null;
      this.checkbox = null;
      this.$validator.reset();
      this.$router.go(-1);
    }
  }
};
</script>