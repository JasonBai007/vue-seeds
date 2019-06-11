import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: r => {
    require(['./login'], r)
  },
  meta: {
    title: 'console 登录'
  }
}]

export default new VueRouter({
  // mode: 'history',
  routes: routes
})