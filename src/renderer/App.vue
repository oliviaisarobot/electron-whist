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

  .align-center {
    align-items: center;
  }

  .content {
    margin: 0 auto;
    width: 60vw;
  }

  .d-flex {
    display: flex;
  }

  .input {
    background: none;
    border: 2px solid #27aae1;
    border-radius: 10px;
    color: white;
    font-family: inherit;
    font-size: 18px;
    padding: 10px;
    padding-top: 15px;
    text-align: center;
    transition: .3s ease;
  }

  .input:focus {
    border: 2px solid #ff0099;
    transition: .3s ease;
  }

  .justify-center {
    justify-content: center;
  }

  .primary-button {
    border: 2px solid #ffff33;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    transition: .3s ease;
  }

  .primary-button:hover {
    border: 2px solid #ec008c;
    transition: .3s ease;
  }

  .secondary-button {
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    transition: .3s ease;
  }

  .secondary-button:hover {
    color: #ec008c;
    transition: .3s ease;
  }

  .space-after {
    margin-bottom: 15px;
  }
</style>
