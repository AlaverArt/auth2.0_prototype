import { createStore } from 'vuex'
import auth from "@/store/modules/auth";

export default createStore({
  state: {
    email:""
  },
  getters: {
  },
  mutations: {
    setEmail(state, email){
      state.email = email;
    }
  },
  actions: {
  },
  modules: {
    auth: auth
  }
})
