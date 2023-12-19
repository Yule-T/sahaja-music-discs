import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/index',
            redirect: '/'
        },
        {
            path: '/',
            component: () => import('../views/index.vue')
        },
        {
            path: '/detail-page',
            component: () => import('../components/discs-detail.vue')
        }
    ]
})

export default router