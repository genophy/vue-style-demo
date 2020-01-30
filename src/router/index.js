import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode  : 'hash',
    base  : process.env.BASE_URL,
    routes: [
        {
            path     : '/',
            component: () => import(   '../views/Main.vue'),
            children : routes
        }
    ]
});

router.beforeEach((to, from, next) => {
    window.$vue?.$Loading?.start();
    next();
});

router.afterEach(route => {
    window.$vue?.$Loading?.finish();
});
export default router;
