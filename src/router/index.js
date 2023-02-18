import Vue from 'vue';
import VueRouter from 'vue-router';
import BeveragePage from '@/components/Beverage/BeveragePage';
import HomePage from '@/components/Home/HomePage';

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/beverage',
        component: BeveragePage
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = new VueRouter({
    routes
})

export default router