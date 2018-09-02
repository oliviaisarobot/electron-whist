<template lang="pug">
  div
    div(v-if="!gameData.introRead && introStage === 1").animated.fadeIn
      div.space-after {{ ruleset.description }}
      //- TODO: visual representation here
      div.forward
        div.d-flex.align-center.justify-center
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
  .forward {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
</style>
