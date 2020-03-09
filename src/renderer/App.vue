<template lang="pug">
  div#app
    window-controls
    router-view
</template>

<script>
  import WindowControls from '@/components/layout/WindowControls'

  export default {
    components: {
      WindowControls
    },
    name: 'electron-whist'
  }
</script>

<style>

  @font-face {
    font-family: 'Baloo Tammudu';
    font-style: normal;
    font-weight: 400;
    src: local('Baloo Tammudu'),
         local('BalooTammudu-Regular'),
         url('./assets/fonts/BalooTammudu-Regular.ttf') format('truetype');
  }
  
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

  *::-webkit-scrollbar {
    width: 10px!important;
  }

  *::-webkit-scrollbar-track {
    background-color: rgba(39,170,225,0.3)!important;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #27aae1!important;
    border-radius: 5px;
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

  .d-inline-block {
    display: inline-block;
  }

  .h5 {
    color: #f9ed32;
    font-size: 24px;
    font-weight: bold;
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

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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

  .scrollable {
    text-align: center;
    max-height: 340px;
    overflow-y: auto!important;
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

  .text-center {
    text-align: center;
  }

  table {
    border: 1px solid #ff0099;
    border-collapse: collapse;
    margin: 0px 20px 5px 0px;
  }

  tbody {
    background-color: rgba(0,0,0,0.8);
  }

  thead {
    background-color: #ff0099;
    border-radius: 10px;
    color: #ffff33;
  }

  th {
    padding: 5px 25px 0px 25px;
  }

  .background-even {
    background-color: rgba(0,174,239,.2);
  }

  .border-bottom {
    border-bottom: 1px solid #27aae1;
  }

  .border-right {
    border-right: 1px solid #ff0099;
  }

  .ranking {
    margin: 0px!important;
  }
</style>
