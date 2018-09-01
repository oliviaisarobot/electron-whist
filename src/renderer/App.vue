<template lang="pug">
  div#app
    router-view
</template>

<script>
  export default {
    name: 'electron-whist'
  }
</script>

<style>
  html, body {
    margin: 0;
    overflow: hidden;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

  *:focus {
	   outline: none;
	}

  *::-moz-focus-inner {
	   border: none;
	}

  .content {
    margin: 0 auto;
    width: 60vw;
  }
</style>
