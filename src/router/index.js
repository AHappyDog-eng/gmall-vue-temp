import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('../views/home/Home')
const Fenlei = ()=> import('../views/fenlei/FenLei')
const Car = ()=> import('../views/car/MyCar')
const Me = ()=> import('../views/me/Me')

/*更改导航栏重复的问题*/
const routerPush = VueRouter.prototype.push
Vue.use(VueRouter)
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/fenlei',
    component: Fenlei
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/me',
    component: Me
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
