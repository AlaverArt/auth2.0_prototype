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
                headers:{
                    'Content-type':'application/json'
                },
                method:"POST",
                body: JSON.stringify({
                    'user': {
                        email: email,
                        password: pass
                    }
                })
            });
            const data = await res.json();

            context.commit('setAccessToken', data.user.access_token);
            context.commit('setRefreshToken', data.user.refresh_token);
        }
    },
    getters: {  }
}