import { createRouter, createWebHistory } from "vue-router"; 
import MainPage from '../components/MainPage.vue';
import RepoFetcher from '../components/RepoDetail.vue'
import Error404 from '../components/Error404Page.vue'
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
    {
        path: '*',
        name: '404',
        component: Error404
    }
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