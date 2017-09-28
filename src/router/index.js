import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import One from '@/components/one'
// import Me from '@/components/me'

Vue.use(Router)

// const Hello = r => require.ensure([], () => r(require('@/components/Hello.vue')), 'htl')
// const One = r => require.ensure([], () => r(require('@/components/one.vue')), 'htl')

// const Hello = resolve => require(['@/components/Hello.vue'], resolve)
// const One = resolve => require(['@/components/one.vue'], resolve)

const router = new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/index.vue'], resolve),
    },
    {
      path: '/Me',
      name: 'Me',
      component: resolve => require(['@/components/me.vue'], resolve),
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/index.vue'], resolve)
    },

    { //页面错误处理
      path: '*',
      component: resolve => require(['@/components/index.vue'], resolve)
    }

  ],
  mode: 'history'     //去掉链接里面的#
})

router.beforeEach((to, from, next) => {
  // 没有匹配成功的路由，跳转到index页面,to.matched.length一级路由返回1，二级路由返回2，以此类推
  if (to.matched.length >= 1) {
    next()
  } else {
    // next({path: '/hello'})
  }
  // console.log(from);
  // console.log(to);
  next();
})

export default router
