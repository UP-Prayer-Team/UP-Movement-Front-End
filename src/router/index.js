import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prayer from '../views/Prayer.vue'
import Charities from '../views/Charities.vue'
import Confirm from '../views/Confirm.vue'
import Blog from '../views/Blog.vue'
import Thanks from '../views/Thanks.vue'
import ThankYou from '../views/ThankYou.vue'
import Give from '../views/Give.vue'
import Register from '../views/Register.vue'
import ContactUs from '../views/ContactUs.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        tabText: 'Home',
        drawerIcon: 'chevron_right'
    },
    {
        path: '/charities',
        name: 'charities',
        component: Charities,
        tabText: 'Charities',
        drawerIcon: 'chevron_right'
    },
    {
        path: '/prayer',
        name: 'prayer',
        component: Prayer,
        tabText: 'Resources',
        drawerIcon: 'chevron_right'
    },
    {
        path: '/updates/:id', 
        name: 'blog',
        component: Blog,
        tabText: 'Updates',
        drawerIcon: 'chevron_right'
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        tabText: 'About',
        drawerIcon: 'chevron_right'
    },
    {
        path: '/signup',
        name: 'sign-up',
        component: Register,
        tabText: 'Pray',
        drawerIcon: 'chevron_right'
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: Confirm
    },
    {
        path: '/thankyou',
        name: 'thank-you',
        component: ThankYou,
    },
    {
        path: '/thanks',
        name: 'thanks',
        component: Thanks,
    },
    {
        path: '/give',
        name: 'give',
        component: Give,
    },
    {
        path: '/contact',
        name: 'contact-us',
        component: ContactUs,
    },
]

const router = new VueRouter({
    routes
})

export default router
