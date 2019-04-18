<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="(con,index) in contents"
          :key="index"
          @click="$router.push({name:con.name})"
        >
          <v-list-tile-action>
            <v-icon>{{con.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{con.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="indigo"
      dark
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>

      <router-view></router-view>

    </v-content>

    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    contents: [
      { icon: "home", title: "home", name: "home" },
      { icon: "bubble_chart", title: "about", name: "about" },
      { icon: "help", title: "help", name: "help" }
    ]
  }),
  props: {
    source: String
  }
};
</script>
 <a href=""></a>