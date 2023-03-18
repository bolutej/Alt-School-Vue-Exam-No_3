import { createRouter, createWebHistory } from "vue-router"; 
import MainPage from '../components/MainPage.vue';
import RepoFetcher from '../components/RepoDetail.vue'
import PageNotFound from '../components/PageNotFound.vue'
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
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router