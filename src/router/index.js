import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '@/views/HomeMain.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeMain
    },
    {
        path: '/project',
        name: 'project',
        component: () => import('@/views/Project.vue')
    },
    {
        path: '/project-details',
        name: 'project-details',
        component: () => import('@/views/ProjectDetailsMain.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogMain.vue')
    },
    {
        path: '/blog-details',
        name: 'blog-details',
        component: () => import('@/views/BlogDetailsMain.vue')
    },
    {
        path: '/:CatchAll(.*)',
        name: 'error',
        component: () => import('@/views/404Main.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router