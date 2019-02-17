<template lang="pug">
  ul.window-controls.d-flex
    li(@click="windowAction('minimize')").control.minimize
    li(@click="windowAction('maximize')").control.maximize
    li(@click="windowAction('close')").control.close
</template>

<script>
  export default {
    methods: {
      windowAction (action) {
        const remote = require('electron').remote
        let window = remote.getCurrentWindow()
        if (action === 'maximize') {
          if (!window.isMaximized()) window.maximize()
          else {
            window.unmaximize()
            window.center()
          }
        } else if (action === 'minimize') window.minimize()
        else if (action === 'close') window.close()
      }
    }
  }
</script>

<style>
  .window-controls {
    list-style-type: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .control {
    background-position: center!important;
    background-repeat: no-repeat!important;
    background-size: 20px!important;
    cursor: pointer;
    font-size: 15px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    transition: .3s ease;
    width: 20px;
  }

  .minimize {
    background: url('../../assets/icons/minus.svg');
  }

  .maximize {
    background: url('../../assets/icons/resize.svg');
  }

  .close {
    background: url('../../assets/icons/cancel.svg');
  }
</style>