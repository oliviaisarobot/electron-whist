<template lang="pug">
  div
    div.heading.h5 Set bids:
    div.scrollable.space-after
      div(v-for="(value, index) in players").space-after
        label(for="input").d-inline-block.margin-right {{ value }}:
        input(type="number", :value="currentRoundData.bids[value]", :ref="'bid-' + index" @input="setBid(index, value, $event)").input.width-20
    div.d-flex.justify-center
      div(@click="bidsSet").primary-button.width-20 Done
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        currentRound: (state) => state.game.gameData.currentRound,
        players: (state) => state.game.players,
        rounds: (state) => state.game.gameData.rounds
      }),
      currentRoundData () {
        return this.rounds[this.currentRound - 1]
      }
    },
    methods: {
      bidsSet () {
        this.$store.commit('game/BID_ISSET', { round: this.currentRound })
        this.$emit('set')
      },
      setBid (i, v, e) {
        let newValue = e.target.value
        if (newValue > this.currentRound) this.$refs['bid-' + i][0].value = 0 // if you try to set a higher number than the card in hand, the value stays 0, TODO: emit some notification for the user
        else if (newValue) this.$store.commit('game/SET_BID', { round: this.currentRound, player: v, value: parseInt(newValue) })
        else this.$refs['bid-' + i][0].value = 0
      }
    }
  }
</script>

<style>
  .heading {
    display: block;
    margin-bottom: 20px;
  }

  label {
    font-size: 18px;
    width: 120px;
  }

  .margin-right {
    margin-right: 20px;
  }

  .width-20 {
    width: 20%;
  }
</style>
