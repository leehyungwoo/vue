import Vue from "vue";
import Vuex from "vuex";
import router from './router'
import axios from "axios";
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
        login({ dispatch }, loginObj) {
            // 로그인 ->토큰반환
            axios
                .post("https://reqres.in/api/login", loginObj) //파라메터(body)
                .then(r => {
                    // 성공시 token
                    // 토큰을 헤더에 포함시켜서 유저정보를 요청
                    let token = r.data.token;
                    //토큰을 로컬스토리지에 저장
                    localStorage.setItem('access_token', token)
                    dispatch('getMemberInfo')
                })
                .catch(err => {
                    console.log(err)
                    alert('이메일과 비밀번호를 확인하세요')
                });

        },
        logout({ commit }) {
            commit('logout')
            router.push({ name: 'home' })
        },
        getMemberInfo({ commit }) {
            // 로컬스토리지에 저장된 토큰을 불러온다.
            let token = localStorage.getItem('access_token')
            let config = {
                headers: {
                    "access-token": token
                }
            }
            // 토큰 -> 멤버의 정보를 반환
            // 새로 고침 -> 토큰만 가지고 멤버 정보 요청
            axios
                .get("https://reqres.in/api/users/2", config)
                .then(res => {
                    let userInfo = res.data.data;
                    commit('loginSucess', userInfo)
                })
                .catch(err => {
                    console.log(err)
                    alert('이메일과 비밀번호를 확인하세요')
                });
        }
    }
});
