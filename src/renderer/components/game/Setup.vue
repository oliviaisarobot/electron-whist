<template lang="pug">
  div
    header-component
    div.content.animated.fadeIn
      div(v-if="editNames").animated.fadeIn
        name-selection-component
        div.d-flex.center.buttons
          div(@click="editNames = false").primary-button Done
      div(v-else).animated.fadeIn
        rule-selection-component.space-after
        mode-selection-component.space-after
        counter-component(
          :min="ruleset.player_count.min"
          :max="ruleset.player_count.max"
          label="Number of players:"
          name="player-counter"
          @change="setPlayers($event)"
          ).space-after
        div.d-flex.center.buttons
          div(@click="editNames = true").secondary-button Edit names
          div(@click="startGame").primary-button Start game
    footer-component
</template>

<script>
  import FooterComponent from '@/components/layout/Footer'
  import HeaderComponent from '@/components/layout/Header'
  import CounterComponent from '@/components/form/Counter'
  import ModeSelectionComponent from '@/components/form/ModeSelection'
  import NameSelectionComponent from '@/components/form/NameSelection'
  import RuleSelectionComponent from '@/components/form/RuleSelection'
  import { mapState } from 'vuex'

  export default {
    components: {
      FooterComponent,
      HeaderComponent,
      CounterComponent,
      ModeSelectionComponent,
      NameSelectionComponent,
      RuleSelectionComponent
    },
    data () {
      return {
        editNames: false
      }
    },
    computed: {
      ...mapState({
        code: (state) => state.game.code,
        players: (state) => state.game.players,
        ruleset: (state) => state.game.ruleset
      })
    },
    methods: {
      loadRules () {
        this.$store.dispatch('game/getRules')
      },
      setPlayers (e) {
        if (e < this.players.length) this.$store.commit('game/DELETE_PLAYER')
        else if (e > this.players.length) this.$store.commit('game/SET_PLAYER', 'Player ' + e)
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
  .buttons {
    margin-top: 50px;
  }

  .center {
    justify-content: center;
  }

  .d-flex {
    align-items: center;
    display: flex;
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
