<template>
  <v-app id="inspire">
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
            md6
          >
            <v-card class="elevation-12">
              <v-toolbar
                dark
                color="primary"
              >
                <v-toolbar-title>signUp form</v-toolbar-title>

              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-text-field
                    v-model.trim="id"
                    :error-messages="idErrors"
                    :counter="15"
                    label="아이디"
                    required
                    @input="$v.id.$touch()"
                    @blur="$v.id.$touch()"
                  ></v-text-field>

                  <v-text-field
                    type="password"
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="비밀번호"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>

                  <v-text-field
                    type="password"
                    v-model="passwordchk"
                    :error-messages="passwordchkErrors"
                    label="비밀번호확인"
                    required
                    @input="$v.passwordchk.$touch()"
                    @blur="$v.passwordchk.$touch()"
                  ></v-text-field>

                  <v-text-field
                    v-model.trim="name"
                    :error-messages="nameErrors"
                    :counter="15"
                    label="이름"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>

                  <v-text-field
                    v-model.trim="email"
                    :error-messages="emailErrors"
                    label="이메일"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>

                  <v-select
                    v-model="gender"
                    :items="items"
                    :error-messages="genderErrors"
                    label="성별"
                    required
                    @change="$v.gender.$touch()"
                    @blur="$v.gender.$touch()"
                  ></v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="checkboxErrors"
                  label="Do you agree?"
                  required
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                ></v-checkbox>

                <v-spacer></v-spacer>
                <v-btn @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    id: { required, minLength: minLength(3), maxLength: maxLength(15) },
    name: { required, maxLength: maxLength(15) },
    email: { required, email },
    gender: { required },
    password: { required, minLength: minLength(4), maxLength: maxLength(20) },
    passwordchk: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20)
    },
    checkbox: {
      required,
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    id: "",
    name: "",
    email: "",
    password: "",
    passwordchk: "",
    gender: null,
    checkbox: false,
    items: ["남자", "여자"]
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("동의해주세요");
      return errors;
    },
    idErrors() {
      const errors = [];
      if (!this.$v.id.$dirty) return errors;
      !this.$v.id.minLength && errors.push("3글자 이상으로 작성해주세요");
      !this.$v.id.maxLength && errors.push("20글자 이내로 작성해주세요");
      !this.$v.id.required && errors.push("아이디를 작성해주세요.");
      return errors;
    },
    genderErrors() {
      const errors = [];
      if (!this.$v.gender.$dirty) return errors;
      !this.$v.gender.required && errors.push("성별을 선택해주세요");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("20글자 이내로 작성해주세요");
      !this.$v.name.required && errors.push("이름을 작성해주세요.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("올바른 이메일이 아닙니다");
      !this.$v.email.required && errors.push("이메일을 써주세요");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("4글자 이상으로 작성해주세요");
      !this.$v.password.maxLength && errors.push("20이내로 작성해주세요");
      !this.$v.password.required && errors.push("비밀번호를 써주세요.");
      return errors;
    },
    passwordchkErrors() {
      const errors = [];
      if (!this.$v.passwordchk.$dirty) return errors;
      !this.$v.passwordchk.minLength &&
        errors.push("4글자 이상으로 작성해주세요");
      !this.$v.passwordchk.maxLength && errors.push("20이내로 작성해주세요");
      !this.$v.passwordchk.required && errors.push("비밀번호체크를 써주세요.");
      if (this.password !== this.passwordchk) {
        errors.push("비밀번호를 확인해주세요.");
      }
      return errors;
    }
  },

  methods: {
    submit() {
      //signUp index의 20번째줄.프론트단에서 id유무 체크먼저, 체크먼저하지않으면 pk의 count가 올라간다.
      this.$v.$touch();
      if (
        this.idErrors.length === 0 &&
        this.passwordErrors.length === 0 &&
        this.passwordchkErrors.length === 0 &&
        this.nameErrors.length === 0 &&
        this.emailErrors.length === 0 &&
        this.genderErrors.length === 0 &&
        this.checkboxErrors.length === 0
      ) {
        this.$axios
          .post("http://localhost:3000/api/signUp/", {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            gender: this.gender
          })
          .then(r => {
            if (r.data.success) {
              alert(r.data.msg);
              this.$router.push({ name: "login" });
            } else {
              alert(r.data.msg);
            }
          })
          .catch(e => {
            alert(e);
          });
      } else {
        alert("남은 항목을 작성해주세요");
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.gender = null;
      this.checkbox = false;
    }
  }
};
</script>