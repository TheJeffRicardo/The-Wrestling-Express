import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cookies from 'js-cookie'

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
    beforeEnter() {
      if(!Cookies.get('myUser')){
        router.push({name: 'login-'})
      }
    }
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
    beforeEnter() {
      if(!Cookies.get('myUser')){
        router.push({name: 'login-'})
      }
    }
  },
  {
    path: '/contact',
    name: 'con-tact',
    component: () => import('../views/ContactFormView.vue'),
    // beforeEnter() {
    //   if(!Cookies.get('myUser')){
    //     router.push({name: 'login-'})
    //   }
    // }
  },
  {
    path: '/single-product/:id',
    name: 'single-product',
    component: () => import('../views/SingleProductView.vue'),
    // beforeEnter() {
    //   if(!Cookies.get('myUser')){
    //     router.push({name: 'login-'})
    //   }
    // }
  },
  {
    path: '/user/:id/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
    // beforeEnter() {
    //   if(!Cookies.get('myUser')){
    //     router.push({name: 'login-'})
    //   }
    // }
  },
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
//   const store = useStore()
//   const userFetch = computed( ()=>store.state.user)
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(userAuthCheck === userFetch ){  //user is Auth
//       next()
//     }else{  //user is not auth
//       router.push('/login')
//     }
//   }else{
//     next()
//   }
// })

export default router
