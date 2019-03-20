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
      <v-toolbar-title>{{$apiRootPath}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu
          bottom
          left
        >
          <v-btn
            icon
            slot="activator"
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-if="!token"
              @click="$router.push('sign')"
            >
              <v-list-tile-title>로그인</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              @click="signOut"
              v-else
            >
              <v-list-tile-title>로그아웃</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
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
import { mapState } from "vuex";
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
        title: "로그인",
        icon: "face",
        routeName: "sign"
      },
      {
        title: "헤더",
        icon: "face",
        routeName: "header"
      },
      {
        icon: "home",
        title: "lv0",
        routeName: "lv0"
      },
      {
        icon: "home",
        title: "lv1",
        routeName: "lv1"
      },
      {
        icon: "home",
        title: "lv2",
        routeName: "lv2"
      },
      {
        icon: "home",
        title: "lv3",
        routeName: "lv3"
      },
      {
        icon: "face",
        title: "사용자관리",
        routeName: "user"
      },
      {
        icon: "face",
        title: "페이지관리",
        routeName: "page"
      }
    ]
  }),
  computed: {
    ...mapState(["token"])
  },
  mounted() {},
  methods: {
    signOut() {
      this.$store.commit("deleteToken");
      this.$router.push("/");
    }
  }
};
</script>