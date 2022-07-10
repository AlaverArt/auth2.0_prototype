import { createStore } from 'vuex'
import auth from "@/store/modules/auth";
import api from "@/store/api";

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    }
  },
  actions: {
    async getUser(context){
      try {
        const user = await api.getUser();
        context.commit('setUser', user);
      }catch (err){
        console.log(err);
      }
    }
  },
  modules: {
    auth: auth
  }
})
