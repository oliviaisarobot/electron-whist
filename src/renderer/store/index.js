import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
// import game from './modules/game'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   game: game
  // }
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
