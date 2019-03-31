<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="$router.push({name:item.pathName})"
        >
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
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
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-menu
          offset-y
          open-on-hover
        >
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              사용자정보
            </v-btn>
          </template>
          <v-list>
            <v-list-tile @click="$router.push({name:'login'})">
              <v-list-tile-title>login</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>

    <router-view></router-view>

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
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "home",
          pathName: "home"
        },
        {
          title: "로그인",
          pathName: "login"
        },
        {
          title: "회원가입",
          pathName: "signUpEnt"
        },
            {
          title: "about",
          pathName: "about"
        },

        {
          title: "v0",
          pathName: "v0"
        },
        {
          title: "v1",
          pathName: "v1"
        },
        {
          title: "v2",
          pathName: "v2"
        }
      ]
    };
  },
  props: {
    source: String
  }
};
</script>