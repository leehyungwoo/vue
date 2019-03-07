<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          @click="$router.push({name:item.routes})"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">회원</v-subheader>

        <v-list>
          <v-list-tile
            v-for="item in items2"
            :key="item.text"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <a
          href="#"
          class="title"
          @click="$router.push({name:'home'})"
        >LeewooPage</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout
        row
        align-center
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout
          justify-center
          align-center
        >
          <v-flex>
            <routerView></routerView>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [{ icon: "trending_up", text: "회원가입", routes: "signUp" }],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
a:visited {
  color: #fff;
  text-decoration: none;
}
</style>