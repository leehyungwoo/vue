<template>
  <div>
    {{homeTitle}}
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  data: function() {
    return {
      homeTitle: "홈"
    };
  },
  components: {
    HelloWorld
  }
};
</script>
