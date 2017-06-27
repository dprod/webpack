import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Page from '@/components/Page'
import Page404 from '@/components/Page404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/pages/:slug',
      component: Page,
    },
    {
      path: '*',
      component: Page404,
    }
  ]
})

router.beforeEach((to, from, next) => {

  // console.log(`beforeEach`)
  next()

})

export default router
