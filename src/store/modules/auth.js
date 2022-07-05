export default {
    namespaced: true,
    state: () => ({
        accessToken:"",
        refreshToken:""
    }),
    mutations: {
        setAccessToken(state, token){
            state.accessToken = token;
        },
        setRefreshToken(state, token){
            state.refreshToken = token;
        }
    },
    actions: {
        async login(context, {email, pass}){
            const res = await fetch("http://localhost:8000/login/", {
                'Content-type':'application/json',
                method:"POST",
                body: {
                    'user': {
                        email: email,
                        password: pass
                    }
                }
            });
            const data = await res.json();

            context.commit('setAccessToken', data.user.accessToken);
            context.commit('setRefreshToken', data.user.refreshToken);
        }
    },
    getters: {  }
}