<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">board.name</h1>
        <h4 class="subheading">board.rmk</h4>
      </v-layout>
    </v-parallax>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      board: ""
    };
  },
  mounted() {
    this.getBoard();
  },
  methods: {
    getBoard() {
      this.$axios
        .get("board/아무나")
        .then(r => {
          console.log(r);
          this.board = r.data.d;
          getArt(this.board._id);
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    getArt(id) {}
  }
};
</script>