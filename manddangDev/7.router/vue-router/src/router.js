import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
    return import(/* webpackChunkName: "about" */ './views/About.vue')
}
const Users = () => {
    return import(/* webpackChunkName: "users" */ './views/Users.vue')
}
const UsersDetail = () => {
    return import(/* webpackChunkName: "UsersDetail" */ './views/UsersDetail.vue')
}
const UsersEdit = () => {
    return import(/* webpackChunkName: "UsersEdit" */ './views/UsersEdit.vue')
}
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // 레이지로딩: 미리 모든 라우터에 연결된 컴포넌트를 로딩시키는게아니라, 부를때 로딩시킨다.
            component: About
        },

        {
            path: '/users',
            beforeEnter: (to, from, next) => {
                console.log('to:', to, 'from:', from)
                next()  //next인자 안에 다른라우터 주소를 넣으면 redirect
                // if (isUserLsgin === true) {
                //     next()
                // } else {
                //     next('/')
                // }
            },
            name: 'users',
            component: Users,
            children: [
                {
                    path: ':id',
                    name: 'users-detail',
                    component: UsersDetail
                },
                {
                    path: ':id/edit',
                    name: 'users-edit',
                    component: UsersEdit
                },
            ]
        }
    ]
})
