import api from "@/store/api";

export default {
    namespaced: true,
    state: () => ({
        isLogin:false,
        userAlreadyExists:false
    }),
    mutations: {
        loginSuccess(state){
            state.isLogin = true;
        },
        loginFailure(state){
            state.isLogin = false;
        },
        registerSuccess(state){
            state.userAlreadyExists = false;
        },
        registerFailure(state){
            state.userAlreadyExists = true;
        },
    },
    actions: {
        async register(context, {email, pass}){
            try{
                await api.register(email, pass);
                context.commit('registerSuccess');
            }catch (err){
                context.commit('registerFailure');
                console.log('auth / reg err', err);
            }
        },
        async login(context, {email, pass}){
            try{
                await api.login(email, pass);
                context.commit('loginSuccess');
            }catch (err){
                context.commit('loginFailure');
            }
        },
        logout({state, rootState}){
            api.logout();
            rootState.user = null;
            state.isLogin = false;
        },
        initFromLS(context){
          try{
              api.initFromLS();
              context.commit('loginSuccess');
          }catch (err) {
              context.commit('loginFailure');
          }
        },
        async refreshTokens(){
            await api.refreshTokens();
        },
    },
    getters: {  }
}