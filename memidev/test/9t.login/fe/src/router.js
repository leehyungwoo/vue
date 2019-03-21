import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)


const signUpAuth = (to, from, next) => {
    //로그인 했으면 홈으로
    console.log(store.state.isLogin)
    if (store.state.isLogin) {
        next('/')
    } else {
        //로그인 안했으면 컴포넌트 랜더링
        next()
    }
}

const noneSignUpAuth = (to, from, next) => {
    //로그인 안했으면 로그인으로
    console.log(store.state.isLogin)
    if (!store.state.isLogin) {
        next('/login')
    } else {
        //로그인 했으면 컴포넌트 랜더링
        next()
    }
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        },
        {
            path: '/login',
            name: 'login',
            beforeEnter: signUpAuth,
            component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        },
        {
            path: '/signup',
            name: 'signUp',
            beforeEnter: signUpAuth,
            component: () => import(/* webpackChunkName: "SignUp" */ './views/SignUp.vue')
        },
        {
            path: '/mypage',
            name: 'myPage',
            beforeEnter: noneSignUpAuth,
            component: () => import(/* webpackChunkName: "Mypage" */ './views/MyPage.vue')
        },
        {
            path: '/mypage',
            name: 'myPage',
            beforeEnter: noneSignUpAuth,
            component: () => import(/* webpackChunkName: "Mypage" */ './views/MyPage.vue')
        },
        {
            path: '/v0',
            name: 'v0',
            beforeEnter: noneSignUpAuth,
            component: () => import(/* webpackChunkName: "v0" */ './views/v0.vue')
        }, ,
        {
            path: '/v1',
            name: 'v1',
            beforeEnter: noneSignUpAuth,
            component: () => import(/* webpackChunkName: "v1" */ './views/v1.vue')
        }, ,
        {
            path: '/v2',
            name: 'v2',
            beforeEnter: noneSignUpAuth,
            component: () => import(/* webpackChunkName: "v2" */ './views/v2.vue')
        }, ,
        {
            path: '/v3',
            name: 'v3',
            beforeEnter: noneSignUpAuth,
            component: () => import(/* webpackChunkName: "v3" */ './views/v3.vue')
        },

    ]
})