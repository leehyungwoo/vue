import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        datas: [
            { id: "shine8808", name: "리우", password: "1234" },
            { id: "dlguddn3214", name: "리형우", password: "123456" },
            { id: "test", name: "Leewoo", password: "1234" }
        ],
        userInfo: {
            id: null, name: null
        },
        isLogin: false,
        loginError: false,
    },
    mutations: {
        loginSuccess(state, payload) {
            state.userInfo.id = payload.id;
            state.userInfo.name = payload.name;
            state.isLogin = true;
            state.loginError = false;
            router.push({ name: 'myPage' })
        },
        loginFail(state) {
            state.isLogin = false;
            state.loginError = true;
        }
    },
    actions: {
        signUp({ commit, state }, payload) {
            state.datas.forEach(data => {
                if (data.id === payload.u_id && data.password === payload.u_ps) {
                    return commit('loginSuccess', data)
                }
            });
            if (!state.isLogin) {
                commit('loginFail')
            }
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
