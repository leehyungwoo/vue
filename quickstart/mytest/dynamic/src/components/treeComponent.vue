<template>
  <ul>
    <li
      v-for="(s,i) in this.subs"
      :key="i"
      :class="s.type"
    >{{s.name}}
      <treeComponent :subs="s.subs"></treeComponent>
    </li>
  </ul>
</template>

<script>
export default {
  name: "treeComponent",
  props: {
    subs: { typeof: Array }
  }
};
</script>

<style>
.team {
  padding-left: 20px;
}
</style>