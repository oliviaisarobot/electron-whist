const state = {
  code: 'a01',
  gamelist: [
    { code: 'a01', name: 'Rikiki' },
    { code: 'a02', name: 'Bid Whist' }
  ],
  modes: [
    { name: 'ascending', description: 'In ascending mode, there are 15 rounds, the first one starting with a hand of one card, increasing each round until it reaches fifteen.', round_count: 15 },
    { name: 'descending', description: 'In descending mode, there are 15 rounds, the first one starting with a hand of fifteen cards, descreasing each round until it reaches one.', round_count: 15 },
    { name: 'pyramid', description: 'In pyramid mode, there are 30 rounds, the first one starting with a hand of one card, increasing each round. After reaching the 16th round, players are dealt 15 card again, decreasing each round, until it reaches one.', round_count: 30 }
  ],
  ruleset: {},
  players: [],
  selectedMode: {},
  gameData: {}
}

const mutations = {
  CLEAR_PLAYERS (state) {
    state.players = []
  },
  DELETE_PLAYER (state) {
    state.players.pop()
  },
  INCREMENT_ROUND_COUNTER (state) {
    state.gameData.currentRound++
  },
  INIT_GAME (state) {
    state.gameData = {
      introRead: false,
      currentRound: 1,
      rounds: []
    }
  },
  INIT_NEW_ROUND (state) {
    if (state.gameData.rounds) {
      let roundData = {}
      if (state.ruleset.bid) roundData.bids = {}; roundData.bids.isSet = false
      roundData.takes = {}; roundData.takes.isSet = false
      state.players.forEach((player) => {
        if (state.ruleset.bid) roundData.bids[player] = 0
        roundData.takes[player] = 0
      })
      roundData.trump = null
      state.gameData.rounds.push(roundData)
    }
  },
  INTRO_READ (state) {
    state.gameData.introRead = true
  },
  RENAME_PLAYER (state, data) {
    state.players[data.index] = data.name
  },
  RESET_PLAYERS (state) {
    state.players = []
    for (let i = 1; i <= state.ruleset.player_count.min; i++) {
      state.players.push('Player ' + i)
    }
  },
  SET_PLAYER (state, data) {
    state.players.push(data)
  },
  SET_TRUMP (state, data) {
    state.gameData.rounds[data.round - 1].trump = data.name
  },
  SET_GAME_MODE (state, mode) {
    state.selectedMode = mode
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
