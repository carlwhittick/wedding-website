import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/scenes/Home'
import SignIn from '@/components/scenes/SignIn'
import Register from '@/components/scenes/Register'
import Manage from '@/components/scenes/Manage'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sign-in',
            name: 'Sign In',
            component: SignIn
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/register/:inviteCode',
            component: Register
        },
        {
            path: '/manage',
            name: 'Management',
            component: Manage,
            beforeEnter: AuthGuard
        }
    ]
})
