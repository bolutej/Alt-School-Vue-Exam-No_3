import { createRouter, createWebHistory } from "vue-router"; 
import MainPage from '../components/MainPage.vue';
import RepoFetcher from '../components/RepoDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/repos/:owner/:name',
        name: 'Repo Detail',
        component: RepoFetcher
    },
    // {
    //     path: "'/' + post.name",
    //     name: 'each',
    //     component: RepoFetcher
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router