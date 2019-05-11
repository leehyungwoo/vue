<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>

        <v-list-tile
          v-for="(list,index) in navigationLists"
          :key="index"
          @click="$router.push({name:list.name})"
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
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="text-xs-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              flat
              v-on="on"
            >
              Dropdown
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="$router.push({name:item.name})"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>

    <router-view></router-view>

    <v-footer
      app
      fixed
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    navigationLists: [
      {
        title: "Home",
        icon: "dashboard",
        name: "home"
      },
      {
        title: "Login",
        icon: "settings",
        name: "about"
      }
    ],
    items: [{ title: "Home", name: "home" }, { title: "Login", name: "about" }]
  })
};
</script>