<template>
  <div class="help">
    <h1>{{title}}</h1>
    <v-btn @click="add()">add</v-btn>
    <v-btn @click="rm()">remove</v-btn>
    <v-container
      grid-last-md
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          offset-sm3
        >
          <v-card
            v-for="(card,index) in cards"
            :key="index"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{card.card_tit}}</h3>
                <div> {{ card.card_text }} </div>
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
  name: "help",
  data() {
    return {
      title: "Vuetify.js",
      cards: []
    };
  },
  methods: {
    add() {
      const card = {
        card_tit: `Lee ${Math.random()}`
      };
      card.card_text = "bb";

      this.cards.push(card);
    },
    rm() {
      this.cards.shift();
    }
  }
};
</script>
