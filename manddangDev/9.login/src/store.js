import Vue from "vue";
import Vuex from "vuex";
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [
            {
                id: 1,
                name: "leewoo",
                email: "leewoo@gmail.com",
                password: "1234"
            },
            {
                id: 1,
                name: "test",
                email: "test@gmail.com",
                password: "1234"
            }
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        //로그인이 성공
        loginSucess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },
        //로그인이 실패
        loginError(state, payload) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state) {
            state.isLogin = false
            state.loginError = false
            state.userInfo = null
        }
    },
    actions: {
        //로그인 시도
        login({ state, commit }, loginObj) {
            // 전체유저에서 해당이메일로 유저를 찾는다.
            let selectedUser = null;
            state.allUsers.forEach(user => {
                if (user.email === loginObj.email) {
                    selectedUser = user;
                }
            });
            if (!selectedUser || selectedUser.password !== loginObj.password) {
                commit('loginError')
            } else {
                commit('loginSucess', selectedUser)
                router.push({ name: 'mypage' })
            }
        },
        logout({ commit }) {
            commit('logout')
            router.push({ name: 'home' })
        }
    }
});
