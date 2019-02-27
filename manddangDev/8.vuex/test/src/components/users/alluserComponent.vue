<template>
  <ul
    class="ul"
    :style="{border:bd}"
  >
    <li
      v-for="(mUser,index) in memberUsers"
      :key="index"
    >{{mUser}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      memberUsers: this.users
    };
  },
  computed: {
    bd() {
      if (this.memberUsers.length >= 1) {
        return "1px solid black";
      }
    }
  },
  props: {
    users: { type: Array }
  }
};
</script>

<style>
.ul {
  float: left;
  width: 540px;
  margin-right: 20px;
  list-style: none;
}
</style>