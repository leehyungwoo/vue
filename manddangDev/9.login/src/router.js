import Vue from "vue";
import Router from "vue-router";
import store from './store'

Vue.use(Router);

const rejectAuthUser = (to, from, next) => {
    if (store.state.isLogin) {
        //이미 로그인된 유저임으로 막아야함
        alert('이미 로그인 되었습니다')
        next('/')
    } else {
        next()
    }
}
const onlyAuthUser = (to, from, next) => {
    if (!store.state.isLogin) {
        // 로그인이 안되었음으로 막아야함
        alert('로그인이 필요한기능입니다')
        next('/')
    } else {
        next()
    }
}

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: () =>
                import(/* webpackChunkName: "Home" */ "./views/Home.vue")
        },
        {
            path: "/login",
            name: "login",
            beforeEnter: rejectAuthUser,
            component: () =>
                import(/* webpackChunkName: "Login" */ "./views/Login.vue")

        },
        {
            path: "/mypage",
            name: "mypage",
            beforeEnter: onlyAuthUser,
            component: () =>
                import(/* webpackChunkName: "Mypage" */ "./views/Mypage.vue")
        },
    ]
});
