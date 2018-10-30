const state = {
  active: false,
  messages: []
}

const mutations = {
  ADD_MESSAGE (state, message) {
    state.messages.push(message)
  },
  SET_ACTIVE (state, active) {
    state.messages.active = active
  }
}

const actions = {
  ADD_MESSAGE (context, message) {
    context.commit('ADD_MESSAGE', message)
  },
  SET_ACTIVE (context, active) {
    context.commit('SET_ACTIVE', active)
  }
}

export default {
  state,
  mutations,
  actions
}
