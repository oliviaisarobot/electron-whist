const state = {
  code: 'a01',
  gamelist: [
    { code: 'a01', name: 'Rikiki Ascending' },
    { code: 'a02', name: 'Rikiki Descending' },
    { code: 'a03', name: 'Rikiki Pyramid' }
  ],
  ruleset: {},
  players: []
}

const mutations = {
  RESET_PLAYERS (state) {
    state.players = []
    for (let i = 1; i <= state.ruleset.player_count.min; i++) {
      state.players.push('Player ' + i)
    }
  },
  SET_PLAYER (state, data) {
    state.players.push(data)
  },
  SET_GAME_RULES (state, json) {
    state.ruleset = json
  },
  SET_GAME_TYPE (state, data) {
    state.code = data
  }
}

const actions = {
  getRules ({state, commit}) {
    const rules = require('@/components/rulesets/' + state.code + '.json')
    commit('SET_GAME_RULES', rules)
    commit('RESET_PLAYERS')
  },
  setGameType ({state, commit, dispatch}, code) {
    if (code) {
      commit('SET_GAME_TYPE', code)
      dispatch('getRules')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
