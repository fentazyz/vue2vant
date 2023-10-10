import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login', component: () => import('../views/login/index')
  }, {
    path: '/',
    component: () => import('../views/layout/index'),
    redirect: '/home',
    children: [{
      path: '/home', component: () => import('../views/layout/home')
    }, {
      path: '/cartgory', component: () => import('../views/layout/caregory')
    }, {
      path: '/cart', component: () => import('../views/layout/cart')
    }, {
      path: '/user', component: () => import('../views/layout/user')
    }]
  }, {
    path: '/search', component: () => import('../views/search/index')
  }, {
    path: '/searchlist', component: () => import('../views/search/list')
  }, {
    path: '/prodetail/:id', component: () => import('../views/prodetail/index')
  }, {
    path: '/pay', component: () => import('../views/pay/index')
  }, {
    path: '/myorder', component: () => import('../views/myorder/index')
  }
]

const router = new VueRouter({
  routes
})
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // next('/home')
  // console.log(to)
  // console.log(!authUrls.includes(to.path))
  if (!authUrls.includes(to.path)) {
    next()
  } else {
    const token = store.getters['User/getToken']
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
