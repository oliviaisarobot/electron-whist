<template lang="pug">
  div
    header-component
    div.content.animated.fadeIn
      rule-selection-component.space-after
      mode-selection-component.space-after
      counter-component(
        :min="ruleset.player_count.min"
        :max="ruleset.player_count.max"
        label="Number of players:"
        name="player-counter"
        @change="setPlayers($event)"
        ).space-after
      //- TODO: add player names
      //- TODO: select game mode
      div.center
        button(@click="startGame").button-start Start game
    footer-component
</template>

<script>
  import FooterComponent from '@/components/layout/Footer'
  import HeaderComponent from '@/components/layout/Header'
  import CounterComponent from '@/components/form/Counter'
  import ModeSelectionComponent from '@/components/form/ModeSelection'
  import RuleSelectionComponent from '@/components/form/RuleSelection'
  import { mapState } from 'vuex'

  export default {
    components: {
      FooterComponent,
      HeaderComponent,
      CounterComponent,
      ModeSelectionComponent,
      RuleSelectionComponent
    },
    computed: {
      ...mapState({
        code: (state) => state.game.code,
        ruleset: (state) => state.game.ruleset
      })
    },
    methods: {
      loadRules () {
        this.$store.dispatch('game/getRules')
      },
      setPlayers (e) {
        this.$store.commit('game/CLEAR_PLAYERS')
        for (let i = 1; i <= e; i++) {
          this.$store.commit('game/SET_PLAYER', 'Player ' + i)
        }
      },
      startGame () {
        this.$router.push({ name: 'game-score' })
      }
    },
    created () {
      this.loadRules()
    }
  }
</script>

<style>
  .button-start {
    background: none;
    border: 2px solid #ffff33;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    transition: .3s ease;
  }

  .button-start:hover {
    border: 2px solid #ec008c;
    transition: .3s ease;
  }

  .center {
    text-align: center;
  }

  .space-after {
    margin-bottom: 15px;
  }
</style>
