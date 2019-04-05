<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >

      <v-flex
        xs12
        sm6
        md4
      >
        <v-btn
          color="primary"
          @click="pop('click test')"
        >sss</v-btn>
      </v-flex>
      <v-flex
        xs12
        sm6
        md4
        v-for="user in users"
        :key="user._id"
      >
        <user
          :user="user"
          @sbOpen="pop"
        ></user>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="sb.act">
      {{ sb.msg }}

    </v-snackbar>
  </v-container>
</template>
<script>
import user from "@/components/user";
export default {
  data() {
    return {
      users: [],
      sb: {
        act: false,
        msg: "fwef"
      }
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    pop(m) {
      this.sb.msg = m;
      this.sb.act = true;
    },
    getUsers() {
      this.$axios
        .get(`${this.$apiRootPath}manage/user`)
        .then(r => {
          console.log(r.data);
          this.users = r.data.users;
        })
        .catch(e => {
          this.pop(e.message);
        });
    }
  },
  components: { user }
};
</script>