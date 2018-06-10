import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import people from './people'
import invitation from './invitation'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        people,
        invitation
    },
    state: {
        loading: false,
        authenticating: true,
        fetching: true,
        error: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        },
        setAuthenticating(state, payload) {
            state.authenticating = payload
        },
        setFetching(state, payload) {
            state.fetching = payload
        }
    },
    actions: {
        clearError({ commit }) {
            commit('clearError')
        }
    },
    getters: {
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        },
        authenticating(state) {
            return state.authenticating
        },
        fetching(state) {
            return state.fetching
        }
    }
})