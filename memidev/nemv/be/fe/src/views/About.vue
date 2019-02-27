<template>
  <div class="about">

    <v-container
      grid-list-md
      text-xs-center
    >
      <v-textarea
        outline
        v-model="ta"
      ></v-textarea>
      <v-layout
        row
        wrap
      >

        <v-flex
          xs12
          sm6
          md4
          lg3
          xl2
          v-for="x in ($vuetify.breakpoint.xs ? 1 : 4)"
        >
          <v-card height="100%">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <v-chip v-if="x===1">{{x}}</v-chip>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div> abc </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn
                flat
                color="orange"
              >Share</v-btn>
              <v-btn
                flat
                color="orange"
              >Explore</v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "about",
  data() {
    return { ta: "debug" };
  },
  mounted() {
    const a = { a: 1, b: 2 };
    this.ta = JSON.stringify(this.$vuetify.breakpoint);
    console.log("ddd");
  }
};
</script>