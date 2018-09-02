<template lang="pug">
  div
    div(v-if="bids").h5 Current bids
    div(v-else).h5 Current ranking
    div.d-flex.justify-center
      table.ranking
        thead
          tr
            th(v-for="(value, index) in metaScore", :key="index") {{ index }}
        tbody
          tr
            td(v-for="(value, index) in metaScore", :key="index")
              span(v-if="bids") {{ rounds[currentRound - 1].bids[index] }}
              span(v-else) {{ value }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      bids: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapState({
        currentRound: (state) => state.game.gameData.currentRound,
        metaScore: (state) => state.game.gameData.metaScore,
        rounds: (state) => state.game.gameData.rounds
      })
    }
  }
</script>

<style>
</style>
