import axios from "axios";
const baseUrl = 'http://localhost:8000/'

const endpoints = {
    register:'registration/',
    login:'login/',
    user:'user/',
    refresh:'refresh/',
}

const tokens = {
    access_token: "",
    refresh_token: ""
}

const HTTP = axios.create({
    baseURL: baseUrl
})

function setTokens(access_token, refresh_token) {
    tokens.access_token = access_token;
    tokens.refresh_token = refresh_token;
    HTTP.defaults.headers.common['Authorization'] = `Token ${access_token}`;
}

async function refreshTokens(){
    HTTP.defaults.headers.common['Authorization'] = '';
    const res = await HTTP.post(endpoints.refresh, {refresh_token: tokens.refresh_token});
    setTokens(res.data.access_token, res.data.refresh_token);
    localStorage.setItem('tokens', JSON.stringify(tokens));
}

async function execWithTokensChecking(apiFunc){
    try{
        return await apiFunc();
    }catch (err) {
        if(err.response.status == 403){
            await refreshTokens();
            return await apiFunc();
        }
    }
}

async function getUserOnce(){
    if(!tokens.access_token) return null;

    const res = await HTTP.get(endpoints.user);
    return res.data;
}

const api = {
    initFromLS : () => {
      const ls_tokens = JSON.parse(localStorage.getItem('tokens'));
      if(ls_tokens && ls_tokens.access_token && ls_tokens.refresh_token)
      {
          setTokens(ls_tokens.access_token, ls_tokens.refresh_token);
      }
      else throw new Error('LSis empty');
    },
    register: async (email, pass) => {
        try{
            const res = await HTTP.post(endpoints.register, {
                email: email,
                password: pass
            });

            if(res.data && res.data.access_token && res.data.refresh_token)
            {
                setTokens(res.data.access_token, res.data.refresh_token);
                localStorage.setItem('tokens', JSON.stringify(tokens));
            }
        }catch (err) {
            if(err.response.status == 400){
                throw new Error('User already exists');
            }
        }
    },
    login: async (email, pass) => {
        try {
            const res = await HTTP.post(endpoints.login, {
                email: email,
                password: pass
            });

            if (res.data && res.data.access_token && res.data.refresh_token) {
                setTokens(res.data.access_token, res.data.refresh_token);
                localStorage.setItem('tokens', JSON.stringify(tokens));
                return Promise.resolve();
            }
        }catch (err){
            return Promise.reject(err);
        }
    },
    logout: () => {
        setTokens('', '');
        localStorage.clear();
    },
    refreshTokens: async () => {
        await refreshTokens();
    },
    getUser: async () => {
        return await execWithTokensChecking(getUserOnce);
    }
}

export default api;