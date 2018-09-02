<template lang="pug">
  div
    div.h5 Scoreboard
    div.fullheight-scrollable
      table
        thead
          tr
            th Round
            th(v-for="player in players", :colspan="colspan") {{ player }}
        tbody
          tr(v-for="(value, index) in scores", :class="{ 'background-even': (scores.length - (index)) % 2 === 0 }").border-bottom
            td.text-center.border-right {{ scores.length - (index) }}
            td(v-for="(v, i) in value", :class="{ 'mark border-right': (i + 1) % colspan === 0 }").text-center {{ v }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        players: (state) => state.game.players,
        rounds: (state) => state.game.gameData.rounds,
        ruleset: (state) => state.game.ruleset
      }),
      colspan () {
        return this.ruleset.bid ? 3 : 2
      },
      scores () {
        let metaScore = []
        this.players.forEach((player) => {
          metaScore[player] = 0
        })
        let scores = []
        this.rounds.forEach((round) => {
          let line = []
          this.players.forEach((player) => {
            let bids = false
            if (this.ruleset.bid) {
              bids = round.bids[player]
              line.push(bids)
            }
            line.push(round.takes[player])
            if (round.takes.isSet) metaScore[player] += this.calcScore(round.takes[player], bids)
            line.push(metaScore[player])
          })
          scores.push(line)
        })
        return scores.reverse()
      }
    },
    methods: {
      calcScore (takes, bids) {
        let diff = 0
        if (bids) diff = Math.abs(takes - bids)
        if (this.ruleset.penalty) { // if penalty is true, bids must also be true
          return diff === 0 ? 10 + (bids * 2) : -(diff * 2)
        } else {
          if (this.ruleset.bid) { // no penalty, but correct bidding is rewarded
            return diff === 0 ? 10 + (bids * 2) : takes * 2
          } else { // no penalty, and no bidding, highest take wins
            return takes * 2
          }
        }
      }
    }
  }
</script>

<style>
  table {
    border: 1px solid #ff0099;
    border-collapse: collapse;
    margin: 0px 20px 5px 0px;
  }

  tbody {
    background-color: rgba(0,0,0,0.8);
  }

  thead {
    background-color: #ff0099;
    border-radius: 10px;
    color: #ffff33;
  }

  th {
    padding: 5px 25px 0px 25px;
  }

  .background-even {
    background-color: rgba(0,174,239,.2);
  }

  .border-bottom {
    border-bottom: 1px solid #27aae1;
  }

  .border-right {
    border-right: 1px solid #ff0099;
  }

  .fullheight-scrollable {
    height: 70vh;
    overflow-y: auto;
  }

  .mark {
    color: #27aae1;
  }
</style>
