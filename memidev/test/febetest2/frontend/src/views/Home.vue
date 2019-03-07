<template>

  <v-container>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(movie,index) in moviesData"
        :key="index"
        xs12
        sm6
        mb-5
        style="max-width:300px;margin:0 auto"
      >
        <v-card>
          <v-img :src="movie.poster"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{movie.name}}</h3>

            </div>
          </v-card-title>
          {{movie.id}}
          <v-card-actions>
            <v-btn
              flat
              color="orange"
              @click="$router.push({name:'viewPage', params: { id: movie.id ,movie:movie}})"
            >more</v-btn>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      moviesData: null
    };
  },
  created() {
    this.axios
      .get("/api/movie")
      .then(res => {
        console.log("무비api", res);
        this.moviesData = res.data;
      })
      .catch(err => {
        console.log("무비api 오류", err);
      });
  }
};
</script>

 