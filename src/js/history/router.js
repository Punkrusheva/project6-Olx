import { homePage, searchResults, fun2, fun3, fun4, oneCategory, fun8 } from './update-page' 
//console.log('Router', searchResults);
export const routers = [
    {
        path:'/',
        component: homePage,
        meta: { auth: false}
    },
   /* {
        path:'/search',
        component: searchResults,
        meta: { auth: false}
    },*/
    {
        path: '/category',
        component: oneCategory,
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
        path:'/goods',
        component: fun8,
        meta: { auth: false}
    }
];