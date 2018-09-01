<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-whist'
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    background: url('./assets/images/retro.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    font-family: 'Baloo Tammudu', cursive;
    /* font-family: Helvetica, Arial, sans-serif; */
    height: 100vh;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }
</style>
