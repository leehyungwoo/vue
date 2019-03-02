<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile
          @click="$router.push({name:list.routeName})"
          v-for="(list,index) in navList"
          :key="index"
        >
          <v-list-tile-action>
            <v-icon>{{list.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{list.title}}</v-list-tile-title>
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
      <v-container fluid>
        <v-layout
          justify-center
          align-center
        >

          <v-flex text-xs-center>
            <routerView></routerView>
          </v-flex>
        </v-layout>
      </v-container>
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
    navList: [
      {
        title: "홈",
        icon: "home",
        routeName: "home"
      },
      {
        title: "사용자관리",
        icon: "face",
        routeName: "userManage"
      }
    ]
  }),
  props: {
    source: String
  }
};
</script>