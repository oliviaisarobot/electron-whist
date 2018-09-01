<template lang="pug">
  div.select-container.d-flex
    label(for="select") Game mode:
    div.d-flex
      div(
        @click="switchType('previous')"
        ).modify.left
      div.select {{ selectedMode.name }}
      div(
        @click="switchType('next')"
        ).modify.right
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        modes: (state) => state.game.modes,
        selectedMode: (state) => state.game.selectedMode
      })
    },
    methods: {
      switchType (direction) {
        let [i, mode, _this] = [this.modes.indexOf(this.selectedMode), this.selectedMode, this]
        if (direction === 'previous') {
          if (i === 0) mode = _this.modes[_this.modes.length - 1]
          else mode = _this.modes[i - 1]
        } else {
          if (i === _this.modes.length - 1) mode = _this.modes[0]
          else mode = _this.modes[i + 1]
        }
        this.$store.commit('game/SET_GAME_MODE', mode)
      }
    },
    created () {
      this.$store.commit('game/SET_GAME_MODE', this.modes[0])
    }
  }
</script>

<style>
  label {
    margin-right: 15px;
  }

  .d-flex {
    align-items: center;
    display: flex;
  }

  .select-container {
    justify-content: space-between;
    width: 100%;
  }

  .select, .modify {
    display: inline-block;
    height: 25px;
  }

  .select {
    background: none;
    border: 2px solid #27aae1;
    border-radius: 10px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 170px;
  }

  .modify {
    background-position: center!important;
    background-repeat: no-repeat!important;
    background-size: 20px!important;
    cursor: pointer;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    transition: .3s ease;
    width: 25px;
  }

  .modify:hover {
    color: #27aae1;
    transition: .3s ease;
  }

  .left {
    background: url('../../assets/icons/arrow-left.svg');
  }

  .right {
    background: url('../../assets/icons/arrow-right.svg');
  }
</style>
