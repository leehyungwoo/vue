<template>
  <div>
    <li>
      <a
        href="#"
        @click="clickComponent"
      >
        {{todo.label}}
      </a>
    </li>
    <li>{{todo.count}}</li>
  </div>
</template>


<script>
export default {
  name: "listComponent",
  props: ["todo"],
  created() {
    console.log(this.todo);
  },
  methods: {
    clickComponent() {
      this.$emit("clickComponent");
    }
  }
};
</script>