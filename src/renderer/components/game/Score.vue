<template lang="pug">
  div.screen
    div.content.animated.fadeIn
      div(v-if="!gameData.introRead").animated.fadeIn
        intro-component
      div(v-else).animated.fadeIn
        div.round-counter
          img(src="../../assets/images/rounds.svg").round-counter-image
          div.round-text.animated.flipInX
            span {{ currentRound }}
        div(v-if="currentRoundData.trump").trump-indicator.animated.lightSpeedIn
          div
            span {{ currentRoundData.trump }}
        div.main-board
          div(v-if="stage === 'set_trump'").center-text
            set-trump(@set="setTrump($event)")
          div(v-if="stage === 'set_bids'").center-text
            set-bids(@set="stage = 'set_takes'")
          div(v-if="stage === 'set_takes'").center-text
            set_takes(@set="stage = 'round_end'")
          div(v-if="stage === 'round_end'").center-text
            div Display scores
            div(@click="startNewRound").primary-button Next round
    footer
      div(@click="exitGame").secondary-button Exit game
</template>

<script>
  import HeaderComponent from '@/components/layout/Header'
  import IntroComponent from '@/components/game/Intro'
  import SetBids from '@/components/form/SetBids'
  import SetTakes from '@/components/form/SetTakes'
  import SetTrump from '@/components/form/SetTrump'
  import { mapState } from 'vuex'

  export default {
    components: {
      HeaderComponent,
      IntroComponent,
      SetBids,
      SetTakes,
      SetTrump
    },
    computed: {
      ...mapState({
        gameData: (state) => state.game.gameData,
        roundData: (state) => state.game.gameData.rounds,
        ruleset: (state) => state.game.ruleset,
        mode: (state) => state.game.selectedMode
      }),
      currentRound () {
        return this.gameData.currentRound
      },
      currentRoundData () {
        return this.roundData[this.currentRound - 1]
      }
    },
    data () {
      return {
        stage: 'intro'
      }
    },
    methods: {
      exitGame () {
        // TODO: prompt exit
        this.$router.push({ name: 'main-menu' })
      },
      getCurrentStage () {
        if (this.roundData.length === 0) this.startNewRound()
        else {
          if (this.currentRoundData && this.currentRoundData.trump === null) {
            if (this.currentRound === 1 || !this.ruleset.perma_trump) this.stage = 'set_trump'
            else this.$store.commit('game/SET_TRUMP', { round: this.currentRound, trump: this.roundData['1'].trump })
          } else if (this.ruleset.bid && !this.currentRoundData.bids.isSet) {
            this.stage = 'set_bids'
          } else if (!this.currentRound.takes.isSet) {
            this.stage = 'set_takes'
          } else {
            this.$store.commit('game/INCREMENT_ROUND_COUNTER')
          }
        }
      },
      setTrump (e) {
        this.$store.commit('game/SET_TRUMP', { round: this.currentRound, name: e })
      },
      startNewRound () {
        this.$store.commit('game/INIT_NEW_ROUND')
      }
    },
    created () {
      this.$store.commit('game/INIT_GAME')
    },
    watch: {
      gameData: {
        handler () {
          console.log(this.stage)
          // if (this.gameData.introRead && this.stage === 'intro')
          this.getCurrentStage()
        },
        deep: true
      }
    }
  }
</script>

<style>
  .center-text {
    text-align: center;
  }

  footer {
    bottom: 40px;
    right: 40px;
    position: absolute;
    z-index: 100;
  }

  .forward {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }

  header {
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: center;
  }

  .h5 {
    color: #f9ed32;
    font-size: 24px;
    font-weight: bold;
  }

  .round-counter-image, .round-text {
    position: absolute;
    height: 140px;
    width: 140px;
  }

  .round-counter {
    left: 80px;
    position: absolute;
    top: 0px;
  }

  .round-text {
    font-size: 48px;
    margin-top: 25px;
    text-align: center;
  }

  .screen {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .trump-indicator {
    position: absolute;
    right: 80px;
    top: 40px;
    width: 140px;
  }
</style>
