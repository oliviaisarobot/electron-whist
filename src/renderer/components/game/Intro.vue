<template lang="pug">
  div
    div(v-if="!gameData.introRead && introStage === 1").animated.fadeIn
      div.space-after {{ ruleset.description }}
      //- TODO: visual representation here
      div.forward
        div.d-flex
          div(@click="introNext('skip')").secondary-button Skip
          div(@click="introNext(2)").primary-button Next
    div(v-if="!gameData.introRead && introStage === 2").animated.fadeIn
      div.space-after {{ mode.description }}
      //- TODO: visual representation here
      div.forward
        div(@click="introNext('skip')").primary-button Next
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        gameData: (state) => state.game.gameData,
        ruleset: (state) => state.game.ruleset,
        mode: (state) => state.game.selectedMode
      })
    },
    data () {
      return {
        introStage: 1
      }
    },
    methods: {
      introNext (stage) {
        if (stage === 'skip') this.$store.commit('game/INTRO_READ')
        else this.introStage = stage
      }
    }
  }
</script>

<style>
  .d-flex {
    align-items: center;
    display: flex;
  }

  .forward {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }

  .primary-button {
    border: 2px solid #ffff33;
    border-radius: 10px;
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
