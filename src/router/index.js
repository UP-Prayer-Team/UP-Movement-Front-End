import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prayer from '../views/Prayer.vue'
import Charities from '../views/Charities.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/prayer',
        name: 'prayer',
        component: Prayer
    },
    {
        path: '/charities',
        name: 'charities',
        component: Charities
    },
    {
        path: '/signup',
        name: 'sign-up',
        component: SignUp
    },
]

const router = new VueRouter({
    routes
})

export default router
