<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>

        <v-list-tile @click="$router.push({name:'home'})">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-if="!$store.state.isLogin"
          @click="$router.push({name:'login'})"
        >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-else
          @click="$router.push({name:'myPage'})"
        >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>myPage</v-list-tile-title>
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
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    abc() {
      console.log(this.$router);
      this.router.push({ name: "login" });
    },
    func() {
      console.log(this.router);
      this.router.push({ name: "home" });
    }
  }
};
</script>