import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Page.Home
        },
        {
            path: '/about',
            name: 'about',
            component: Page.About
        },
        {
            path: '*',
            name: 'emptyPage',
            component: Page.EmptyPage
        },
        {
            path: '/test',
            name: 'test',
            component: Page.Test
        },
        {
            path: '/practice',
            name: 'practice',
            component: Page.Practice
        },
        {
            path: '/Props',
            name: 'Props',
            component: Page.Props
        }
    ]
})