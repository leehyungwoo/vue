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
            <v-toolbar-title>회원가입</v-toolbar-title>
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
            <form>
              <v-text-field
                v-model="name"
                v-validate="'required|max:10'"
                :counter="10"
                :error-messages="errors.collect('name')"
                label="Name"
                data-vv-name="name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')"
                label="E-mail"
                data-vv-name="email"
                required
              ></v-text-field>
              <v-select
                v-model="select"
                v-validate="'required'"
                :items="items"
                :error-messages="errors.collect('select')"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                v-validate="'required'"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="Option"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

              <v-btn
                color="primary"
                @click="submit"
              >submit</v-btn>
              <v-btn
                color="secondary"
                @click="clear"
              >clear</v-btn>
            </form>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import ko from "vee-validate/dist/locale/ko";

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    dictionary: {
      messages: ko.messages,
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        // name: {
        //   required: () => "Name can not be empty",
        //   max: "The name field may not be greater than 10 characters"
        //   // custom messages
        // },
        // select: {
        //   required: "Select field is required"
        // }
      }
    }
  }),

  mounted() {
    console.log(ko.messages);
    this.$validator.localize("ko", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$validator.reset();
    }
  }
};
</script>