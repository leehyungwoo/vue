<template>

  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{movieData.name}}</h3>
            <div>연혁:{{movieData.year}} </div>
            <div>감독:{{movieData.director}} </div>
          </div>
        </v-card-title>
        <v-img :src="movieData.poster"></v-img>
        <v-card-actions>

          <v-btn
            flat
            color="blue"
            @click="$router.go(-1)"
          >뒤로가기</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: "viewPage",
  data() {
    return {
      movieData: null
    };
  },
  created() {
    this.movieData = this.$route.params.movie;
  }
};
</script>