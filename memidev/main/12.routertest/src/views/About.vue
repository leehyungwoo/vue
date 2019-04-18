<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          md3
        >
          <v-text-field
            label="Regular"
            v-model="inpData"
          ></v-text-field>
          <v-btn
            color="success"
            @click="$router.push({name:'about-detail',query:{inpData}})"
          >search</v-btn>
        </v-flex>

      </v-layout>
    </v-container>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      inpData: ""
    };
  }
};
</script>