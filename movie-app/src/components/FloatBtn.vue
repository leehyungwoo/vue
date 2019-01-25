<template>

  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <v-btn
      slot="activator"
      v-model="fab"
      color="blue darken-2"
      dark
      fab
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="green"
      @click="gotoSearch"
    >
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
      @click="gotoAdd"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
      @click="gotoDelet"
    >
      <v-icon>delete</v-icon>
    </v-btn>
  </v-speed-dial>

</template>

<script>
export default {
  name: "floatBtn",
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition"
  }),
  methods: {
    gotoSearch() {
      this.$router.push({ name: "searchView" });
    },
    gotoAdd() {
      this.$router.push({ name: "addView" });
    },
    gotoDelet() {
      this.$router.push({ name: "deleteView" });
    }
  }
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}

#create {
  height: 100%;
}
</style>