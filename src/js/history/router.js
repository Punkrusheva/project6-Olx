import { homePage, fun2, fun3, fun4, fun6, fun7, fun8 } from './update-page' 
//console.log('Router', homePage);
export const routers = [
    {
        path:'/',
        component: homePage,
        meta: { auth: false}
    },
    {
        path: '/category',
        component: fun7,
        meta: { auth: false}
    },

    {
        path:'/page1',
        component: fun2,
        meta: { auth: true}
    },
    {
        path:'/page2',
        component: fun3,
        meta: { auth: false}
    },
    {
        path:'/page3',
        component: fun4,
        meta: { auth: false}
    }, 
    {
        path:'/search',
        component: fun6,
        meta: { auth: false}
    },
    
    {
        path:'/goods',
        component: fun8,
        meta: { auth: false}
    }
];