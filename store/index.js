import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      loginData: {},
      token: '',
    },
    getters: {
      isLogin(state) {
        return state.loginData.id ? true : false
      },
      avatar(state) {
        return state.loginData.avatar || ''
      }
    },
    mutations: {

      login(state, loginData) {
        // 保存登录信息到当前会话
        localStorage.setItem('loginData', JSON.stringify(loginData))
        state.loginData = JSON.parse(localStorage.getItem('loginData'))
      },

      setToken(state, token) {
        state.token = token
      }
    },
  })
}

export default store

