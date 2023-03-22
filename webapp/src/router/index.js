import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { store  } from 'vuex';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin-',
    component: () => import('../views/AdminView.vue'),
    // beforeEnter(to, from, next){
    //   if ( to.name !== 'login'){
    //      next({
    //        path: '/login',
    //        replace: true
    //      })
    //   } else {
    //      next()
    //   }
    // }
  },
  {
    path: '/login',
    name: 'login-',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/product',
    name: 'product-',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/registration',
    name: 'registration-',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile-',
    component: () => import('../views/UserProfileView.vue'),
    // beforeEnter(to, from, next){
      //   if ( to.name !== 'login'){
      //      next({
      //        path: '/login',
      //        replace: true
      //      })
      //   } else {
      //      next()
      //   }
      // }
  },
  {
    path: '/contact',
    name: 'con-tact',
    component: () => import('../views/ContactFormView.vue'),
    // beforeEnter(to, from, next){
      //   if ( to.name !== 'login'){
      //      next({
      //        path: '/login',
      //        replace: true
      //      })
      //   } else {
      //      next()
      //   }
      // }
  },
  {
    path: '/single-product/:id',
    name: 'single-product',
    component: () => import('../views/SingleProductView.vue')
  }
]

// to - tells us information about the path 
// to - comes into as a array
// info is mashed into the -to- 
// Check if user is Auth
// Else - call the next() function

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach( (to, from, next)=> {
//   const userAuthCheck = false
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(userAuthCheck){  //user is Auth
//       next()
//     }else{  //user is not auth
//       router.push('/login')
//     }
//   }else{
//     next()
//   }
// })

export default router
