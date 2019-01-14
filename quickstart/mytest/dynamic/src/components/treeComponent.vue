<template>
  <ul>
    {{this.orgcharts}}
    <!-- <li
      v-for="(sub,i) in this.subs"
      :key="i"
    >{{sub}}
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "treeComponent",
  props: {
    orgcharts: { typeof: Array }
  }
};
</script>