<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>

        <v-list-tile
          v-for="(item,idx) in items"
          :key="idx"
          @click="$router.push({name:item.routerName})"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
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
      <v-toolbar-items
        v-if="$store.state.isLogin"
        class="hidden-sm-and-down"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              {{$store.state.userInfo.id}}
            </v-btn>
          </template>
          <v-list>
            <v-list-tile>
              <v-list-tile-title
                style="cursor:pointer"
                @click="$router.push({name:'myPage'})"
              >myPage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title
                style="cursor:pointer"
                @click="$store.dispatch('logout')"
              >logOut</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>

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
    items: [
      {
        title: "login",
        icon: "contact_mail",
        routerName: "login"
      },
      {
        title: "Home",
        icon: "home",
        routerName: "home"
      },
      {
        title: "MyPage",
        icon: "contact_mail",
        routerName: "myPage"
      },
      {
        title: "v0",
        icon: "contact_mail",
        routerName: "v0"
      },
      {
        title: "v1",
        icon: "contact_mail",
        routerName: "v1"
      },
      {
        title: "v2",
        icon: "contact_mail",
        routerName: "v2"
      },
      {
        title: "v3",
        icon: "contact_mail",
        routerName: "v3"
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {}
};
</script>