import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import parameterView from '../views/parameter/index.vue'
import permissionView from '../views/permission/index.vue'
import newsView from '../views/news/index.vue'
import pointView from '../views/point/index.vue'
import notificationView from '../views/notification/index.vue'
import organizeView from '../views/organize/index.vue'
import loginView from '../views/login/index.vue'
import userView from '../views/user/index.vue'
import errorView from '../views/errorView.vue'
import { useLoginStore } from '@/stores/index'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/parameterView',
      name: 'parameterView',
      component: parameterView
    },
    {
      path: '/permissionView',
      name: 'permissionView',
      component: permissionView
    },
    { 
      path: '/newsView',
      name: 'newsView',
      component: newsView 
    },
    { 
      path: '/pointView',
      name: 'pointView',
      component: pointView 
    },
    { 
      path: '/pointView',
      name: 'pointView',
      component: pointView 
    },
    { 
      path: '/notificationView',
      name: 'notificationView',
      component: notificationView 
    },
    { 
      path: '/organizeView',
      name: 'organizeView',
      component: organizeView 
    },
    { 
      path: '/loginView',
      name: 'loginView',
      component: loginView 
    },
    { 
      path: '/userView',
      name: 'userView',
      component: userView 
    },
    { 
      path: '/:pathMatch(.*)*',
      component: errorView 
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

//可在未登入時進入
const allow = ['loginView']

router.beforeEach((to, from) => {
  // console.log('to',to.name)
  const loginStore = useLoginStore()
  if(!(allow.includes(to.name) || loginStore?.status)){
    return '/loginView'
  }
  // explicitly return false to cancel the navigation
  // return false
})
export default router
