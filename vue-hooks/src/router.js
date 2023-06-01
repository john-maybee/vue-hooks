import HomePage from './views/HomePage.vue';
import LoginPage from './views/LoginPage.vue';
import UserPage from './views/UserPage.vue';

export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/user',
        component: UserPage,
    },
]
