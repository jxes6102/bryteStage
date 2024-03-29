import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import parentView from '../views/parent/index.vue'
import loginView from '../views/login/index.vue'
import userView from '../views/user/index.vue'
import scheduleView from '../views/schedule/index.vue'
import rollCallView from '../views/rollCall/index.vue'
import errorView from '../views/errorView.vue'
import { useLoginStore,useUserStore } from '@/stores/index'
import { checkToken } from '@/api/api'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/loginView',
      name: 'loginView',
      component: loginView 
    },
    { 
      path: '/parentView',
      name: 'parentView',
      component: parentView 
    },
    { 
      path: '/userView',
      name: 'userView',
      component: userView 
    },
    { 
      path: '/rollCallView',
      name: 'rollCallView',
      component: rollCallView 
    },
    { 
      path: '/scheduleView',
      name: 'scheduleView',
      component: scheduleView 
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
  // console.log('to',to)
  const loginStore = useLoginStore()
  const userStore = useUserStore()
  if(!(allow.includes(to.name) || loginStore?.status)){
    return '/loginView'
  }
  if(loginStore?.status){
    checkToken().then((res) => {
      // console.log('checkToken api',res)
      if(res.data.status){
        userStore.setUserInformation(res.data.data)
      }else{
        loginStore.clearToken()
        userStore.clearUserInformation()
        return '/loginView'
      }
    })
  }
  // explicitly return false to cancel the navigation
  // return false
})
export default router
