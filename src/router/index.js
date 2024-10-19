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
            component: () => import('../views/index.vue'),
            meta: {
                keepAlive: true //设置页面是否需要使用缓存
            },
        },
        {
            path: '/detail-page',
            component: () => import('../components/discs-detail.vue')
        }
    ]
})

export default router