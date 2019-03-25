import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)


// const signUpAuth = (to, from, next) => {
//     //로그인 했으면 홈으로
//     console.log(store.state.isLogin)
//     if (store.state.isLogin) {
//         next('/')
//     } else {
//         //로그인 안했으면 컴포넌트 랜더링
//         next()
//     }
// }

// const noneSignUpAuth = (to, from, next) => {
//     //로그인 안했으면 로그인으로
//     console.log(store.state.isLogin)
//     if (!store.state.isLogin) {
//         next('/login')
//     } else {
//         //로그인 했으면 컴포넌트 랜더링
//         next()
//     }
// }

var pageCheck = (to, from, next) => {
    axios.post('/api/page', {
        name: to.path.replace('/', '')
    }).then((res) => {
        console.log(res.data)
        console.log('성공')
        if (!res.data.success) {
            next(`/block/${res.data.msg}`)
        }
        next()
    }).catch((err) => {
        console.log('실패')
    })
}


var goToLogin = (to, from, next) => {

    if (!store.state.isLogin) {
        next('/login')
    } else {
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
            component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        },
        {
            path: '/signup',
            name: 'signUp',
            component: () => import(/* webpackChunkName: "SignUp" */ './views/SignUp.vue')
        },
        {
            path: '/mypage',
            name: 'myPage',
            component: () => import(/* webpackChunkName: "Mypage" */ './views/MyPage.vue'),
            beforeEnter: pageCheck
        },
        {
            path: '/v0',
            name: 'v0',
            component: () => import(/* webpackChunkName: "v0" */ './views/v0.vue'),
            beforeEnter: pageCheck
        },
        {
            path: '/v1',
            name: 'v1',
            component: () => import(/* webpackChunkName: "v1" */ './views/v1.vue'),
            beforeEnter: pageCheck
        },
        {
            path: '/v2',
            name: 'v2',
            component: () => import(/* webpackChunkName: "v2" */ './views/v2.vue'),
            beforeEnter: pageCheck
        },
        {
            path: '/v3',
            name: 'v3',
            component: () => import(/* webpackChunkName: "v3" */ './views/v3.vue'),
            beforeEnter: pageCheck
        },
        {
            path: '/block/:msg',
            name: 'block',
            component: () => import(/* webpackChunkName: "v3" */ './views/block.vue'),
            beforeEnter: goToLogin
        },

    ]
})