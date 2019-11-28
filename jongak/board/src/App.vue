<template>
  <div id="app">
    <router-view/>
  </div>
</template>

 

<style>
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  display: table;
  height: 100%;
  width:100%;
  padding:0px 100px;
}

.wrap {
  height:100%;
  display: table-cell;
  vertical-align: middle;
}

</style>
