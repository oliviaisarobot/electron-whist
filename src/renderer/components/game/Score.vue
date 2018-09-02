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
            div.game-type-name.animated.fadeIn
              span "{{ ruleset.name }}"
        div(v-if="!showScores", :class="{ 'slideOutUp': showScores }" @click="showScores = true").score-toggle.animated.slideInDown Scoreboard
        div(v-if="currentRoundData.trump").trump-indicator.animated.lightSpeedIn
          img(:src="cardSuit(currentRoundData.trump)").suit-image
          div.suit-text
            span {{ currentRoundData.trump }}
        div.main-board
          div(v-if="stage === 'set_trump'").center-text.animated.slideInRight
            set-trump(@set="setTrump($event)")
          div(v-if="stage === 'set_bids'").center-text.animated.slideInRight
            set-bids(@set="stage = 'set_takes'")
          div(v-if="stage === 'set_takes'").center-text.animated.slideInRight
            div(v-if="playing")
              ranking-component(:bids="true").space-after-extra
              div(@click="playing = false").primary-button.d-inline-block Set takes
            div(v-else)
              set-takes(@set="stage = 'round_end'")
          div(v-if="stage === 'round_end'").center-text.animated.slideInRight
            ranking-component.space-after-extra
            div(@click="nextRound").primary-button.d-inline-block Next round
          div(v-if="stage === 'game_end'").center-text.animated.slideInRight
            ranking-component.space-after-extra
            div.d-flex.justify-center
              span.winner ★ {{ winner }} has won the game! ★
      div(v-if="showScores", :class="{ 'fadeOut': !showScores }").mask.animated.fadeIn.d-flex.align-center.justify-center
        div(@click="showScores = false").score-close.animated.fadeIn.secondary-button Close
        div(:class="{ 'slideOutUp': !showScores }").score-board.animated.slideInDown
          score-board
    footer(v-if="!showScores").animated.slideInRight
      div(@click="exitGame").secondary-button Exit game
</template>

<script>
  import RankingComponent from '@/components/game/Ranking'
  import HeaderComponent from '@/components/layout/Header'
  import IntroComponent from '@/components/game/Intro'
  import ScoreBoard from '@/components/game/Board'
  import SetBids from '@/components/form/SetBids'
  import SetTakes from '@/components/form/SetTakes'
  import SetTrump from '@/components/form/SetTrump'
  import { mapState } from 'vuex'

  export default {
    components: {
      RankingComponent,
      HeaderComponent,
      IntroComponent,
      ScoreBoard,
      SetBids,
      SetTakes,
      SetTrump
    },
    computed: {
      ...mapState({
        gameData: (state) => state.game.gameData,
        metaScore: (state) => state.game.gameData.metaScore,
        roundData: (state) => state.game.gameData.rounds,
        ruleset: (state) => state.game.ruleset,
        mode: (state) => state.game.selectedMode
      }),
      currentRound () {
        return this.gameData.currentRound
      },
      currentRoundData () {
        return this.roundData[this.currentRound - 1]
      },
      winner () {
        let [lead, scores, t] = [[], [], this]
        Object.keys(this.metaScore).forEach((key) => {
          scores.push(t.metaScore[key])
        })
        let max = Math.max.apply(null, scores)
        Object.keys(this.metaScore).forEach((key) => {
          if (t.metaScore[key] === max) lead.push(key)
        })
        return lead.length > 1 ? lead.join(' & ') : lead[0]
      }
    },
    data () {
      return {
        playing: true,
        showScores: false,
        stage: 'intro'
      }
    },
    methods: {
      cardSuit (trump) {
        return require('@/assets/images/' + trump + '.svg')
      },
      exitGame () {
        // TODO: prompt exit
        this.$router.push({ name: 'main-menu' })
      },
      getCurrentStage () {
        if (this.roundData.length === 0 || !this.currentRoundData) this.initNewRound()
        else {
          if (this.currentRoundData && this.currentRoundData.trump === null) {
            if (this.currentRound === 1 || !this.ruleset.perma_trump) this.stage = 'set_trump'
            else this.$store.commit('game/SET_TRUMP', { round: this.currentRound, trump: this.roundData['1'].trump })
          } else if (this.ruleset.bid && this.currentRoundData && !this.currentRoundData.bids.isSet) {
            this.stage = 'set_bids'
          } else if (!this.currentRoundData.takes.isSet) {
            this.stage = 'set_takes'
          } else if (this.currentRound === this.mode.round_count && this.stage === 'round_end') {
            this.stage = 'game_end'
          } else {
            this.stage = 'round_end'
          }
        }
      },
      initNewRound () {
        this.$store.commit('game/INIT_NEW_ROUND')
        this.playing = true
      },
      nextRound () {
        this.$store.commit('game/INCREMENT_ROUND_COUNTER')
      },
      setTrump (e) {
        this.$store.commit('game/SET_TRUMP', { round: this.currentRound, name: e })
      }
    },
    created () {
      this.$store.commit('game/INIT_GAME')
    },
    watch: {
      gameData: {
        handler () {
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

  .game-type-name {
    color: #ffff33;
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
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

  .mask {
    background-color: rgba(0,0,0,0.7);
    height: 100vh;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100vw;
    z-index: 1010;
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

  .score-board {
    z-index: 1050;
  }

  .score-close {
    position: absolute;
    right: 40px;
    top: 40px;
  }

  .score-toggle {
    background-color: #ff0099;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: black;
    cursor: pointer;
    left: calc(50vw - 75px);
    padding-top: 5px;
    position: absolute;
    text-align: center;
    top: 0px;
    transition: .3s ease;
    width: 150px;
  }

  .score-toggle:hover {
    color: #ffff33;
    transition: .3s ease;
  }

  .screen {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .suit-image {
    height: 140px;
    width: 140px;
  }

  .suit-text {
    color: #ffff33;
    font-size: 18px;
    margin-top: -15px;
    text-align: center;
    text-transform: uppercase;
  }

  .space-after-extra {
    margin-bottom: 50px;
  }

  .trump-indicator {
    position: absolute;
    right: 80px;
    text-align: center;
    top: 20px;
    width: 140px;
  }

  .winner {
    color: #ff0099;
    font-size: 26px;
  }
</style>
