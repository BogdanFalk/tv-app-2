import Vue from 'vue'
import Router from 'vue-router'
import Tv from '../views/tv-view.vue'
import FourOfour from '../views/404.vue'


/* eslint-disable */ 
Vue.use(Router)

export const router = new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
   {
       path: '/tv',
       name: 'tv-view',
       component: Tv
   },
   {
       path: '*',
       name: '404',
       component: FourOfour
    }

  ]
});


//router.beforeEach((to, from, next) => {
 
  
//   const publicPages = ['/home', '/about','/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   const loggedInData = JSON.parse(loggedIn);
   
  
//   if (authRequired && !loggedIn) {
//     return next('/home');
//   }
 
  //console.log("From Router.js:"+loggedInData.fieldOfPractice);
 
  //next();


//})
