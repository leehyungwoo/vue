import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'


Vue.use(Vuex)
// const token = localStorage.getItem("token");
// axios
//     .get(`/api`, { headers: { Authorization: token } })
//     .then(r => {
//         store.state.userInfo.id = r.data.userInfo.u_id;
//         store.state.userInfo.name = r.data.userInfo.u_name;
//         store.state.isLogin = true;
//         console.log(store.state)
//         location.href = "/home"


//     })
//     .catch(e => console.log(e.message));
export default new Vuex.Store({
    state: {
        userInfo: {
            id: null, name: null
        },
        isLogin: false,
        loginError: false,
        errorText: ''
    },
    mutations: {
        loginSuccess(state, payload) {
            state.userInfo.id = payload.u_id;
            state.userInfo.name = payload.u_name;
            state.isLogin = true;
            state.loginError = false;
            state.errorText = payload.msg;
            localStorage.setItem('token', payload.token)
            router.push({ name: 'myPage' })
        },
        loginFail(state, payload) {
            state.isLogin = false;
            state.loginError = true;
            state.errorText = payload.msg
            localStorage.removeItem('token')
        }
    },
    actions: {
        signUp({ commit, state }, payload) {
            axios.post('/api/login', payload).then((res) => {
                if (res.data.success) {
                    return commit('loginSuccess', res.data)
                } else {
                    console.log('로그인실패')
                    return commit('loginFail', res.data)
                }
            }).catch(err => console.log(err))


        },
        logout({ state }) {
            state.userInfo.id = null;
            state.userInfo.name = null;
            state.isLogin = false;
            state.loginError = false;
            router.push({ name: 'login' })
        }
    }
})
