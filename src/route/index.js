import { lazy } from 'react';

export const RouteConfig = [
    {
        path: '/',
        component: lazy(() => import('../compont/home'))
    },
    {
        path: '/login',
        component: lazy(() => import('../compont/login'))
    }
];
