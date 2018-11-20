import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/layout.vue'),
      children: [{
        path: '',
        name: 'index',
        component: () => import('@/components/index/index.vue')
      }]
    },
    {
      path: '/content',
      name: 'content',
      redirect: 'Remarks',
      component: () => import('@/components/layout2.vue'),
      children: [
        {
          path: 'Remarks',
          name: 'Remarks',
          component: () => import('@/components/Remarks')
        },
        {
          path: 'Issues',
          name: 'Issues',
          component: () => import('@/components/Issues')
        },
        {
          path: 'Issues/detail',
          name: 'IssuesDetail',
          component: () => import('@/components/Issues/Details.vue')
        },
        {
          path: 'person/list',
          name: 'list',
          component: () => import('@/components/person/list.vue')
        },
        {
          path: 'person/detail',
          name: 'detail',
          params: { name: '特朗普' },
          component: () => import('@/components/person/detail.vue')
        },
        {
          path: 'person/neige',
          name: 'neige',
          component: () => import('@/components/person/neige.vue')
        },
        {
          path: 'person/cyy',
          name: 'neige',
          component: () => import('@/components/person/cyy.vue')
        },
        {
          path: 'person/zyy',
          name: 'neige',
          component: () => import('@/components/person/zyy.vue')
        },
        {
          path: 'person/dparty',
          name: 'neige',
          component: () => import('@/components/person/dparty.vue')
        },
        {
          path: 'person/rparty',
          name: 'neige',
          component: () => import('@/components/person/rparty.vue')
        },
        {
          path: 'congress',
          name: 'congress',
          component: () => import('@/components/congress/congress.vue')
        },
        {
          path: 'committee',
          name: 'committee',
          component: () => import('@/components/congress/committee.vue')
        }]
    }
  ]
})
