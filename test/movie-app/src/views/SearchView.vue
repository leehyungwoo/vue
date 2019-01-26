<template>
  <div>
    <FloatBtn></FloatBtn>
    <h1>This is an search page</h1>

    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="searchInput"
            :rules="nameRules"
            label="Movie Title"
            required
            @keyup.enter="searchEnter"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <ListComponent></ListComponent>

  </div>
</template>

<script>
import ListComponent from "../components/ListComponent";
import FloatBtn from "../components/FloatBtn";
export default {
  components: {
    FloatBtn,
    ListComponent
  },
  data() {
    return {
      searchInput: "",
      nameRules: [v => !!v || "Title is required"],
      movieData: []
    };
  },
  methods: {
    searchEnter() {
      this.$axios
        .get("/api", {
          params: {
            query: this.searchInput
          }
        })
        .then(res => {
          this.movieData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>