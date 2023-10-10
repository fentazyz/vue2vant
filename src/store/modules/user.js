import { setinfo, getinfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      userinfo: {
        userinfo: getinfo()
      }
    }
  },
  mutations: {
    setUserinfo (state, obj) {
      state.userInfo = obj
      setinfo(obj)
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserinfo', {})
      context.commit('Cart/setCartList', [], { root: true })
    }
  },
  getters: {
    getToken (state) {
      return state.userinfo.userinfo.token
    }
  }
}
