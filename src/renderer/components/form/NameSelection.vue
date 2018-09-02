<template lang="pug">
  div.center
    div(v-for="(value, index) in players", :key="index").space-after
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
        console.log(e)
        this.$store.commit('game/RENAME_PLAYER', { name: e.target.value, index: i })
      }
    }
  }
</script>

<style>
  .center {
    text-align: center;
  }

  .space-after {
    margin-bottom: 15px;
  }
</style>
