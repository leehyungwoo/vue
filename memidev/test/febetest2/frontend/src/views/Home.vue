<template>
  <v-container fluid>
    <v-layout
      row
      wrap
    >
      <v-flex
        md6
        xs12
        mb-4
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">K ri</h3>
              <div> abc </div>
            </div>
          </v-card-title>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        md6
        xs12
        mb-4
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">K ri</h3>
              <div> abc </div>
            </div>
          </v-card-title>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex
        md6
        xs12
        mb-4
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">K ri</h3>
              <div> abc </div>
            </div>
          </v-card-title>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        md6
        xs12
        mb-4
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">K ri</h3>
              <div> abc </div>
            </div>
          </v-card-title>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex
        md6
        xs12
        mb-4
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">K ri</h3>
              <div> abc </div>
            </div>
          </v-card-title>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        md6
        xs12
        mb-4
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">K ri</h3>
              <div> abc </div>
            </div>
          </v-card-title>
          <v-card-actions>

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
      items: null
    };
  },
  beforeCreate() {
    this.axios
      .get("/api/movie")
      .then(res => {
        this.items = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

 