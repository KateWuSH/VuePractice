import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  status: '線上',
  username: 'Kate123'
}
const getters = {}
const mutations = {}
const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})