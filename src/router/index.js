import {createRouter, createWebHistory} from "vue-router";

import Login from "@/views/login/index.vue";
import Register from "@/views/register/index.vue"
import Profile from "@/views/profile/index.vue"
import Search from "@/views/search/index.vue"
import Job from "@/views/job_page/index.vue"
import Request from "@/views/requests/index.vue"
import Tasks from "@/views/tasks/index.vue"
import Board from "@/views/board/index.vue"
import New from "@/views/new/index.vue"

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/job',
        name: 'job',
        component: Job
    },
    {
        path: '/requests',
        name: 'requests',
        component: Request
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: Tasks
    },
    {
        path: '/board',
        name: 'board',
        component: Board
    },
    {
        path: '/new',
        name: 'new',
        component: New
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;