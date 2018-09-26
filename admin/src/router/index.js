import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/html/Index'

Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    { path: '/', name: 'Index', component: () => import('@/components/html/Index'),
      children:[ //子路由
        {
          path: '/',
          name: 'home',
          component: () => import('@/components/children/Home')
        }
      ]
    },

  ]
})
