<template lang="pug">
  div.scrollable
    div(
      v-for="(value, index) in players"
      :key="index"
      ).space-after
      input(type="text", :value="value" @change="nameChange($event, index)").input
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        players: (state) => state.game.players
      })
    },
    methods: {
      nameChange (e, i) {
        this.$store.commit('game/RENAME_PLAYER', { name: e.target.value, index: i })
      }
    }
  }
</script>

<style>
  .space-after {
    margin-bottom: 15px;
  }

  .width-50 {
    box-sizing: border-box;
    display: inline-block;
    /* margin-right: 20px; */
    padding-left: 10px;
    padding-right: 10px;
    width: 50%;
  }

  .width-100 {
    width: 100%;
  }
</style>
