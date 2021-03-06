// 存放路由表
import Vue from "vue"
import VueRouter from "vue-router"

//重写push
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    // 重定向
    redirect: '/switch'
  }, {
    path: '/checkbox',
    component: () => import("./components/checkbox")
  }, {
    path: '/radio',
    component: () => import("./components/radio")
  }, {
    path: '/button',
    component: () => import("./components/button")
  }, {
    path: '/icon',
    component: () => import("./components/icon")
  }, {
    path: '/layout',
    component: () => import("./components/layout")
  }, {
    path: '/three',
    component: () => import("./components/three")
  }, {
    path: '/dialog',
    component: () => import("./components/dialog")
  }, {
    path: '/input',
    component: () => import("./components/input")
  }, {
    path: '/switch',
    component: () => import("./components/switch")
  }],
  mode: 'history'
})
export default router