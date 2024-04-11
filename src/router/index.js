import {createRouter, createWebHistory} from "vue-router";

import Login from "@/views/login/index.vue";
import Register from "@/views/register/index.vue"
import Profile from "@/views/profile/index.vue"
import Search from "@/views/search/index.vue"
import Job from "@/views/job_page/index.vue"
import Request from "@/views/requests/index.vue"

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

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;