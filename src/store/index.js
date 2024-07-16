// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || null,
    user: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/login',
          credentials
        );
        const token = response.data.token;
        const user = response.data.user;

        commit('SET_TOKEN', token);
        commit('SET_USER', user);

        // Simpan token di local storage
        localStorage.setItem('token', token);

        return true; // Login berhasil
      } catch (error) {
        console.error(error);
        return false; // Login gagal
      }
    },
    logoutUser({ commit }) {
      commit('SET_TOKEN', null);
      commit('SET_USER', null);
      localStorage.removeItem('token');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
  },
});

export default store;
