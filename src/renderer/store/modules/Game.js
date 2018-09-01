const state = {
  type: '',
  players: []
}

const mutations = {
  SET_PLAYERS (state, data) {
    if (data.isArray) {
      data.forEach((element) => {
        state.players.push({ name: element.name })
      })
    }
  }
}

const actions = {
  setPlayers ({ commit }, data) {
    commit('SET_PLAYERS', data)
  }
}

export default {
  state,
  mutations,
  actions
}
