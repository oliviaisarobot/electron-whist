<template lang="pug">
  div.select-container.d-flex
    label(for="select") Game type:
    div.d-flex
      div(
        @click="switchType('previous')"
        ).modify.left
      div.select {{ gameType.name }}
      div(
        @click="switchType('next')"
        ).modify.right
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        gamelist: (state) => state.game.gamelist
      })
    },
    data () {
      return {
        gameType: {}
      }
    },
    methods: {
      getGameType () {
        this.gamelist.forEach((game) => {
          if (game.code === this.$store.state.game.code) this.gameType = game
        })
      },
      switchType (direction) {
        let [i, code, _this] = [this.gamelist.indexOf(this.gameType), this.gameType.code, this]
        if (direction === 'previous') {
          if (i === 0) code = _this.gamelist[_this.gamelist.length - 1].code
          else code = _this.gamelist[i - 1].code
        } else {
          if (i === _this.gamelist.length - 1) code = _this.gamelist[0].code
          else code = _this.gamelist[i + 1].code
        }
        this.$store.dispatch('game/setGameType', code)
        this.getGameType()
      }
    },
    created () {
      this.getGameType()
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
