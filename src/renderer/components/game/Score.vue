<template lang="pug">
  div
    header
      div.h5 {{ ruleset.name }}
    div.content.animated.fadeIn
      div(v-if="!gameData.introRead").animated.fadeIn
        intro-component
      div(v-else).animated.fadeIn
        div The game is here!
    footer
      div(@click="exitGame").secondary-button Exit game
</template>

<script>
  import HeaderComponent from '@/components/layout/Header'
  import IntroComponent from '@/components/game/Intro'
  import { mapState } from 'vuex'

  export default {
    components: {
      HeaderComponent,
      IntroComponent
    },
    computed: {
      ...mapState({
        gameData: (state) => state.game.gameData,
        ruleset: (state) => state.game.ruleset,
        mode: (state) => state.game.selectedMode
      })
    },
    data () {
      return {}
    },
    methods: {
      exitGame () {
        // TODO: prompt exit
        this.$router.push({ name: 'main-menu' })
      }
    },
    created () {
      this.$store.commit('game/INIT_GAME')
    }
  }
</script>

<style>
  .d-flex {
    align-items: center;
    display: flex;
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
