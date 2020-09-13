<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
import flexible from "./utils/flexible";
export default {
  name: "App",
};
</script>

<style lang='less' >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  // width: 100%;
  // height: 100%;
  background: url("./assets/bg.jpg") no-repeat center;
  background-size: 100% 100%;
}
</style>
